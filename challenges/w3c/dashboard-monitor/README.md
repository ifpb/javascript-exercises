# Dashboard Monitor

## DESCRIÇÃO
---

Considere que uma empresa, graças ao sucesso dos profissional no IFPB para gerar o Front-End do Dashboard Admin, veio em busca de um profissional com domínio nos conceitos de adminstração de sistemas, que pudesse continuar a criação de uma página Web de seus sistemas.

A princípio foi disponibilizado o projeto HTML e CSS no arquivo [code.zip](code.zip), contudo, o sistema deve gerar a interface semelhante ao da *Figura 1* usando dados JSON na pasta `data/` por meio da linguagem Javascript.

*Figura 1 - Proposta de Template*
![Layout](assets/layout.png)

Portanto, cabe a você continuar o desenvolvimento através dos componentes que serão levantadas a seguir, detalhe, no total será exigido a entrega de no mínimo dois componentes.

## COMPONENTES
---

**COMPONENTE 1 -** Crie o conteúdo do Painel Top stats no arquivo [`code/index.html`](code/index.html), especificamente em `TODO top stats` mas considerando que:

* Os dados para geração do HTML estão no arquivo `data/top-stats.json`.
* O conteúdo do painel deve seguir a estrutura HTML:

```html
<div class="col-6 col-sm-4 col-lg-2">
  <div class="card">
    <div class="card-body p-3 text-center">
      <div class="text-right text-green">
        6%
        <i class="fa fa-chevron-up"></i>
      </div>
      <div class="h1 m-0">43</div>
      <div class="text-muted mb-4">New Tickets</div>
    </div>
  </div>
</div>
...
``` 

* O painel deve apresentar a disponsição conforme a *Figura 2*.

*Figura 2 - Painel Top Stats*<br>

![Top Stats](assets/component1.png)

**COMPONENTE 2 -** Crie o conteúdo do Painel Development Activity no arquivo [`code/index.html`](code/index.html), especificamente em `TODO development activity` mas considerando que:

* Os dados para geração do HTML estão no arquivo `data/development-activity.json`.
* O conteúdo do painel deve seguir a estrutura HTML:

```html
<tr>
  <td class="w-1">
    <span class="avatar" style="background-image: url(img/faces/male/9.jpg)"></span>
  </td>
  <td>Ronald Bradley</td>
  <td>Initial commit</td>
  <td class="text-nowrap">May 6, 2018</td>
  <td class="w-1">
    <a href="#" class="icon">
      <i class="fa fa-trash"></i>
    </a>
  </td>
</tr>
...
``` 

* O painel deve apresentar a disponsição conforme a *Figura 3*.

*Figura 3 - Painel Development Activity*<br>

![Development Activity](assets/component2.png)

**COMPONENTE 3 -** Crie o conteúdo do Painel Side Stats no arquivo [`code/index.html`](code/index.html), especificamente em `TODO side stats` mas considerando que:

* Os dados para geração do HTML estão no arquivo `data/side-stats.json`.
* O conteúdo do painel deve seguir a estrutura HTML:

```html
<tr>
  <td class="w-1">
    <span class="avatar" style="background-image: url(img/faces/male/9.jpg)"></span>
  </td>
  <td>Ronald Bradley</td>
  <td>Initial commit</td>
  <td class="text-nowrap">May 6, 2018</td>
  <td class="w-1">
    <a href="#" class="icon">
      <i class="fa fa-trash"></i>
    </a>
  </td>
</tr>
...
``` 

* O painel deve apresentar a disponsição conforme a *Figura 4*.

*Figura 4 - Painel Side Stats*<br>

![Side Stats](assets/component3.png)

**COMPONENTE 4 -** Crie o conteúdo do Painel Bottom Stats no arquivo [`code/index.html`](code/index.html), especificamente em `TODO bottom stats` mas considerando que:

* Os dados para geração do HTML estão no arquivo `data/bottom-stats.json`.
* O conteúdo do painel deve seguir a estrutura HTML:

```html
<div class="col-sm-6">
  <div class="card">
    <div class="card-body text-center">
      <div class="h5">New feedback</div>
      <div class="display-4 font-weight-bold mb-4">62</div>
      <div class="progress progress-sm">
        <div class="progress-bar bg-red" style="width: 28%"></div>
      </div>
    </div>
  </div>
</div>
...
``` 

* O painel deve apresentar a disponsição conforme a *Figura 5*.

*Figura 5 - Painel Bottom Stats*<br>

![Bottom Stats](assets/component4.png)
<br>
<br>
<br>
> **[Alternativa de resposta](code-response/)**