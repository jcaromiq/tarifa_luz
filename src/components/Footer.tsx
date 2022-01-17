function Footer() {
    return (
        <footer className="absolute bottom-14">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
                <a className="border-dashed	border-b-2 text-base" href="https://blog.joaquin-caro.es" target="_blank" rel="noreferrer">Desarrollado por Joaco</a>
                <span className="sm:block hidden">•</span>
                <a className="border-dashed	border-b-2 text-base" href="https://github.com/jcaromiq/tarifa_luz" rel="nofollow noreferrer" target="_blank">GitHub</a>
                <span className="sm:block hidden">•</span>
                <a className="border-dashed	border-b-2 text-base" href="https://github.com/jcaromiq/tarifa_luz/issues/new" rel="nofollow noreferrer" target="_blank">Enviar sugerencia</a>
            </div>
        </footer>
    
    )
}

export default Footer;
