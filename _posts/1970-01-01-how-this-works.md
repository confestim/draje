---
layout: post
title: "Theme Features Demo"
date: 1970-01-01
tags: [demo, features, theme]
excerpt: "A comprehensive showcase of all the features available in this Jekyll theme"
hero_image: "/assets/img/heroes/example_post.png"
---

# Theme Features Demo

Welcome to a comprehensive demonstration of all the features available in this Jekyll theme! This post showcases everything from basic typography to advanced components.

## Typography & Text Formatting

This theme uses **Fira Sans** for body text and **Fira Code** for monospace elements, providing excellent readability and beautiful code ligatures.

### Basic Text Styles

- **Bold text** using `**bold**`
- *Italic text* using `*italic*`
- ~~Strikethrough text~~ using `~~strikethrough~~`
- `Inline code` using backticks
- [Links to other pages](/about) and [external links](https://github.com)

### Lists

Unordered lists:
- First item
- Second item
  - Nested item
  - Another nested item
- Third item

Ordered lists:
1. First numbered item
2. Second numbered item
   1. Nested numbered item
   2. Another nested item
3. Third numbered item

## Code Blocks & Syntax Highlighting

The theme includes beautiful syntax highlighting with the Dracula color scheme:

### JavaScript Example
```javascript
// Example JavaScript code with ligatures
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Arrow functions and operators look great
const result = arr.filter(x => x >= 10)
                 .map(x => x * 2)
                 .reduce((a, b) => a + b, 0);

console.log(`Result: ${result}`);
```

### Python Example
```python
# Python code with proper highlighting
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quicksort(left) + middle + quicksort(right)

# Usage example
numbers = [3, 6, 8, 10, 1, 2, 1]
sorted_numbers = quicksort(numbers)
print(f"Sorted: {sorted_numbers}")
```

## GitHub-Style Callouts

The theme supports GitHub-style callouts for highlighting important information:

> [!NOTE]
> This is a note callout with useful information! Use these to provide additional context or helpful details.

> [!TIP]
> Here's a helpful tip for you. These are great for sharing best practices or shortcuts.

> [!IMPORTANT]
> This is really important information that readers shouldn't miss. Use sparingly for maximum impact.

> [!WARNING]
> This is a warning about something important. Use these to highlight potential issues or things to be careful about.

> [!CAUTION]
> Be careful with this information. This is for things that could cause problems if not handled properly.

## Blockquotes

Traditional blockquotes are also supported:

> "The best way to predict the future is to invent it."
> 
> — Alan Kay

## Tables

The theme includes clean table styling:

| Feature | Description | Status |
|---------|-------------|--------|
| Syntax Highlighting | Dracula theme colors | ✅ Complete |
| Responsive Design | Mobile-first approach | ✅ Complete |
| Dark/Light Mode | Theme toggle | ✅ Complete |
| Search & Filter | Blog post filtering | ✅ Complete |
| GitHub Callouts | Multiple callout types | ✅ Complete |
| Typography | Fira fonts with ligatures | ✅ Complete |

## Navigation & Layout

### Theme Toggle
The theme includes a beautiful theme toggle button that switches between dark and light modes. The toggle is available on all pages and remembers your preference.

### File Tree Navigation
The homepage features a beautiful file tree-style navigation:

```
./
├── Blog
└── About
```

## Social Links

The homepage includes social media integration with Font Awesome icons:
- GitHub profile links
- LinkedIn integration
- YouTube channel links
- Custom links

Just change the variables in `_config.yml`

## Customization

The theme is built with CSS custom properties (variables) making it easy to customize:

```css
:root {
  --dracula-bg: #282a36;
  --dracula-fg: #f8f8f2;
  --dracula-purple: #bd93f9;
  --dracula-pink: #ff79c6;
  /* ... and many more */
}
```
All located in `assets/css/main.css`

## Mathematics (if MathJax is enabled)

The theme can support mathematical notation:

Inline math: $E = mc^2$

Block math:
$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

---

> [!TIP]
> To get started with your own posts, create new markdown files in the `_posts` directory following the naming convention `YYYY-MM-DD-title.md`.

Happy blogging!

## YAML Configuration & Post Management

This Jekyll theme uses YAML for configuration and metadata management. Here's everything you need to know:

### Post Front Matter (YAML Headers)

Every blog post must start with YAML front matter between triple dashes. Here's the structure:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-20
tags: [technology, tutorial, guide]
excerpt: "A brief description of your post that appears in listings"
hero_image: "/assets/img/your-image.jpg"  # Optional
---
```

**Required Fields:**
- `layout: post` - Uses the post template
- `title` - The post title (use quotes if it contains special characters)
- `date` - Publication date in YYYY-MM-DD format

**Optional Fields:**
- `tags` - Array of tags for categorization and filtering
- `excerpt` - Short description shown in post listings
- `hero_image` - Path to a hero image for the post

### Working Projects Tracker

The theme includes a built-in project tracker using `_data/working.yaml`. This file lets you showcase current projects:

```yaml
- name: Statistical analysis of getting Northshire Cleric in Hearthstone
  priority: 1 # 1 to 5 (1 = highest priority)
  eta: N/A

- name: Asian media as a depression indicator (is it catalyst?)
  priority: 3
  eta: August
```

**Fields:**
- `name` - Project description or title
- `priority` - Number from 1-5 (1 = highest priority)
- `eta` - Expected completion time or "N/A"

This data automatically appears on your homepage, showing visitors what you're currently working on.

### Site Configuration

The main site configuration is in `_config.yml`. Here's the structure with explanations:

```yaml
# Basic Site Information
title:              "Your Name"
bio:                "Short bio about yourself"
description:        "Site tagline or description"
logo:               'assets/img/logo.png'
url:                https://yourdomain.com

# Reading Settings
reading_time:       true        # Show estimated reading time
words_per_minute:   100        # Used for reading time calculation

# Localization
locale:             en_US
tiled_bg:           false      # Background tiling option

# Jekyll Build Settings
permalink:          /posts/:title/
markdown:           kramdown
highlighter:        rouge

# Kramdown (Markdown) Configuration
kramdown:
  auto_ids:         true       # Auto-generate heading IDs
  footnote_nr:      1         # Footnote numbering start
  entity_output:    as_char   # HTML entity output
  toc_levels:       1..6      # Table of contents levels
  enable_coderay:   false     # Use Rouge instead
  syntax_highlighter: rouge
  syntax_highlighter_opts:
    block:
      line_numbers: false     # No line numbers in code blocks

# Additional Features
mathjax:            true      # Enable mathematical notation

# SASS/CSS Processing
sass:
  sass_dir:         _sass
  style:            compressed

# Social Media Links (all optional)
github_user:        yourusername
youtube_user:       your-channel-id    # Channel ID, not username
linkedin_user:      your-linkedin-username

# File Processing
include:
  - _pages
  - _posts
  - assets

exclude: 
  - README.md
  - Gemfile
  - Gemfile.lock
  - node_modules
  - gulpfile.js
  - package.json
  - _site
  - src
  - vendor
  - CNAME
  - LICENSE
  - Rakefile
```

### Creating New Posts

1. Posts must follow the format `YYYY-MM-DD-title.md`
2. Place files in the `_posts/` directory
3. Start with YAML header, then write in Markdown

Example workflow:
```bash
# Create a new post
touch _posts/2025-01-20-my-new-post.md

# Add front matter and content
echo "---
layout: post
title: \"My New Post\"
date: 2025-01-20
tags: [tutorial, example]
excerpt: \"Learning how to create posts in this Jekyll theme\"
---

# My New Post

Content goes here...
" > _posts/2025-01-20-my-new-post.md
```

### Data Files

The `_data/` directory can contain YAML files for structured data:

- `working.yaml` - Current projects (already included)
- You can add more files like `skills.yaml`, `projects.yaml`, etc.

Access data in templates using `{{ site.data.filename.property }}`.

### Template Structure

Understanding the file structure helps with customization:

```
./
├── _config.yml          # Main site configuration
├── _data/
│   └── working.yaml     # Current projects data
├── _includes/           # Reusable HTML components
├── _layouts/           # Page templates
├── _posts/             # Blog posts
├── assets/
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── img/           # Images
└── index.html         # Homepage
```

> [!TIP]
> When adding images to posts, place them in `assets/img/posts/` and reference them with `/assets/img/posts/your-image.jpg` in your markdown.

> [!IMPORTANT]
> Always validate your YAML syntax! Invalid YAML will prevent Jekyll from building your site. Use online YAML validators or your editor's YAML support.


## Deploying
If you are not using GH pages, do `bundle install` into `bundle exec jekyll serve`.