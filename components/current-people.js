class CurrentPeople extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
      <h1>Postdoctoral Researchers</h1>
        <hr class="underheader"/>
        <div id="Huijing Xu" class="feature">
            <div class="feature-left">
                <img src="assets/people/huijing_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/huijing-xu-a3a27494/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Huijing Xu</h2>
                <p>Huijing Xu received her Ph. D. in Biomedical Engineering at the University of
                    Southern California in 2019. After receiving her BS in Biomedical Engineering
                    from Shanghai JiaoTong University, she continued studying in this field
                    at USC and developed her interests in Neural Engineering and cortical
                    prostheses. In 2011, she joined the Center for Neural Engineering (CNE)
                    where she works under the direction of Professor T. W. Berger and Professor
                    Dong Song. Her research focuses on the development of novel neural interfacing
                    techniques and the understanding of the function of the hippocampus in memory
                    processing. Specifically, she works on the design and development of conformal
                    multi-electrode arrays that can recording neural activities from multiple
                    sub-regions of the hippocampus simultaneously from behaving animals and to
                    conduct behavioral experiments to study the information transformation
                    within the hippocampus tri-synaptic circuit.</p>
            </div>
        </div>

        <h1>Graduate Students</h1>
        <hr class="underheader"/>
        <div id="xiwei" class="feature">
            <div class="feature-left">
                <img src="assets/people/xiwei_square.jpg"/>
                <div class="social">
                    <a href="https://scholar.google.com/citations?user=ZokQL7IAAAAJ&hl=en&oi=ao">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/xiwei-she-1a83b5190/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Xiwei Shé</h2>
                <p>Xiwei Shé joined the lab in 2016 as a research assistant.
                    Xiwei is working on neural decoding projects by using
                    machine learning technologies. He is interested in data
                    science and artificial intelligence, which he believes
                    is the future of computer science study and will help
                    countless people to enjoy a better life.
                </p><p>Xiwei is also
                    a big fan of computer games, especially strategy and
                    cooperation games. He enjoys the feeling of thinking
                    and planning to get final wins, and cooperates with
                    friends to fight together: a beautiful way to develop
                    friendships.
                </p>
            </div>
        </div>

        <div id="wenxuan" class="feature">
            <div class="feature-left">
                <img src="assets/people/wenxuan_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/wenxuan-jiang-92a0a7168/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Wenxuan Jiang</h2>
                <p>Wenxuan Jiang is a Ph.D. student in the Department of Biomedical Engineering. She received a B.S. degree in Biomedical Engineering from the National University of Singapore in 2015 and an M.S. degree in Electrical Engineering from the University of Southern California in 2020. Wenxuan has been trained in rodent surgery, microelectrode implantation, electrophysiology, and computational modeling under the mentorship of Professor Dong Song. She is interested in combining experimental and computational methods to study hippocampal and cortical circuit dynamics underlying learning and memory.
                </p>
            </div>
        </div>

        <div id="bryan" class="feature">
            <div class="feature-left">
                <img src="assets/people/bryan.jpg"/>
                <div class="social">
                    <a href="https://scholar.google.com/citations?user=CfFbr9QAAAAJ&hl=en">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/bryan-j-moore-md-345672b2/">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                    <a href="https://github.com/bryanmooremd">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#github"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Bryan Moore</h2>
                <p>Bryan Moore earned dual-degrees in Biochemistry and Philosophy at Virginia Tech while conducting research on the pH stability of superoxide dismutase. He attended medical school and earned his MD at the Medical College of Virginia at Virginia Commonwealth University, where he published work on morphologic changes of dendritic spines in status epilepticus.  Dr Moore completed a clinical Neurology residency at NYU and a clinical Neurocritical Care fellowship at the Hospital of the University of Pennsylvania, where he concurrently completed a post-doc research fellowship at the University of Pennsylvania Computational Memory Lab. After fellowships, he joined the University of Minnesota as an Assistant Professor (Affiliate) in the Department of Neurology with a clinical appointment at Hennepin County Medical Center as a Staff Neurointensivist and Medical Director of Stroke. Dr Moore is boarded in Neurology and in Neurocritical Care. He completed a Masters in Information and Data Science (MIDS) at the University of California, Berkeley before joining the Neural Modeling and Interface Lab at USC as a graduate research fellow. His current research is towards a PhD in Biomedical Engineering. He is also completing a Masters in Computer Science during his time at USC.
                    Dr Moore's current research involves using deep learning to capture the nonlinear functions that guide spike transformations between layers of neurons in the human brain. His research interests include both applied machine learning and theoretical machine learning, including using biologically-inspired novel algorithm techniques in deep learning.
                    </p><p>He is the proud owner of three cats.
                </p>
            </div>
        </div>

        <div id="zhouxiao" class="feature">
            <div class="feature-left">
                <img src="assets/people/zhouxiao_square.jpg"/>
                <div class="social">
                    <a href="https://linkedin.com/in/zhouxiao-lu">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                    <a href="https://github.com/amanda1u1u">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#github"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Zhouxiao Lu</h2>
                <p>Zhouxiao Lu is a Ph.D. student at the Department of Biomedical Engineering. She graduated with a B.S. in Biomedical Engineering and a minor in neuroscience from the University of North Carolina at Chapel Hill in 2020. Zhouxiao had experience in animal experiments and is interested in neurotechnology, especially brain-machine interfaces. She enjoys circuit design, hardware programming, and signal processing. Zhouxiao is passionate about the diagnosis and treatment of neurological disorders such as Alzheimer’s Disease.</p>
				<p>In her leisure time, Zhouxiao enjoys cooking, hanging out with friends, and playing video games.
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

        <div id="yilei" class="feature">
            <div class="feature-left">
                <img src="assets/people/yilei_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/yilei-dong-926737188/">
                        <div>
                            <svg viewBox="0 0 20 24" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Yilei Dong</h2>
                <p>Yilei Dong is a Neuroscience (BS) student, planning on minoring in Foundations of Data Science. She hopes to pursue a career in data science in the future. Currently, she is helping to create a literature survey on deep learning applied to  neuroscience research.</p>
                <p>In her spare time, Yilei enjoys sewing, boba, and going for weekend drives by the beach.</p>
            </div>
        </div>

        <div id="john" class="feature">
            <div class="feature-left">
                <img src="assets/people/john_square.jpg"/>
                <div class="social">
                    <a href="https://www.linkedin.com/in/john-pace-452185142/">
                        <div>
                            <svg viewBox="0 0 20 24" width="20" ><use xlink:href="#linkedin"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">John Pace</h2>
                <p>John Pace is a Computational Neuroscience student at the University of Southern California and is trained in computational neurology and biology that joined the lab in March of 2021. He is active in Neuroscience seminars, medical organizations on and around campus, in addition to his experience as a Health Administrative Intern at PIH Health and previous research with NASA's Student Payload Opportunity with Citizen Science. (SPOCS). He actively takes part in neuroscience-based bioengineering research through the Viterbi School of Engineering and is pursuing a joint bachelors with a Masters in Health Administration (M.H.A.), and an eventual Doctor of Medicine (M.D.).</p>
            </div>
        </div>

        <div id="robert" class="feature">
            <div class="feature-left">
                <img src="assets/people/rob_square.jpg"/>
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

customElements.define('current-people', CurrentPeople);

