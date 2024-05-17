function VideoPlayerLucasFariassa() {
    const [videoUrls, setVideoUrls] = React.useState([]);

    React.useEffect(() => {
        // Baixar URLs do feed do canal Lucas Fariassa
        fetch('http://gdata.youtube.com/feeds/api/users/lucasfariassa/uploads?max-results=1&alt=json')
            .then(response => response.json())
            .then(result => {
                const entries = result.feed.entry;
                const urls = entries.map(entry => {
                    const url = entry.link[0].href;
                    const embedUrl = url.replace('/watch?v=', '/embed/').split('&')[0];
                    return embedUrl;
                });
                setVideoUrls(urls);
            })
            .catch(error => console.error('Erro ao carregar vídeo do canal Lucas Farias:', error));
    }, []);

    // Renderizar os vídeos do YouTube
    return (
        <React.Fragment>
            {videoUrls.map((url, index) => (
                <article key={index}>
                    <iframe width="480" height="270" src={url} frameborder="0" allowfullscreen></iframe>
                </article>
            ))}
        </React.Fragment>
    );
}

// Componente React para renderizar o vídeo do YouTube
function VideoPlayerLuckieSkywalker() {
    const [videoUrls, setVideoUrls] = React.useState([]);

    React.useEffect(() => {
        // Baixar URLs do feed do canal LuckieSkywalker
        fetch('http://gdata.youtube.com/feeds/api/users/luckieskywalker/uploads?max-results=1&alt=json')
            .then(response => response.json())
            .then(result => {
                const entries = result.feed.entry;
                const urls = entries.map(entry => {
                    const url = entry.link[0].href;
                    const embedUrl = url.replace('/watch?v=', '/embed/').split('&')[0];
                    return embedUrl;
                });
                setVideoUrls(urls);
            })
            .catch(error => console.error('Erro ao carregar vídeo do canal LuckieSkywalker:', error));
    }, []);

    // Renderizar os vídeos do YouTube
    return (
        <React.Fragment>
            {videoUrls.map((url, index) => (
                <article key={index}>
                    <iframe width="480" height="270" src={url} frameborder="0" allowfullscreen></iframe>
                </article>
            ))}
        </React.Fragment>
    );
}
