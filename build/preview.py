"""Bundle index.html + assets into one self-contained file (for the Claude preview)."""
import os, re, sys
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
out = sys.argv[1]
html = open(os.path.join(root, "index.html")).read()
css = open(os.path.join(root, "assets/style.css")).read()
data = open(os.path.join(root, "assets/data.js")).read()
app = open(os.path.join(root, "assets/app.js")).read()
body = re.search(r"<!--BODY-->(.*)<!--/BODY-->", html, re.S).group(1)
fonts = re.search(r'<link rel="stylesheet" href="(https://fonts[^"]+)">', html).group(1)
page = f"""<title>Lakshya</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="{fonts}">
<style>
{css}
</style>
{body}
<script>
{data}
</script>
<script>
{app}
</script>
"""
open(out, "w").write(page)
print(out, len(page))
