# Pingdom Monitor

## DESCRIÇÃO
---

Graças ao sucesso da [primeira etapa](https://ifpb.github.io/css-exercises/challenges/packages/pingdom-monitor/) de seleção do IFPB para recrutar pessoas que gerassem o Front-End de um ferramente semelhante ao [Pingdom](https://www.pingdom.com), é que o IFPB veio continuar a seleção em mais uma etapa, mas agora envolvendo a geração dinâmica de conteúdo com o Javascript.

A princípio foi disponibilizado o projeto HTML e CSS neste [link](code.zip), contudo, o sistema deve gerar a interface semelhante ao da *Figura 1* usando dados JSON na pasta `code/data/` e o arquivo Javascript `code/js/load.js`.

*Figura 1 - Layout da página*

![Layout da página](assets/layout.png)

> **Observação:** A princípio deve ser entregue ao menos o Componente 4 ou 5.

## COMPONENTES
---

**COMPONENTE 1 -** Crie o conteúdo do Painel de Hosts no arquivo [`code/index.html`](code/index.html), especificamente em `TODO Hosts`:

```html
<!-- 
TODO Hosts (data/status.json)
<div class="col">
  <h3 class="counter">10</h3>
  <p class="text-muted">Up</p>
</div>
<div class="col">
  <h3 class="counter">1</h3>
  <p class="text-muted">Down</p>
</div>
--> 
```

mas considerando que:

* Os dados para geração do HTML estão no arquivo `data/status.json`.
* O conteúdo do painel deve seguir a estrutura HTML:

```
<div class="col">
  <h3 class="counter">10</h3>
  <p class="text-muted">Up</p>
</div>
<div class="col">
  <h3 class="counter">1</h3>
  <p class="text-muted">Down</p>
</div>
``` 

* O painel deve apresentar a disponsição conforme a *Figura 2*.

*Figura 2 - Painel de Hosts*<br>

![Layout da página](assets/hosts.png)

**COMPONENTE 2 -** Crie o conteúdo do Painel de tempo de resposta no arquivo [`code/index.html`](code/index.html), especificamente em `TODO Response Time`, mas considerando os estilos do Componente 1, os dados em `data/status.json` e a aparência da *Figura 3*:

*Figura 3 - Painel do tempo de reposta*<br>

![Layout da página](assets/response-time.png)


**COMPONENTE 3 -** Crie o conteúdo do Painel de tempo de disponibilidade no arquivo [`code/index.html`](code/index.html), especificamente em `TODO Uptime`, mas considerando os estilos do Componente 1, os dados em `data/status.json` e a aparência da *Figura 4*:

*Figura 4 - Painel do tempo de disponibilidade*<br>

![Layout da página](assets/uptime.png)


**COMPONENTE 4 -** Crie o conteúdo do Painel de registros de monitoramento (Logs) no arquivo [`code/index.html`](code/index.html), especificamente em `TODO LOGS`, mas considerando a aparência semelhante à *Figura 5*:

*Figura 5 - Painel de Hosts*<br>

![Layout da página](assets/logs.png)

e as seguintes observações:

* Os dados para geração do HTML do log estão no arquivo `data/logs.json`.
* O conteúdo de cada log deve possuir um HTML semelhante a esta estrutura:

```
<div class="log d-flex">
  <span class="fa-stack down fa-lg">
    <i class="fa fa-circle fa-stack-2x"></i>
    <i class="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
  </span>
  <div>
    <p class="name">Moodle IFPB</p>
    <p class="response">Timeout (11/02/17 03:33:51)</p>
  </div>
</div>
``` 

* A informação sobre o tempo de resposta pode possuir dois estados:
  * `<p class="response">Timeout (11/02/17 03:33:51)</p>`, onde representa ausência de feedback
  * `<p class="response">Resonse 500ms (11/02/17 03:32:51)</p>`, onde informa o tempo do feebback

**COMPONENTE 5 -** Crie o conteúdo do Painel da tabela dos registros de disponibilidade no arquivo [`code/index.html`](code/index.html), especificamente em `TODO UPTIME`, mas considerando a aparência da *Figura 6*:

*Figura 6 - Painel da tabela dos registros de disponibilidade*<br>

![Layout da página](assets/uptime-table.png)

e as seguintes observações:

* Os dados para geração do HTML do uptime estão no arquivo `data/uptime.json`.
* O conteúdo de cada log deve possuir um HTML semelhante a esta estrutura:

```
<tr>
  <td></td>
  <td>Moodle IFPB</td>
  <td>HTTP</td>
  <td>
    <span class="badge badge-danger">DOWN</span>
  </td>
  <td>-</td>
  <td>30 mi</td>
  <td>-</td>
</tr>
``` 

* A informação sobre o status de resposta pode possuir três estados:
  * `<span class="badge badge-danger">DOWN</span>`
  * `<span class="badge badge-warning">UP</span>`
  * `<span class="badge badge-success">UP</span>`

> [Alternativa de resposta](code-response/)
