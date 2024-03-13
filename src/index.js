import * as JSSynth from 'js-synthesizer';

const synth = new JSSynth.Synthesizer();

document.addEventListener('DOMContentLoaded', () => {
	JSSynth.Synthesizer.waitForWasmInitialized().then(() => {
		synth.init(48000);
		const root = document.getElementById('root');
		root.innerText = synth.toString();
		(0, console).log(synth);
	});
}, false);
