# DORYWCZA CLIENT - [LINK](https://dorywcza-client.azurewebsites.net) TO AZURE WEBSITE

Client-side web app created with Angular 8, RxJS, Material Design and Bootstrap.

## Table of Contents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

This project aims to provide a web app, which allows to search job offers.
It provides dashboard for employers as well, where you can log in.
With dashboard you can add new offer and manage employees, that applied for your offers.

## Technologies

Dorywcza Client connects to Dorywcza API for fetching data, stored in SQL Database provided by Azure.

Programming tools that I use within this project are :
- DEPENDENCY INJECTION:
    As Angular Project hardly cannot exists without it, services that connect to API or authenticate user are injected into components.
- FILTERING STREAM WITH RXJS:
    To display exclusively this data that is currently needed, component filter stream data that arrives from server with RxJS pipe.
- RESPONSIVE LAYOUT:
    Not fully working, but I tried to make layout of this web app adjustable to all sizes of screen. I used Angular Material and Bootstap.

## Setup

To run this poject:
- download or clone this repository,
- install using npm required packages:

```
npm install @angular/cli latest
```

- build this project:

```
ng build --prod
```

However project is already deployed by me on Azure and can be seen under the following [link](https://dorywcza-client.azurewebsites.net)

It can occurs that entering first time, page-refresh is needed to see all content (performance of this page is not so good due to running on free-account Azure server).
