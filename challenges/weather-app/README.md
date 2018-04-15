## APLICATIVO DE CLIMA

* * *

Um grupo de ciclistas estava procurando uma aplicação Web para facilitar o acompanhamento das condições climática de João Pessoa, mas que fosse simples e com a aparência limpa.

Inicialmente um *designer* chegou a criar a [página Web](code.zip) da *Figura 1* de modo estático, e estava precisando da ajuda de um programador Javascript para tornar a página dinâmica.

*Figura 1 - Site da previsão do tempo (Versão Mobile)*<br>
<!-- ![layout-mobile](assets/layout-mobile.png) -->
<img src="assets/layout-mobile.png" alt="layout-mobile" width="300px" style="border: 1px solid #7f7f7f">

Pensando em facilitar a programação do Javascript o *designer* planejou as seguintes questões.

## QUESTÕES

* * *

**QUESTÃO 1** - Crição de componentes dinâmicos da *Figura 1* usando o arquivo [weather-forecast.json](https://ifpb.github.io/ls/exams/prova-api/code/data/weather-forecast.json):

**a) (50%)** O cabeçalho, conforme a *Figura 2*.

*Figura 2 - Cabeçalho do site da previsão do tempo.*<br>
![layout-mobile](assets/header.png)

**b) (50%)** A área de informações extras, conforme a *Figura 3*.

*Figura 3 - Informação extra do site da previsão do tempo.*<br>
![layout-mobile](assets/status.png)

**c) (50%)** A tabela de previsões dos demais dias, conforme a *Figura 4*.

*Figura 4 - Previsão semanal.*<br>
![layout-mobile](assets/forecasts.png)

**QUESTÃO 2 (50% <span style="color:red">Obrigatória</span>)** - Como o grupo de ciclistas às vezes recebe algumas pessoas do exterior, foi solicitado a criação de um seletor de formato de temperatura, como ilustrado na *Figura 5*, que faz a converão entre `Celsius` e `Fahrenheit` de todas as temperaturas da página.

*Figura 5 - Conversor.*<br>
![layout-mobile](assets/converter.png)

> **Dica**: Para converter as temperaturas use as seguintes fórmulas:

```
C = (F - 32) / 1.8
F = C * 1.8 + 32
```

> [Alternativa de resposta](code-response/).
