---
layout: default
description: "A new recipe for every week of 2022!"
---

<div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:max-w-7xl lg:mx-auto">
  {% for item in site.recipes %}
    {% if item.week == 1 %}
      {% assign lastweek = 1 %}
    {% else %}
      {% assign lastweek = item.week | minus:1 %}
    {% endif %}
    <div class="py-4 border-b br-khaki lg:p-8 hidden" data-show-week="{{ item.week }}">
      <p class="b-goldenrod c-black inline-block py-0.5 px-1 mb-2 text-sm">Week {{ item.week }}</p>
      <h2><a href="javascript:void(0);" class="c-dark-sienna transition-all duration-200 hover:c-red focus:c-red disabled underline" data-link-week="{{ item.week }}">{{ item.title }}</a></h2>
    </div>
  {% endfor %}
</div>