# Contributing to Awesome CloudNatives

Thank you for your interest in contributing! This guide will help you add influencers to the directory.

## Who Can Be Added?

We're looking for active content creators and thought leaders in the DevOps/Cloud/Cloud-Native space who:

- ✅ Actively create content (blogs, videos, talks, courses, podcasts, newsletters)
- ✅ Share knowledge and help educate the community
- ✅ Have a consistent public presence for at least 6 months
- ✅ Focus on DevOps, Cloud, Cloud-Native, Kubernetes, or related technologies
- ✅ Demonstrate genuine expertise and community engagement

## Self-Submissions

**Self-submissions are absolutely welcome!** If you create content in this space and meet the criteria above, please add yourself. Just be honest about your contributions and impact.

## How to Add an Influencer

### Step 1: Fork and Clone

1. Fork this repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/awesome-cloudnatives.git
   cd awesome-cloudnatives
   ```

### Step 2: Choose the Right Category

Create a new JSON file in the appropriate category directory:

```
data/influencers/
├── kubernetes/     # Kubernetes experts
├── aws/            # AWS specialists
├── azure/          # Azure specialists
├── gcp/            # Google Cloud experts
├── devops/         # General DevOps practitioners
├── cicd/           # CI/CD and GitOps experts
├── platform/       # Platform Engineering specialists
└── security/       # DevSecOps and security experts
```

Choose the category that **best represents** the person's primary focus. If they cover multiple areas, pick the most prominent one.

### Step 3: Create the Profile

Create a file named `firstname-lastname.json` in the chosen category directory.

Use this template:

```json
{
  "id": "firstname-lastname",
  "name": "Full Name",
  "tagline": "Brief one-liner description (10-150 characters)",
  "bio": "Longer bio, 2-3 sentences describing their work and expertise",
  "avatar": "https://github.com/username.png",
  "expertise": {
    "primary": ["Kubernetes", "AWS"],
    "secondary": ["CI/CD", "DevSecOps"]
  },
  "social": {
    "twitter": "handle",
    "github": "username",
    "linkedin": "username",
    "youtube": "channel-handle",
    "website": "https://example.com",
    "mastodon": "@user@instance.social"
  },
  "content": {
    "blog": "https://blog.example.com",
    "newsletter": "https://newsletter.link",
    "podcast": "https://podcast.link",
    "courses": "https://courses.link",
    "speaking": true,
    "workshops": true
  },
  "meta": {
    "location": "City, Country",
    "languages": ["English"],
    "company": "Company Name",
    "verified": false,
    "added_date": "2025-01-15"
  }
}
```

### Step 4: Fill in Required Fields

**Required fields:**
- `id`: Lowercase slug (e.g., `kelsey-hightower`)
- `name`: Full name
- `tagline`: Brief description
- `expertise.primary`: At least 1 expertise area (max 5)
- `social`: At least one social link (GitHub, Twitter, LinkedIn, or YouTube)

**Optional fields:**
- `bio`: Longer description
- `avatar`: Profile image URL (GitHub avatars work great: `https://github.com/USERNAME.png`)
- `expertise.secondary`: Additional expertise areas
- `content`: Links to blogs, newsletters, podcasts, courses
- `meta`: Additional information

**Valid Expertise Areas:**
- Kubernetes
- AWS
- Azure
- GCP
- DevOps
- CI/CD
- GitOps
- Platform Engineering
- SRE
- DevSecOps
- Observability
- Infrastructure as Code
- Containers
- Serverless
- Microservices

### Step 5: Validate Your JSON

Make sure your JSON is valid:

```bash
# Install dependencies (if you have Node.js)
npm install

# Validate your JSON file
npm run validate
```

Or use an online JSON validator like [jsonlint.com](https://jsonlint.com/).

### Step 6: Submit a Pull Request

1. Create a new branch:
   ```bash
   git checkout -b add-firstname-lastname
   ```

2. Add your file:
   ```bash
   git add data/influencers/category/firstname-lastname.json
   git commit -m "Add: Firstname Lastname"
   ```

3. Push to your fork:
   ```bash
   git push origin add-firstname-lastname
   ```

4. Open a Pull Request on GitHub with:
   - **Title:** `Add: Firstname Lastname`
   - Fill out the PR template
   - Indicate if it's a self-submission

## PR Review Process

- **Automated checks** will run to validate your JSON file
- **Maintainers** will review within 7 days
- **At least 1 approval** is required before merging
- We may request changes if something doesn't meet the criteria

## Updating Existing Profiles

To update an existing profile:

1. Find the JSON file in `data/influencers/`
2. Make your changes
3. Submit a PR with title: `Update: Firstname Lastname`
4. Explain what you changed and why

## Code of Conduct

- Be respectful and professional
- No spam or self-promotion without merit
- No fake profiles or misleading information
- Focus on helping the community discover quality content creators

## Questions?

- Open an [issue](https://github.com/nimeshmora/awesome-cloudnatives/issues)
- Check existing issues and PRs for similar cases
- Read the [About page](https://nimeshmora.github.io/awesome-cloudnatives/about/)

## Tips for Success

✅ **Do:**
- Provide accurate, up-to-date information
- Include working links
- Write clear, concise descriptions
- Follow the JSON schema
- Check for existing profiles to avoid duplicates

❌ **Don't:**
- Exaggerate expertise or impact
- Add people without their knowledge (unless they're public figures)
- Include promotional content or advertising
- Submit incomplete profiles

---

Thank you for helping make Awesome CloudNatives better! 🎉
