#!/usr/bin/env node

/**
 * Validation script for influencer data
 * Checks for duplicates and data integrity
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const errors = [];
const warnings = [];

// Track unique identifiers
const seenIds = new Set();
const seenGitHub = new Set();
const seenTwitter = new Set();

async function validateInfluencers() {
  const dataPath = join(process.cwd(), 'data', 'influencers');
  const categories = await readdir(dataPath);

  for (const category of categories) {
    const categoryPath = join(dataPath, category);
    let files;

    try {
      files = await readdir(categoryPath);
    } catch (err) {
      continue; // Skip if not a directory
    }

    for (const file of files) {
      if (!file.endsWith('.json')) continue;

      const filePath = join(categoryPath, file);
      const content = await readFile(filePath, 'utf-8');

      let data;
      try {
        data = JSON.parse(content);
      } catch (err) {
        errors.push(`❌ Invalid JSON in ${category}/${file}: ${err.message}`);
        continue;
      }

      // Check for duplicate ID
      if (seenIds.has(data.id)) {
        errors.push(`❌ Duplicate ID "${data.id}" in ${category}/${file}`);
      }
      seenIds.add(data.id);

      // Check for duplicate GitHub username
      if (data.social?.github) {
        if (seenGitHub.has(data.social.github)) {
          errors.push(`❌ Duplicate GitHub username "${data.social.github}" in ${category}/${file}`);
        }
        seenGitHub.add(data.social.github);
      }

      // Check for duplicate Twitter handle
      if (data.social?.twitter) {
        if (seenTwitter.has(data.social.twitter)) {
          errors.push(`❌ Duplicate Twitter handle "${data.social.twitter}" in ${category}/${file}`);
        }
        seenTwitter.add(data.social.twitter);
      }

      // Validate required fields
      if (!data.name || data.name.length < 2) {
        errors.push(`❌ Invalid or missing name in ${category}/${file}`);
      }

      if (!data.tagline || data.tagline.length < 10) {
        errors.push(`❌ Tagline too short or missing in ${category}/${file}`);
      }

      if (!data.expertise?.primary || data.expertise.primary.length === 0) {
        errors.push(`❌ Missing primary expertise in ${category}/${file}`);
      }

      // Check if at least one social link exists
      const hasSocial = data.social && (
        data.social.github ||
        data.social.twitter ||
        data.social.linkedin ||
        data.social.youtube
      );

      if (!hasSocial) {
        errors.push(`❌ No social links provided in ${category}/${file}`);
      }

      // Validate filename matches ID
      const expectedFilename = `${data.id}.json`;
      if (file !== expectedFilename) {
        warnings.push(`⚠️  Filename "${file}" doesn't match ID "${data.id}" (expected: ${expectedFilename})`);
      }

      // Check expertise count
      if (data.expertise.primary.length > 5) {
        warnings.push(`⚠️  Too many primary expertise areas (${data.expertise.primary.length}) in ${category}/${file} - max is 5`);
      }
    }
  }
}

// Run validation
console.log('🔍 Validating influencer data...\n');

validateInfluencers()
  .then(() => {
    if (warnings.length > 0) {
      console.log('Warnings:');
      warnings.forEach(w => console.log(w));
      console.log();
    }

    if (errors.length > 0) {
      console.log('Errors:');
      errors.forEach(e => console.log(e));
      console.log();
      console.log(`❌ Validation failed with ${errors.length} error(s)`);
      process.exit(1);
    } else {
      console.log('✅ All validation checks passed!');
      console.log(`   - ${seenIds.size} influencers validated`);
      console.log(`   - ${warnings.length} warning(s)`);
      process.exit(0);
    }
  })
  .catch(err => {
    console.error('❌ Validation script failed:', err);
    process.exit(1);
  });
