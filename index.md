---
layout: feed
title: Blog
icon: fa-comment-alt
pagination: 
  enabled: true
---

<ul class="p-0 post-list">
  {% for post in paginator.posts %}
    <li class="row mb-5">
      <div class="col-12 d-flex justify-content-center text-center">
        <a class="text-dark post-link" href="{{ post.url }}">
        <span>{{ post.title }}</span>
        <br>
        <small class="d-flex justify-content-center">{{ post.date | date: "%-d %B %Y" }}</small>
        </a>
      </div>
    </li>
  {% endfor %}
</ul>
