class Alumni extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>Alumni</h1>
        <hr class="underheader"/>

        <div id="penning" class="feature">
            <div class="feature-left">
                <img src="assets/people/penning.jpg"/>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Pen-Ning Yu</h2>
                <p>Pen-Ning Yu completed his Ph.D. in Biomedical Engineering under the supervision of Dr. Dong Song in September 2020.
                    Pen-Ning's research interests include electrophysiology, EEG analysis, nonlinear dynamical modeling, machine learning, and seizure prediction.</p>

            </div>
        </div>

        <div id="sahar" class="feature">
            <div class="feature-left">
                <img src="assets/people/sahar_square.jpg"/>
                <div class="social">
                    <a href="https://scholar.google.com/citations?user=NMdIfoUAAAAJ&hl=en">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/sahar-elyahoodayan-78b8734b/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Sahar Elyahoodayan</h2>
                <p>Sahar Elyahoodayan completed her Ph.D. thesis titled “Design and Testing of Next Generation Neural Interface Technology for Neural Prostheses” under the supervision of Dr. Dong Song in August 2020. Her work involved hardware and software development of neuromodulation systems, implantable electrode design and validation, and pre-clinical in vivo animal studies.
                </p><p>She is now working in the medical device industry developing next-generation implantable neuromodulation systems.
                </p>
            </div>
        </div>
    `;
    }
}

customElements.define('alumni-people', Alumni);

