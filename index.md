---
layout: default
---

<ul>
{% for category in site.data.toc %}
<li>{{ category.title }}
	<ul>
{% for graph in category.graphs %}
<li><a href="?category={{category.folder}}&graph={{ graph.filename }}">{{graph.title}}</a></li>
{% endfor %}
	</ul>
</li>
{% endfor %}
<ul>