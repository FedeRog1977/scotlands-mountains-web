---
title:
- CS958 -- July Progress Report
author:
- Lewis Britton
header-includes:
- \usepackage{geometry}
- \geometry{
	a4paper,
	total={210mm,297mm},
	tmargin=30mm,
	bmargin=30mm,
	lmargin=30mm,
	rmargin=30mm,
	}
- \renewcommand{\baselinestretch}{1.25}
- \usepackage{longtable}
- \pagenumbering{gobble}
---

# Summary

Reminder: a web-based application for GPS mapping the Scottish Highlands. Based on the Ordnance Survey Leisure mapping API and Leaflet JavaScript library. It is written in HTML, CSS and JavaScript.

# Checklists

*Revised lists from June Progress Report, new addition: `To-Do'*

## Application

* JSON master building -- **Complete**
* GPX route file gathering -- **Complete**
* "Drafting Room" page
	- Route and mountain `Overview' (JSON) -- **Complete**
	- Ability and equipment `Conditioning' analyser (JSON) -- **Complete**
	- OpenWeather API `Weather' application -- **Complete**
* "Conquest Map" page
	- OS base map implementation -- **Complete**
	- Location tracking -- **Complete**
	- Distance measuring -- **Complete**
	- Project automated suggestions
	- Feature toggle on/off (JSON) -- **Complete**
	- Ability and equipment querying (JSON) -- **Complete**
	- Route querying (JSON) -- **Complete**
	- Route printing (GPX) -- **Complete**
	- Landmass querying (JSON) -- **Complete**
	- Various non-essential JavaScript elements -- **Complete**
* Graphic design -- **Complete**
* Photo manipulation -- **Complete**
* Informative research and writing (keys and `suggested readings' etc.)
* Photo gathering

\newpage

## Write-Up

\begin{tabular}{rll}
\renewcommand{\arraystretch}{1.25}
	\sc{Section 1} & \it{Introduction} & \bf{Complete}\\
	\sc{Section 2} & \it{Research \& Evidential Background} & \bf{Complete}\\
	\sc{Section 3} & \it{System Requirements} & \bf{Complete}\\
	\sc{Section 4} & \it{Data Gathering} & \bf{Complete}\\
	\sc{Section 5} & \it{System Design} & \bf{Complete (Under Review)}\\
	\sc{Section 6} & \it{System Construction} & \bf{Complete (Under Review)}\\
	\sc{Section 7} & \it{Evaluation} & \bf{Under Construction}\\
	\sc{Section 8} & \it{Development Conclusions}
\end{tabular}

## To-Do

* Application
	- Comment code in more depth
	- Homepage find nearest project
	- Conquest find nearest project
	- Finish weather suggested reading (cloud types)
	- Filter routes by ability
	- Filter routes by equipment
	- Update various old terminology
	- Complete ability and equipment photo gathering
* Write-Up
	- General: Short, 1 sentence, intros to all sections
	- General: Fix double table lines
	- Section 2 / A Appendix: Finish Walkhighlands and Strava heuristics write-up (A1/A2)
	- Section 5 / A Appendix: Finish remaining functions (A6)
	- Section 7: Page prototyping demonstrations
	- Section 7 / A Appendix: Continuous testing Q\&As
	- Section 7 / A Appendix: Isolated/Comprehensive testing surveys
	- Section 7 / A Appendix: ElasticSearch and Kibana
	- Section 7: Write
	- Section 8: Write
