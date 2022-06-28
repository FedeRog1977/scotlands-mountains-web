---
title:
- CS958 -- June Progress Report
author:
- Lewis Britton
header-includes:
- \usepackage{geometry}
- \geometry{
	a4paper,
	total={210mm,297mm},
	tmargin=10mm,
	bmargin=10mm,
	lmargin=30mm,
	rmargin=30mm,
	}
- \renewcommand{\baselinestretch}{1.25}
- \usepackage{longtable}
- \pagenumbering{gobble}
---

# Summary

Reminder: a web-based application for GPS mapping the Scottish Highlands. Based on the Ordnance Survey Leisure mapping API and Leaflet JavaScript library. It is written in HTML, CSS and JavaScript. In plain text format (Vim)! None of this modern bloat that the kids are into. To some degree, the HTML base is complete, sadly it's a primarily JavaScript site so any amendments to HTML are minor and align generally with additions in the JavaScript. CSS is obviously ongoing but not critical. In terms of JavaScript, all of the base scripts which relate directly to the required functionality of the site, apart form one, are pretty much complete. The final one is the graphing feature which isn't necessary to the brief so can be developed with an element of ease. The write-up in underway and probably about 30\% complete, as the data section is being re-visited. If you consider the ongoing notes I've been taking while developing the system (which relate directly to the data, design and construction sections of the write-up) it's probably about 50-60\% complete.

# Checklists

## Application

* JSON master building -- **Complete**
* GPX route file gathering -- **Complete**
* Home page
	- Route and mountain overview (JSON) -- **Complete**
	- Ability and equipment analyser (JSON)
	- OpenWeather API weather mini-application (large script) -- **Complete**
* `Conquest' mapping page (large script)
	- OS map implementation -- **Complete**
	- Location tracking -- **Complete**
	- Distance measuring
	- Project automated suggestions
	- Feature toggle on/off (JSON) -- **Complete**
	- Ability and equipment inputs (JSON)
	- Route search and information delivery (JSON) -- **Complete**
	- Route print (GPX) -- **Complete**
	- Various non-required JavaScript elements -- **Complete**
* `Ranger' graphing page (large script)
	- Various *Chart.js* elements under development
* Graphic design (logo etc.) -- **Complete**
* Informative research and writing (keys and `suggested readings' (hahaha) etc.)

\newpage

## Write-Up

*See draft write-up contents (pages v--vii).*

*Don't know how to use zathura to isolate pages, although I really should, so just ignore all the main content.*

*If you do choose to venture into the main body, ignore anything in brackets (`[`) as these contain memes or references just for my own satisfaction. They'll likely be removed for submission. Also ignore any notes under incomplete sections as these follow no order and are just for my own reference.*

* Section 1 -- **Complete**
* Section 2 -- **Complete**
* Section 3 -- **Under Reconstruction**
* Section 4 -- **Complete**
* Section 5 -- **Under Development**
* Section 6 -- **Under Development**
* Section 7 -- **Under Consideration**
* Section 8
