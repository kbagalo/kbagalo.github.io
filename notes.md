---
layout: page
title: Notes
permalink: /notes/
description: Writing on agentic evaluation, inference serving, and putting fine-tuned models into production.
---

{% if site.posts.size > 0 %}
<ul class="note-list">
  {%- for post in site.posts %}
  <li>
    <span class="post-meta"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    {%- if post.description %}
    <p>{{ post.description }}</p>
    {%- endif %}
  </li>
  {%- endfor %}
</ul>
{% else %}
<p class="muted">Nothing here yet.</p>
{% endif %}
