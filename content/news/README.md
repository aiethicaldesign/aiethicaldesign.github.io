# How to Add or Edit News Articles

## Adding a New Article

1. **Open this folder** on GitHub: navigate to `content/news/` in the repository.
2. **Click "Add file" → "Create new file"** in the top-right corner.
3. **Name your file** using lowercase words separated by dashes, ending in `.md`. Example: `my-new-article.md`
4. **Copy the template** from [`_template.md`](./_template.md) and paste it into the editor.
5. **Fill in the frontmatter** (the section between `---` lines at the top):
   - `title` — the article headline
   - `description` — a short summary (shown on the listing page)
   - `date` — publication date, e.g. `"Jan 15, 2026"`
   - `author` — your name or `"OxfordCCAI"`
   - `readTime` — estimated read time, e.g. `"3 min read"`
   - `type` — one of: `News`, `Research`, `Publication`, `Project`, `Workshop`, `Event`, `Upcoming`
   - `image` — (optional) path to an image, e.g. `"/images/news/my-photo.jpg"`
6. **Write your article** below the second `---` line using Markdown.
7. **Commit the file** using the green "Commit changes" button.

The site will rebuild automatically and your article will appear on the news page.

## Editing an Existing Article

1. Navigate to the `.md` file you want to edit in `content/news/`.
2. Click the **pencil icon** (Edit) in the top-right.
3. Make your changes.
4. Click **"Commit changes"**.

## Adding Images

1. Navigate to `public/images/news/` in the repository.
2. Click **"Add file" → "Upload files"**.
3. Drag and drop your image(s) and commit.
4. Reference the image in your article as: `"/images/news/your-filename.jpg"`

## Quick Markdown Reference

| Format | Syntax |
|---|---|
| **Bold** | `**bold text**` |
| *Italic* | `*italic text*` |
| Link | `[link text](https://url.com)` |
| Image | `![description](/images/news/file.jpg)` |
| Heading | `## Heading` (use ## for sections, ### for subsections) |
| Bullet list | `- item` (one per line) |
| Numbered list | `1. item` (one per line) |
| Quote | `> quoted text` |

## Type Values

Use one of these for the `type` field:

- `News` — general news and announcements
- `Research` — research updates and collaborations
- `Publication` — papers and academic publications
- `Project` — ongoing projects
- `Workshop` — workshops and hackathons
- `Event` — conferences and summits
- `Upcoming` — upcoming activities

## Tips

- GitHub shows a **Preview** tab when editing `.md` files — use it to check formatting.
- The filename becomes the URL slug: `my-article.md` → `/news/my-article`
- Files starting with `_` (like `_template.md`) are ignored by the site.
- Keep image files under 500 KB for fast page loads.
