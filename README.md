# ☁️ Awesome CloudNatives

> Discover the voices shaping DevOps, Cloud, and Cloud-Native - all in one place.

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/nimeshmora/awesome-cloudnatives?style=social)](https://github.com/nimeshmora/awesome-cloudnatives)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🎯 What is This?

**Awesome CloudNatives** is a community-curated directory of influential content creators, thought leaders, and practitioners in the DevOps, Cloud, and Cloud-Native ecosystem.

Whether you're looking for:
- 🎓 **Learning resources** from Kubernetes experts
- ☁️ **Cloud platform** specialists (AWS, Azure, GCP)
- 🔄 **DevOps practices** and automation
- 🏗️ **Platform engineering** insights
- 🔒 **DevSecOps** and security expertise
- 🚀 **CI/CD and GitOps** guidance

...you'll find them all here, organized and searchable.

## 🌐 Website

**Browse the directory:** [https://awesomecloudnatives.cloud](Official web page)

Features:
- 🔍 **Full-text search** powered by Pagefind
- 🏷️ **Filter by expertise** (Kubernetes, AWS, DevOps, etc.)
- 📱 **Responsive design** for mobile and desktop
- ⚡ **Lightning fast** static site built with Astro

## 📊 Stats

- **12+ influencers** (and growing!)
- **8 categories** covering the full cloud-native ecosystem
- **15+ expertise areas** to filter by
- **100% community-driven** contributions

## 🗂️ Categories

| Category | Focus Area | Example Experts |
|----------|------------|-----------------|
| **Kubernetes** | Container orchestration, K8s ecosystem | Kelsey Hightower, Brendan Burns |
| **AWS** | Amazon Web Services | Corey Quinn, Forrest Brazeal |
| **Azure** | Microsoft Azure | Scott Hanselman |
| **GCP** | Google Cloud Platform | Ahmet Alp Balkan |
| **DevOps** | DevOps practices, culture | Jessie Frazelle, Corey Quinn |
| **CI/CD** | Continuous Integration/Deployment | Viktor Farcic, Jérôme Petazzoni |
| **Platform Engineering** | Internal developer platforms | Liz Rice, Charity Majors |
| **DevSecOps** | Security and compliance | Liz Rice |

## 🤝 Contributing

**We welcome contributions from everyone!** This is a community project.

### How to Add an Influencer

1. Read our [Contributing Guidelines](CONTRIBUTING.md)
2. Fork this repository
3. Add a JSON file in the appropriate category under `data/influencers/`
4. Submit a Pull Request

**Self-submissions are welcome!** If you create content in this space, don't hesitate to add yourself.

### Quick Start

```bash
# Fork and clone the repo
git clone https://github.com/nimeshmora/awesome-cloudnatives.git
cd awesome-cloudnatives

# Create a new influencer file
cat > data/influencers/kubernetes/your-name.json << EOF
{
  "id": "your-name",
  "name": "Your Name",
  "tagline": "Brief description of what you do",
  "expertise": {
    "primary": ["Kubernetes", "DevOps"]
  },
  "social": {
    "github": "yourusername",
    "twitter": "yourhandle"
  }
}
EOF

# Validate your JSON
npm install
npm run validate

# Submit a PR!
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

## 🛠️ Local Development

Want to run the website locally?

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Criteria for Inclusion

We look for people who:

- ✅ **Actively create content** (blogs, videos, talks, courses, podcasts)
- ✅ **Share knowledge** and help educate the community
- ✅ **Consistent presence** for at least 6 months
- ✅ **Focus on cloud-native** technologies and practices
- ✅ **Demonstrate expertise** and community engagement

## 🏗️ Tech Stack

This project is built with modern, performant tools:

- **[Astro](https://astro.build)** - Static site generator
- **[Pagefind](https://pagefind.app)** - Client-side search
- **[GitHub Pages](https://pages.github.com)** - Hosting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

## 📜 Data Format

Influencer profiles are stored as JSON files following this schema:

```json
{
  "id": "unique-slug",
  "name": "Full Name",
  "tagline": "Brief one-liner",
  "expertise": {
    "primary": ["Kubernetes", "AWS"]
  },
  "social": {
    "github": "username",
    "twitter": "handle"
  }
}
```

See [data/schema.json](data/schema.json) for the complete schema.

## 🤔 FAQ

**Q: Can I add myself?**
A: Absolutely! Self-submissions are welcome if you meet the criteria.

**Q: How long does review take?**
A: We aim to review PRs within 7 days.

**Q: What if someone is missing?**
A: Open an issue or submit a PR! This is community-driven.

**Q: Can I update an existing profile?**
A: Yes! Submit a PR with the updates.

**Q: Is this only for "big names"?**
A: No! We value quality content creators at all levels. If you're actively sharing knowledge, you belong here.

## 🙏 Acknowledgments

- All the amazing **content creators** who share their knowledge
- **Contributors** who help maintain this directory
- The **cloud-native community** for inspiring this project

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show Your Support

If you find this project useful:

- ⭐ **Star this repo** on GitHub
- 🐦 **Share it** with your network
- 🤝 **Contribute** by adding influencers
- 💬 **Spread the word** about awesome content creators

---

<div align="center">

**Built with ❤️ by the cloud-native community**

[Website](https://nimeshmora.github.io/awesome-cloudnatives) • [Contributing](CONTRIBUTING.md) • [Issues](https://github.com/nimeshmora/awesome-cloudnatives/issues)

</div>
