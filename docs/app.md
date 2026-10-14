# Podcast Manager

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio
Podcasts feito em vídeo

## Como

### Features
- Listas os episódios podcasts em sessões de categorias

### Como vou implementar
GET: retorna lista de episódios

response:
 ```js
 [
 {
    "podcastName": "Flow",
    "episode": "EDITOR-CHEFE DA CITADEL EDITORA - Marcial Conte",
    "videoId": "t_Bvzq3K3g8",
    "cover": "https://i.ytimg.com/vi/t_Bvzq3K3g8/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=t_Bvzq3K3g8",
    "category": ["finanças", "diversos"]
 },
 {
    "podcastName": "Flow",
    "episode": "PROCURANDO UM CARRO NOVO PRA PATROA",
    "videoId": "Fv-evhYthBs",
    "cover": "https://i.ytimg.com/vi/Fv-evhYthBs/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=Fv-evhYthBs",
    "category": ["carro", "familia"]
 }
 ]
 ```

 GET: retorna lista de episodios baseado em um parametro de filtro