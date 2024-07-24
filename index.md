---
layout: default
---

{% for category in site.data.toc %}
<h2>{{ category.title }}</h2>
<ul>
{% for graph in category.graphs %}
<li>
	{% if graph.filename %}
		<b><a href="?category={{category.folder}}&graph={{ graph.filename }}">{{graph.title | default: graph.filename}}</a></b>
	{% else %}
		<b>{{ graph.title }}</b>
	{% endif %}
	{% if graph.description %}
		<br/>{{ graph.description }}
	{% endif %}
</li>
{% endfor %}
	</ul>
{% endfor %}