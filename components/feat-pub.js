class FeaturedPublications extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML= `
        <h1>Featured Publications</h1>
            <hr class = "underheader"/>
                <div id="FeatArticle1" class="feature">
                <div class="feature-left">
                    <img src="assets/news/images/JournalSC.png"/>
                    <div class="social">
                        <a href="https://direct.mit.edu/neco/article-abstract/34/1/219/107912/A-Double-Layer-Multi-Resolution-Classification">
                            <div>
                                <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="feature-text margin-left">
                    <h2 class="top-margin">A Double-Layer Multi-Resolution Classification Model for Decoding Spatiotemporal Patterns of Spikes With Small Sample Size</h2>
                    <h3>January 1st, 2021</h3>
                    <p>We build a double-layer, multiple temporal-resolution classification model for decoding single-trial spatiotemporal patterns of spikes. 
                    The model takes spiking activities as input signals and binary behavioral or cognitive variables as output signals and represents the input-output mapping with a double-layer ensemble classifier. In the first layer, to solve the underdetermined problem caused by the small sample size and the very high dimensionality of input signals, B-spline functional expansion and L1-regularized logistic classifiers are used to reduce dimensionality and yield sparse model estimations. 
                    A wide range of temporal resolutions of neural features is included by using a large number of classifiers with different numbers of B-spline knots. 
                    Each classifier serves as a base learner to classify spatiotemporal patterns into the probability of the output label with a single temporal resolution. 
                    A bootstrap aggregating strategy is used to reduce the estimation variances of these classifiers. In the second layer, another L1-regularized logistic classifier takes outputs of first-layer classifiers as inputs to generate the final output predictions. 
                    This classifier serves as a meta-learner that fuses multiple temporal resolutions to classify spatiotemporal patterns of spikes into binary output labels. We test this decoding model with both synthetic and experimental data recorded from rats and human subjects performing memory-dependent behavioral tasks. 
                    Results show that this method can effectively avoid overfitting and yield accurate prediction of output labels with small sample size. The double-layer, multi-resolution classifier consistently outperforms the best single-layer, 
                    single-resolution classifier by extracting and utilizing multi-resolution spatiotemporal features of spike patterns in the classification.</p>
                </div>
            </div>
            <hr class="new4"/>
            <div id="FeatArticle2" class="feature">
            <div class="feature-left">
                <img src="assets/news/images/Art2.jpg" style="width: 900px; height: auto;"/>
                <div class="social">
                    <a href="https://www.frontiersin.org/articles/10.3389/fnins.2021.616063/full">
                        <div>
                            <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div class="feature-text margin-left">
                <h2 class="top-margin">Stimulation and Recording of the Hippocampus Using the Same Pt-Ir Coated Microelectrodes</h2>
                <h3>February 24th, 2021</h3>
                <p>Same-electrode stimulation and recording with high spatial resolution, signal quality, and power efficiency is highly desirable in neuroscience and neural engineering. 
                High spatial resolution and signal-to-noise ratio is necessary for obtaining unitary activities and delivering focal stimulations. Power efficiency is critical for battery-operated 
                implantable neural interfaces. This study demonstrates the capability of recording single units as well as evoked potentials in response to a wide range of electrochemically safe 
                stimulation pulses through high-resolution microelectrodes coated with co-deposition of Pt-Ir. It also compares signal-to-noise ratio, single unit activity, and 
                power efficiencies between Pt-Ir coated and uncoated microelectrodes. To enable stimulation and recording with the same microelectrodes, microelectrode arrays were 
                treated with electrodeposited platinum-iridium coating (EPIC) and tested in the CA1 cell body layer of rat hippocampi. The electrodes’ ability to (1) inject a large 
                range of electrochemically reversable stimulation pulses to the tissue, and (2) record evoked potentials and single unit activities were quantitively assessed over an acute 
                time period. Compared to uncoated electrodes, EPIC electrodes recorded signals with higher signal-to-noise ratios (coated: 9.77 ± 1.95 dB; uncoated: 1.95 ± 0.40 dB) and generated 
                lower voltages (coated: 100 mV; uncoated: 650 mV) for a given stimulus (5 μA). The improved performance corresponded to lower energy consumptions and electrochemically safe 
                stimulation above 5 μA (>0.38 mC/cm2), which enabled elicitation of field excitatory post synaptic potentials and population spikes. Spontaneous single unit activities were 
                also modulated by varying stimulation intensities and monitored through the same electrodes. This work represents an example of stimulation and recording single unit activities 
                from the same microelectrode, which provides a powerful tool for monitoring and manipulating neural circuits at the single neuron level.</p>
            </div>
        </div>
        <hr class="new4"/>
        <div id="FeatArticle3" class="feature">
        <div class="feature-left">
            <img src="assets/news/images/frontierslogo.png" style="width: 900px; height: auto;"/>
            <div class="social">
                <a href="https://www.frontiersin.org/articles/10.3389/fnins.2021.616063/full">
                    <div>
                        <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                    </div>
                </a>
            </div>
        </div>
        <div class="feature-text margin-left">
            <h2 class="top-margin">A sparse multiscale nonlinear autoregressive model for seizure prediction</h2>
            <h3>February 21st, 2021</h3>
            <p>Accurate seizure prediction is highly desirable for medical interventions such as responsive electrical stimulation. 
            We aim to develop a classification model that can predict seizures by identifying preictal states, i.e. the precursor of a seizure, 
            based on multi-channel intracranial electroencephalography (iEEG) signals. Approach. A two-level sparse multiscale classification 
            model was developed to classify interictal and preictal states from iEEG data. In the first level, short time-scale linear 
            dynamical features were extracted as autoregressive (AR) model coefficients; arbitrary (usually long) time-scale linear and 
            nonlinear dynamical features were extracted as Laguerre–Volterra AR model coefficients; root-mean-square error of model 
            prediction was used as a feature representing model unpredictability. In the second level, all features were fed into a 
            sparse classifier to discriminate the iEEG data between interictal and preictal states. Main results. The two-level model 
            can accurately classify seizure states using iEEG data recorded from ten canine and human subjects. Adding arbitrary (usually long) 
            time-scale and nonlinear features significantly improves model performance compared with the conventional AR modeling approach. 
            There is a high degree of variability in the types of features contributing to seizure prediction across different subjects. 
            Significance. This study suggests that seizure generation may involve distinct linear/nonlinear dynamical processes caused 
            by different underlying neurobiological mechanisms. It is necessary to build patient-specific classification models with a 
            wide range of dynamical features.</p>
        </div>
    </div>
    <hr class="new4"/>
    <div id="FeatArticle4" class="feature">
    <div class="feature-left">
        <img src="assets/news/images/IEEE_Xplore_Logo.png" style="width: 900px; height: auto;"/>
        <div class="social">
            <a href="https://ieeexplore.ieee.org/document/9630986">
                <div>
                    <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
                </div>
            </a>
        </div>
    </div>
    <div class="feature-text margin-left">
        <h2 class="top-margin">Low Intensity Repetitive Transcranial Magnetic Stimulation Modulates Spontaneous Spiking Activities in Rat Cortex</h2>
        <h3>December 9th, 2021</h3>
        <p>Repetitive transcranial magnetic stimulation (rTMS) is a non-invasive technique for neuromodulation. Even at low intensities, 
        rTMS can alter the structure and function of neural circuits; yet the underlying mechanism remains unclear. Here we report a 
        new experimental paradigm for studying the effect of low intensity rTMS (LI-rTMS) on single neuron spiking activities in 
        the sensorimotor cortex of anesthetized rats. We designed, built, and tested a miniaturized TMS coil for use on small 
        animals such as rats. The induced electric field in different 3D locations was measured along different directions using a 
        dipole probe. A maximum electric field strength of 2.3 V/m was achieved. LI-rTMS (10 Hz, 3 min) was delivered to the rat primary
         motor and somatosensory cortices. Single-unit activities were recorded before and after LI-rTMS. Results showed that LI-rTMS 
         increased the spontaneous firing rates of primary motor and somatosensory cortical neurons. Diverse modulatory patterns were 
         observed in different neurons. These results indicated the feasibility of using miniaturized coil in rodents as an experimental 
         platform for evaluating the effect of LI-rTMS on the brain and developing therapeutic strategies for treating neurological disorders.</p>
    </div>
</div>
<hr class="new4"/>
<div id="FeatArticle5" class="feature">
<div class="feature-left">
    <img src="assets/news/images/Art5.jpg" style="width: 900px; height: 200px;"/>
    <div class="social">
        <a href="https://iopscience.iop.org/article/10.1088/1741-2552/aaaed7">
            <div>
                <svg viewBox="0 0 20 20" width="20" ><use xlink:href="#scholar"/></svg>
            </div>
        </a>
    </div>
</div>
<div class="feature-text margin-left">
    <h2 class="top-margin">Developing a hippocampal neural prosthetic to facilitate human memory encoding and recall</h2>
    <h3>March 28th, 2018</h3>
    <p>We demonstrate here the first successful implementation in humans of a proof-of-concept system for restoring and improving 
    memory function via facilitation of memory encoding using the patient's own hippocampal spatiotemporal neural codes for memory. 
    Memory in humans is subject to disruption by drugs, disease and brain injury, yet previous attempts to restore or rescue memory 
    function in humans typically involved only nonspecific, modulation of brain areas and neural systems related to memory retrieval. 
    Approach. We have constructed a model of processes by which the hippocampus encodes memory items via spatiotemporal firing of neural 
    ensembles that underlie the successful encoding of short-term memory. A nonlinear multi-input, multi-output (MIMO) model of hippocampal 
    CA3 and CA1 neural firing is computed that predicts activation patterns of CA1 neurons during the encoding (sample) phase of a delayed 
    match-to-sample (DMS) human short-term memory task. Main results. MIMO model-derived electrical stimulation delivered to the same CA1 
    locations during the sample phase of DMS trials facilitated short-term/working memory by 37% during the task. Longer term memory retention
     was also tested in the same human subjects with a delayed recognition (DR) task that utilized images from the DMS task, along with images
      that were not from the task. Across the subjects, the stimulated trials exhibited significant improvement (35%) in both short-term and 
      long-term retention of visual information. Significance. These results demonstrate the facilitation of memory encoding which is an important 
      feature for the construction of an implantable neural prosthetic to improve human memory.</p>
</div>
</div>
            `;
        
    }
}
customElements.define('feat-pub', FeaturedPublications)