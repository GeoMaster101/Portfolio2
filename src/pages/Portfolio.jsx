function Portfolio() {

    const portfolioItems = [
        {
        }
    ]

    return (
        <>
            

            <div id="portfolio-container">
                {
                    portfolioItems.map(item => {
                        return (
                            <div className="big-box">

                                {/* image linked to deployed*/}
                                <a href={item.live}><div
                                    className="box"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></div>
                                </a>

                                {/* github link */}
                                <a href={item.github}><h4>{item.name}</h4></a>


                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Portfolio;