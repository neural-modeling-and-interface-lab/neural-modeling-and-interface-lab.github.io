class Alumni extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
<h1>Graduate Students</h1>
        <hr class="underheader"/>
        <div id="penning" class="feature">
            <div class="feature-left">
                <img src="assets/people/penning.jpg"/>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Pen-Ning Yu</h2>
                <p>Pen-Ning Yu completed his Ph.D. in Biomedical Engineering under the supervision of Dr. Dong Song in September 2020.
                    Pen-Ning's research interests include electrophysiology, EEG analysis, nonlinear dynamical modeling, machine learning, and seizure prediction.</p>
<p>He is now an Assistant Professor of Mechanical Engineering at National Cheng Kung University in Taiwan.
                </p>
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
<h1>Undergraduate Students</h1>
<hr class="underheader"/>

<div id="garrett" class="feature">
            <div class="feature-left">
                <img src="assets/people/garrett_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/garrettmflynn/">
                        <div>
                            <svg viewBox="0 0 20 24" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                    <a href="https://github.com/garrettmflynn">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#github"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Garrett Flynn</h2>
                <p>Garrett Flynn is a progressive degree student in the Computational Neuroscience (BS) and Media Arts, Games, and Health (MA) programs. Working at the intersection of neuroscience, ethics, and interactive media, he leads several interdisciplinary projects out of the Neural Modeling and Interface Lab.
                </p><p>When not dreaming up new ways to incorporate end-user feedback into neurotechnology design, you can find Garrett on long bike rides in his home state of Wisconsin.
                </p>
            </div>
        </div>

        <div id="natalie" class="feature">
            <div class="feature-left">
                <img src="assets/people/natalie_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/natalie-kistler-9b9545194/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Natalie Kistler</h2>
                <p>Natalie Kistler is a Biomedical Engineering student and on the Pre-Med track in hopes of pursuing medical school after completing her undergraduate degree. Natalie is currently working on a cooperative project between the Neural Modeling and Interface Lab and Keck Medical School regarding Transcranial Magnetic Stimulation (TMS) and its implementation in the treatment of epilepsy.
                </p><p>In addition to her research, Natalie is a self-proclaimed “foodie” and is on the hunt for the best restaurant in Los Angeles.
                </p>
            </div>
        </div>
        <div id="robert" class="feature">
            <div class="feature-left">
                <img src="assets/people/robert_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/robert-sutherland-4a065b173/">
                        <div>
                            <svg viewBox="0 0 20 24" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Robert Sutherland</h2>
                <p>Robert Sutherland joined the lab in the summer of 2021.  He has had a wide range of experience in the medical device space including working in multiple labs, researching BCI at the Charite in Berlin, presenting at the NSF emerging researcher conference, working as an intern at the FDA, and completing an R&D engineering internship at Boston Scientific.</p>
				<p>He is currently working on his master’s degree in Neuro-Engineering, and his research is focusing on constructing signals processing pipelines that boost performance of machine learning classifiers.  In his free time, Robert likes to draw, ski, dive and travel. </p>
            </div>
        </div>

    `;
    }
}

customElements.define('alumni-people', Alumni);

