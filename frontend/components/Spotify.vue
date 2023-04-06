<template>
    <div class="area">
        <div class="uk-section uk-margin-auto uk-width-3-4 uk-flex uk-flex-center">
            <div class="circles">
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
            </div>
            <div class="upcircles">
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
                    <i class="star" aria-hidden="true"><img src="../static/star.png"></i>
            </div>
            <div class="uk-flex uk-flex-center">
                <a class="uk-flex" href="/"><img class="toplogo uk-width-3-4@s uk-width-1-2@m uk-width-3-4@l" src="../../frontend/static/stsLogo.png" alt="Choose Nourish Logo."/></a>
            </div>

            <div class="container">

            <div class="positionOne">
            <div class="artistContainer">
            <img class="artist" src="https://images.unsplash.com/photo-1432250767374-ee19cba37b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1317&q=80" 
            alt="Border circle">
            </div>
            <h1 class="artistName blinkOne">Kanye West</h1>
            </div>
            
            <div class="positionTwo">
            <div class="artistContainer">
            <img class="artist" src="https://images.unsplash.com/photo-1620001796685-adf7110fe1a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
            alt="Border circle">
            </div>
            <nuxt-link class="artistName blinkTwo" :to="{path: '/', hash: 'anchor'}" v-scroll-to="{el: '#anchor'}">Pitbull</nuxt-link>
            </div>

            <div class="positionThree">
            <div class="artistContainer">
            <img class="artist" src="https://images.unsplash.com/photo-1603633247906-4746fea3141a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
            alt="Border circle">
            </div>
            <h1 class="artistName blinkThree">Beyonce</h1>
            </div>

            <div class="positionFour">
            <div class="artistContainer">
            <img class="artist" src="https://images.unsplash.com/photo-1606542758304-820b04394ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
            alt="Border circle">
            </div>
            <h1 class="artistName blinkFour">Daft Punk</h1>
            </div>

            <div class="positionFive">
            <div class="artistContainer">
            <img class="artist" src="https://images.unsplash.com/photo-1527867006146-ff7dcb1a9cb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
            alt="Border circle">
            </div>
            <h1 class="artistName blinkFive">Famous Samples</h1>
            </div>

            </div>
            </div>

            <div id="anchor" class="spotify uk-section uk-margin-auto uk-width-3-4 uk-flex uk-flex-center">
                <div class="uk-width-1-2">
                    <iframe class="context" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3NgUACqzz04eVZFiiAx0GR?utm_source=generator" 
                    width="80%" height="600" frameBorder="0" allowfullscreen="false" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            
                <div class="uk-width-1-2">
                    <iframe class="contextright" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4dtBz6G3OxmXcQIsulJbAI?utm_source=generator" 
                    width="80%" height="600" frameBorder="0" allowfullscreen="false" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>

            </div>
        </div>
</template>
