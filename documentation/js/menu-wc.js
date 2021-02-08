'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">digital-overdose documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/App2021Module.html" data-type="entity-link">App2021Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-App2021Module-5b35d98ccb6ecaf3dc2c9dfcb2c78a67"' : 'data-target="#xs-components-links-module-App2021Module-5b35d98ccb6ecaf3dc2c9dfcb2c78a67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-App2021Module-5b35d98ccb6ecaf3dc2c9dfcb2c78a67"' :
                                            'id="xs-components-links-module-App2021Module-5b35d98ccb6ecaf3dc2c9dfcb2c78a67"' }>
                                            <li class="link">
                                                <a href="components/FebHelloWorldComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FebHelloWorldComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5f705bf9ca906db75c8c4ee0b0121e4d"' : 'data-target="#xs-components-links-module-AppModule-5f705bf9ca906db75c8c4ee0b0121e4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5f705bf9ca906db75c8c4ee0b0121e4d"' :
                                            'id="xs-components-links-module-AppModule-5f705bf9ca906db75c8c4ee0b0121e4d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommunityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CommunityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConferenceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConferenceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CopyrightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CopyrightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DiscordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DiscordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainBodyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFound404Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFound404Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsFilteredByAuthorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsFilteredByAuthorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsFilteredByTagComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsFilteredByTagComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsNoFilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsNoFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TeamComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YoutubeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Posts2021RoutingModule.html" data-type="entity-link">Posts2021RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-baa3e1ab40aa936a489bae8b9091f9f0"' : 'data-target="#xs-components-links-module-SharedModule-baa3e1ab40aa936a489bae8b9091f9f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-baa3e1ab40aa936a489bae8b9091f9f0"' :
                                            'id="xs-components-links-module-SharedModule-baa3e1ab40aa936a489bae8b9091f9f0"' }>
                                            <li class="link">
                                                <a href="components/AuthorCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostBodyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostBodyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostInventoryDisplayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostInventoryDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsCardCompactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsCardCompactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsCardCompactHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsCardCompactHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsCardNormalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsCardNormalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BrowserRecognitionService.html" data-type="entity-link">BrowserRecognitionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetaService.html" data-type="entity-link">MetaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TitleService.html" data-type="entity-link">TitleService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Author.html" data-type="entity-link">Author</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AuthorMap.html" data-type="entity-link">AuthorMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PostMap.html" data-type="entity-link">PostMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SocialsLink.html" data-type="entity-link">SocialsLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tag.html" data-type="entity-link">Tag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TagCount.html" data-type="entity-link">TagCount</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});