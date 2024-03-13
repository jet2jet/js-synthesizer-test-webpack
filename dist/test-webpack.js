(()=>{"use strict";const e="undefined"!=typeof AudioWorkletGlobalScope?AudioWorkletGlobalScope.wasmModule:Module;Error;class t{constructor(e,t){this._ptr=e,this._module=t}getType(){return this._module._fluid_midi_event_get_type(this._ptr)}setType(e){this._module._fluid_midi_event_set_type(this._ptr,e)}getChannel(){return this._module._fluid_midi_event_get_channel(this._ptr)}setChannel(e){this._module._fluid_midi_event_set_channel(this._ptr,e)}getKey(){return this._module._fluid_midi_event_get_key(this._ptr)}setKey(e){this._module._fluid_midi_event_set_key(this._ptr,e)}getVelocity(){return this._module._fluid_midi_event_get_velocity(this._ptr)}setVelocity(e){this._module._fluid_midi_event_set_velocity(this._ptr,e)}getControl(){return this._module._fluid_midi_event_get_control(this._ptr)}setControl(e){this._module._fluid_midi_event_set_control(this._ptr,e)}getValue(){return this._module._fluid_midi_event_get_value(this._ptr)}setValue(e){this._module._fluid_midi_event_set_value(this._ptr,e)}getProgram(){return this._module._fluid_midi_event_get_program(this._ptr)}setProgram(e){this._module._fluid_midi_event_set_program(this._ptr,e)}getPitch(){return this._module._fluid_midi_event_get_pitch(this._ptr)}setPitch(e){this._module._fluid_midi_event_set_pitch(this._ptr,e)}setSysEx(e){const t=e.byteLength,s=this._module._malloc(t);new Uint8Array(this._module.HEAPU8.buffer,s,t).set(e),this._module._fluid_midi_event_set_sysex(this._ptr,s,t,1)}setText(e){const t=e.byteLength,s=this._module._malloc(t);new Uint8Array(this._module.HEAPU8.buffer,s,t).set(e),this._module._fluid_midi_event_set_text(this._ptr,s,t,1)}setLyrics(e){const t=e.byteLength,s=this._module._malloc(t);new Uint8Array(this._module.HEAPU8.buffer,s,t).set(e),this._module._fluid_midi_event_set_lyrics(this._ptr,s,t,1)}}class s{constructor(e,t){this._ptr=e,this._module=t}getRaw(){return this._ptr}dispose(){this._ptr=0}getType(){return 0===this._ptr?-1:this._module._fluid_event_get_type(this._ptr)}getSource(){return 0===this._ptr?-1:this._module._fluid_event_get_source(this._ptr)}getDest(){return 0===this._ptr?-1:this._module._fluid_event_get_dest(this._ptr)}getChannel(){return 0===this._ptr?-1:this._module._fluid_event_get_channel(this._ptr)}getKey(){return 0===this._ptr?-1:this._module._fluid_event_get_key(this._ptr)}getVelocity(){return 0===this._ptr?-1:this._module._fluid_event_get_velocity(this._ptr)}getControl(){return 0===this._ptr?-1:this._module._fluid_event_get_control(this._ptr)}getValue(){return 0===this._ptr?-1:this._module._fluid_event_get_value(this._ptr)}getProgram(){return 0===this._ptr?-1:this._module._fluid_event_get_program(this._ptr)}getData(){return 0===this._ptr?-1:this._module._fluid_event_get_data(this._ptr)}getDuration(){return 0===this._ptr?-1:this._module._fluid_event_get_duration(this._ptr)}getBank(){return 0===this._ptr?-1:this._module._fluid_event_get_bank(this._ptr)}getPitch(){return 0===this._ptr?-1:this._module._fluid_event_get_pitch(this._ptr)}getSFontId(){return 0===this._ptr?-1:this._module._fluid_event_get_sfont_id(this._ptr)}}let n,i,_,r,l,o,h,u,a,d,c,f,y,m,p,v,g,b,P,w;function k(t){const s=n._new_fluid_event();return function(t,s){switch(s.type){case 0:case"note":e._fluid_event_note(t,s.channel,s.key,s.vel,s.duration);break;case 1:case"noteon":case"note-on":e._fluid_event_noteon(t,s.channel,s.key,s.vel);break;case 2:case"noteoff":case"note-off":e._fluid_event_noteoff(t,s.channel,s.key);break;case 3:case"allsoundsoff":case"all-sounds-off":e._fluid_event_all_sounds_off(t,s.channel);break;case 4:case"allnotesoff":case"all-notes-off":e._fluid_event_all_notes_off(t,s.channel);break;case 5:case"bankselect":case"bank-select":e._fluid_event_bank_select(t,s.channel,s.bank);break;case 6:case"programchange":case"program-change":e._fluid_event_program_change(t,s.channel,s.preset);break;case 7:case"programselect":case"program-select":e._fluid_event_program_select(t,s.channel,s.sfontId,s.bank,s.preset);break;case 12:case"controlchange":case"control-change":e._fluid_event_control_change(t,s.channel,s.control,s.value);break;case 8:case"pitchbend":case"pitch-bend":e._fluid_event_pitch_bend(t,s.channel,s.value);break;case 9:case"pitchwheelsens":case"pitchwheelsensitivity":case"pitch-wheel-sens":case"pitch-wheel-sensitivity":e._fluid_event_pitch_wheelsens(t,s.channel,s.value);break;case 10:case"modulation":e._fluid_event_modulation(t,s.channel,s.value);break;case 11:case"sustain":e._fluid_event_sustain(t,s.channel,s.value);break;case 13:case"pan":e._fluid_event_pan(t,s.channel,s.value);break;case 14:case"volume":e._fluid_event_volume(t,s.channel,s.value);break;case 15:case"reverb":case"reverbsend":case"reverb-send":e._fluid_event_reverb_send(t,s.channel,s.value);break;case 16:case"chorus":case"chorussend":case"chorus-send":e._fluid_event_chorus_send(t,s.channel,s.value);break;case 20:case"keypressure":case"key-pressure":case"aftertouch":e._fluid_event_key_pressure(t,s.channel,s.key,s.value);break;case 19:case"channelpressure":case"channel-pressure":case"channel-aftertouch":e._fluid_event_channel_pressure(t,s.channel,s.value);break;case 21:case"systemreset":case"system-reset":e._fluid_event_system_reset(t);break;case 17:case"timer":e._fluid_event_timer(t,s.data);break;default:return!1}return!0}(s,t)?s:(n._delete_fluid_event(s),null)}class q{constructor(){n||("undefined"!=typeof AudioWorkletGlobalScope?(n=AudioWorkletGlobalScope.wasmModule,i=AudioWorkletGlobalScope.wasmRemoveFunction):(n=Module,i=removeFunction),_=n.cwrap("fluid_sequencer_get_client_name","string",["number","number"])),this._seq=0,this._seqId=-1,this._clientFuncMap={}}_initialize(){return this.close(),this._seq=n._new_fluid_sequencer2(0),this._seqId=-1,Promise.resolve()}getRaw(){return this._seq}close(){0!==this._seq&&(Object.keys(this._clientFuncMap).forEach((e=>{this.unregisterClient(Number(e))})),this.unregisterClient(-1),n._delete_fluid_sequencer(this._seq),this._seq=0)}registerSynthesizer(e){let t;if(-1!==this._seqId&&(n._fluid_sequencer_unregister_client(this._seq,this._seqId),this._seqId=-1),"number"==typeof e)t=e;else{if(!(e instanceof z))return Promise.reject(new TypeError("'synth' is not a compatible type instance"));t=e.getRawSynthesizer()}return this._seqId=n._fluid_sequencer_register_fluidsynth(this._seq,t),Promise.resolve(this._seqId)}unregisterClient(e){if(-1===e&&-1===(e=this._seqId))return;const t=n._new_fluid_event();if(n._fluid_event_set_source(t,-1),n._fluid_event_set_dest(t,e),n._fluid_event_unregistering(t),n._fluid_sequencer_send_now(this._seq,t),n._delete_fluid_event(t),n._fluid_sequencer_unregister_client(this._seq,e),this._seqId===e)this._seqId=-1;else{const t=this._clientFuncMap;t[e]&&(i(t[e]),delete t[e])}}getAllRegisteredClients(){const e=n._fluid_sequencer_count_clients(this._seq),t=[];for(let s=0;s<e;++s){const e=n._fluid_sequencer_get_client_id(this._seq,s),i=_(this._seq,e);t.push({clientId:e,name:i})}return Promise.resolve(t)}getClientCount(){return Promise.resolve(n._fluid_sequencer_count_clients(this._seq))}getClientInfo(e){const t=n._fluid_sequencer_get_client_id(this._seq,e),s=_(this._seq,t);return Promise.resolve({clientId:t,name:s})}setTimeScale(e){n._fluid_sequencer_set_time_scale(this._seq,e)}getTimeScale(){return Promise.resolve(n._fluid_sequencer_get_time_scale(this._seq))}getTick(){return Promise.resolve(n._fluid_sequencer_get_tick(this._seq))}sendEventAt(e,t,s){const i=k(e);if(null!==i){const e=n._fluid_sequencer_count_clients(this._seq);for(let _=0;_<e;++_){const e=n._fluid_sequencer_get_client_id(this._seq,_);n._fluid_event_set_dest(i,e),n._fluid_sequencer_send_at(this._seq,i,t,s?1:0)}n._delete_fluid_event(i)}}sendEventToClientAt(e,t,s,i){const _=k(t);null!==_&&(n._fluid_event_set_dest(_,-1===e?this._seqId:e),n._fluid_sequencer_send_at(this._seq,_,s,i?1:0),n._delete_fluid_event(_))}sendEventToClientNow(e,t){const s=k(t);null!==s&&(n._fluid_event_set_dest(s,-1===e?this._seqId:e),n._fluid_sequencer_send_now(this._seq,s),n._delete_fluid_event(s))}sendEventNow(e,t){if(!(t instanceof s))return;const i=t.getRaw();0!==i&&(n._fluid_event_set_dest(i,-1===e?this._seqId:e),n._fluid_sequencer_send_now(this._seq,i))}removeAllEvents(){n._fluid_sequencer_remove_events(this._seq,-1,-1,-1)}removeAllEventsFromClient(e){n._fluid_sequencer_remove_events(this._seq,-1,-1===e?this._seqId:e,-1)}processSequencer(e){0!==this._seq&&n._fluid_sequencer_process(this._seq,e)}setIntervalForSequencer(e){return setInterval((()=>this.processSequencer(e)),e)}}class S{constructor(e){this._ptr=e}static getSoundfontById(e,t){r||(r="undefined"!=typeof AudioWorkletGlobalScope?AudioWorkletGlobalScope.wasmModule:Module,l=r.cwrap("fluid_sfont_get_name","string",["number"]),o=r.cwrap("fluid_preset_get_name","string",["number"]));const s=r._fluid_synth_get_sfont_by_id(e.getRawSynthesizer(),t);return 0===s?null:new S(s)}getName(){return l(this._ptr)}getPreset(e,t){const s=r._fluid_sfont_get_preset(this._ptr,e,t);return 0===s?null:{soundfont:this,name:o(s),bankNum:r._fluid_preset_get_banknum(s),num:r._fluid_preset_get_num(s)}}getPresetIterable(){const e=()=>{r._fluid_sfont_iteration_start(this._ptr)},t=()=>{const e=r._fluid_sfont_iteration_next(this._ptr);return 0===e?{done:!0,value:void 0}:{done:!1,value:{soundfont:this,name:o(e),bankNum:r._fluid_preset_get_banknum(e),num:r._fluid_preset_get_num(e)}}};return{[Symbol.iterator]:()=>(e(),{next:t})}}}function I(){if(!m){if("undefined"!=typeof AudioWorkletGlobalScope)h=AudioWorkletGlobalScope.wasmModule,u=AudioWorkletGlobalScope.wasmAddFunction,a=AudioWorkletGlobalScope.wasmRemoveFunction;else{if("undefined"==typeof Module)throw new Error("wasm module is not available. libfluidsynth-*.js must be loaded.");h=Module,u=addFunction,a=removeFunction}d=h.FS,c=h.cwrap("fluid_settings_setint","number",["number","string","number"]),f=h.cwrap("fluid_settings_setnum","number",["number","string","number"]),y=h.cwrap("fluid_settings_setstr","number",["number","string","string"]),m=h.cwrap("fluid_synth_error","string",["number"]),p=h.cwrap("fluid_synth_sfload","number",["number","string","number"]),v=h.cwrap("fluid_sequencer_register_client","number",["number","string","number","number"]),g=h._malloc.bind(h),b=h._free.bind(h),P=h._fluid_synth_handle_midi_event.bind(h)}}function C(e,t,s){void 0!==s&&c(e,t,s?1:0)}function A(e,t,s){void 0!==s&&c(e,t,s)}function E(e,t,s){void 0!==s&&f(e,t,s)}class z{constructor(){I(),this._settings=0,this._synth=0,this._player=0,this._playerPlaying=!1,this._playerCallbackPtr=null,this._fluidSynthCallback=null,this._buffer=0,this._bufferSize=0,this._numPtr=0,this._gain=.5}static waitForWasmInitialized(){return function(){if(w)return w;let e,t;if("undefined"!=typeof AudioWorkletGlobalScope)e=AudioWorkletGlobalScope.wasmModule,t=AudioWorkletGlobalScope.addOnPostRun;else{if("undefined"==typeof Module)return Promise.reject(new Error("wasm module is not available. libfluidsynth-*.js must be loaded."));e=Module,t="undefined"!=typeof addOnPostRun?addOnPostRun:void 0}return e.calledRun?(w=Promise.resolve(),w):(w=new Promise(void 0===t?e=>{const t=h.onRuntimeInitialized;h.onRuntimeInitialized=()=>{e(),t&&t()}}:e=>{t(e)}),w)}()}isInitialized(){return 0!==this._synth}getRawSynthesizer(){return this._synth}createAudioNode(e,t){const s=e.createScriptProcessor(t,0,2);return s.addEventListener("audioprocess",(e=>{this.render(e.outputBuffer)})),s}init(e,t){this.close();const s=this._settings=h._new_fluid_settings();f(s,"synth.sample-rate",e),t&&(void 0!==t.initialGain&&(this._gain=t.initialGain),C(s,"synth.chorus.active",t.chorusActive),E(s,"synth.chorus.depth",t.chorusDepth),E(s,"synth.chorus.level",t.chorusLevel),A(s,"synth.chorus.nr",t.chorusNr),E(s,"synth.chorus.speed",t.chorusSpeed),A(s,"synth.midi-channels",t.midiChannelCount),function(e,t,s){void 0!==s&&y(e,"synth.midi-bank-select",s)}(s,0,t.midiBankSelect),A(s,"synth.min-note-length",t.minNoteLength),E(s,"synth.overflow.age",t.overflowAge),E(s,"synth.overflow.important",t.overflowImportantValue),void 0!==t.overflowImportantChannels&&y(s,"synth.overflow.important-channels",t.overflowImportantChannels.join(",")),E(s,"synth.overflow.percussion",t.overflowPercussion),E(s,"synth.overflow.released",t.overflowReleased),E(s,"synth.overflow.sustained",t.overflowSustained),E(s,"synth.overflow.volume",t.overflowVolume),A(s,"synth.polyphony",t.polyphony),C(s,"synth.reverb.active",t.reverbActive),E(s,"synth.reverb.damp",t.reverbDamp),E(s,"synth.reverb.level",t.reverbLevel),E(s,"synth.reverb.room-size",t.reverbRoomSize),E(s,"synth.reverb.width",t.reverbWidth)),f(s,"synth.gain",this._gain),this._synth=h._new_fluid_synth(this._settings),this._numPtr=g(8)}close(){0!==this._synth&&(this._closePlayer(),h._delete_fluid_synth(this._synth),this._synth=0,h._delete_fluid_settings(this._settings),this._settings=0,b(this._numPtr),this._numPtr=0)}isPlaying(){return 0!==this._synth&&function(e){const t=h._fluid_synth_get_active_voice_count(e);if(!t)return 0;let s=140,n=e+s+4>>2,i=h.HEAPU32[n];if(i!==t&&(s+=4,n=e+s+4>>2,i=h.HEAPU32[n],i!==t))return console.warn("js-synthesizer: cannot check synthesizer internal data (may be changed)"),t;const _=h.HEAPU32[e+s>>2];if(!_||_>=h.HEAPU32.byteLength)return console.warn("js-synthesizer: cannot check synthesizer internal data (may be changed)"),t;const r=h._fluid_synth_get_polyphony(e);let l=!1;for(let e=0;e<r;++e){const t=h.HEAPU32[(_>>2)+e];if(t&&4!==h.HEAPU8[t+4]){l=!0;break}}return l?t:(0!==i&&console.warn("js-synthesizer: Active voice count is not zero, but all voices are off:",i),h.HEAPU32[n]=0,0)}(this._synth)>0}setInterpolation(e,t){this.ensureInitialized(),void 0===t&&(t=-1),h._fluid_synth_set_interp_method(this._synth,t,e)}getGain(){return this._gain}setGain(e){this.ensureInitialized(),h._fluid_synth_set_gain(this._synth,e),this._gain=h._fluid_synth_get_gain(this._synth)}setChannelType(e,t){this.ensureInitialized(),h._fluid_synth_set_channel_type(this._synth,e,t?1:0)}waitForVoicesStopped(){return this.flushFramesAsync()}loadSFont(e){this.ensureInitialized();const t=(".sf2",`/sfont-r${65535*Math.random()}-${65535*Math.random()}.sf2`);const s=new Uint8Array(e);d.writeFile(t,s);const n=p(this._synth,t,1);return d.unlink(t),-1===n?Promise.reject(new Error(m(this._synth))):Promise.resolve(n)}unloadSFont(e){this.ensureInitialized(),this.stopPlayer(),this.flushFramesSync(),h._fluid_synth_sfunload(this._synth,e,1)}unloadSFontAsync(e){return this.ensureInitialized(),this.stopPlayer(),this.flushFramesAsync().then((()=>{h._fluid_synth_sfunload(this._synth,e,1)}))}getSFontObject(e){return S.getSoundfontById(this,e)}getSFontBankOffset(e){return this.ensureInitialized(),Promise.resolve(h._fluid_synth_get_bank_offset(this._synth,e))}setSFontBankOffset(e,t){this.ensureInitialized(),h._fluid_synth_set_bank_offset(this._synth,e,t)}render(e){const t="numberOfChannels"in e?e.length:e[0].length,s="numberOfChannels"in e?e.numberOfChannels:e.length,n=4*t,i=2*n;this._bufferSize<i&&(0!==this._buffer&&b(this._buffer),this._buffer=g(i),this._bufferSize=i);const _=this._buffer,r=this._buffer+n;this.renderRaw(_,r,t);const l=new Float32Array(h.HEAPU8.buffer,_,t),o=s>=2?new Float32Array(h.HEAPU8.buffer,r,t):null;if("numberOfChannels"in e)if(e.copyToChannel)e.copyToChannel(l,0,0),o&&e.copyToChannel(o,1,0);else{const t=e.getChannelData(0);if(l.forEach(((e,s)=>t[s]=e)),o){const t=e.getChannelData(1);o.forEach(((e,s)=>t[s]=e))}}else e[0].set(l),o&&e[1].set(o);this.isPlayerPlaying()}midiNoteOn(e,t,s){h._fluid_synth_noteon(this._synth,e,t,s)}midiNoteOff(e,t){h._fluid_synth_noteoff(this._synth,e,t)}midiKeyPressure(e,t,s){h._fluid_synth_key_pressure(this._synth,e,t,s)}midiControl(e,t,s){h._fluid_synth_cc(this._synth,e,t,s)}midiProgramChange(e,t){h._fluid_synth_program_change(this._synth,e,t)}midiChannelPressure(e,t){h._fluid_synth_channel_pressure(this._synth,e,t)}midiPitchBend(e,t){h._fluid_synth_pitch_bend(this._synth,e,t)}midiSysEx(e){const t=e.byteLength,s=g(t);h.HEAPU8.set(e,s),h._fluid_synth_sysex(this._synth,s,t,0,0,0,0),b(s)}midiPitchWheelSensitivity(e,t){h._fluid_synth_pitch_wheel_sens(this._synth,e,t)}midiBankSelect(e,t){h._fluid_synth_bank_select(this._synth,e,t)}midiSFontSelect(e,t){h._fluid_synth_sfont_select(this._synth,e,t)}midiProgramSelect(e,t,s,n){h._fluid_synth_program_select(this._synth,e,t,s,n)}midiUnsetProgram(e){h._fluid_synth_unset_program(this._synth,e)}midiProgramReset(){h._fluid_synth_program_reset(this._synth)}midiSystemReset(){h._fluid_synth_system_reset(this._synth)}midiAllNotesOff(e){h._fluid_synth_all_notes_off(this._synth,void 0===e?-1:e)}midiAllSoundsOff(e){h._fluid_synth_all_sounds_off(this._synth,void 0===e?-1:e)}midiSetChannelType(e,t){h._fluid_synth_set_channel_type(this._synth,e,t?1:0)}setReverb(e,t,s,n){h._fluid_synth_set_reverb(this._synth,e,t,s,n)}setReverbRoomsize(e){h._fluid_synth_set_reverb_roomsize(this._synth,e)}setReverbDamp(e){h._fluid_synth_set_reverb_damp(this._synth,e)}setReverbWidth(e){h._fluid_synth_set_reverb_width(this._synth,e)}setReverbLevel(e){h._fluid_synth_set_reverb_level(this._synth,e)}setReverbOn(e){h._fluid_synth_set_reverb_on(this._synth,e?1:0)}getReverbRoomsize(){return h._fluid_synth_get_reverb_roomsize(this._synth)}getReverbDamp(){return h._fluid_synth_get_reverb_damp(this._synth)}getReverbLevel(){return h._fluid_synth_get_reverb_level(this._synth)}getReverbWidth(){return h._fluid_synth_get_reverb_width(this._synth)}setChorus(e,t,s,n,i){h._fluid_synth_set_chorus(this._synth,e,t,s,n,i)}setChorusVoiceCount(e){h._fluid_synth_set_chorus_nr(this._synth,e)}setChorusLevel(e){h._fluid_synth_set_chorus_level(this._synth,e)}setChorusSpeed(e){h._fluid_synth_set_chorus_speed(this._synth,e)}setChorusDepth(e){h._fluid_synth_set_chorus_depth(this._synth,e)}setChorusType(e){h._fluid_synth_set_chorus_type(this._synth,e)}setChorusOn(e){h._fluid_synth_set_chorus_on(this._synth,e?1:0)}getChorusVoiceCount(){return h._fluid_synth_get_chorus_nr(this._synth)}getChorusLevel(){return h._fluid_synth_get_chorus_level(this._synth)}getChorusSpeed(){return h._fluid_synth_get_chorus_speed(this._synth)}getChorusDepth(){return h._fluid_synth_get_chorus_depth(this._synth)}getChorusType(){return h._fluid_synth_get_chorus_type(this._synth)}getGenerator(e,t){return h._fluid_synth_get_gen(this._synth,e,t)}setGenerator(e,t,s){h._fluid_synth_set_gen(this._synth,e,t,s)}getLegatoMode(e){return h._fluid_synth_get_legato_mode(this._synth,e,this._numPtr),h.HEAP32[this._numPtr>>2]}setLegatoMode(e,t){h._fluid_synth_set_legato_mode(this._synth,e,t)}getPortamentoMode(e){return h._fluid_synth_get_portamento_mode(this._synth,e,this._numPtr),h.HEAP32[this._numPtr>>2]}setPortamentoMode(e,t){h._fluid_synth_set_portamento_mode(this._synth,e,t)}getBreathMode(e){return h._fluid_synth_get_breath_mode(this._synth,e,this._numPtr),h.HEAP32[this._numPtr>>2]}setBreathMode(e,t){h._fluid_synth_set_breath_mode(this._synth,e,t)}resetPlayer(){return new Promise((e=>{this._initPlayer(),e()}))}closePlayer(){this._closePlayer()}_initPlayer(){this._closePlayer();const e=h._new_fluid_player(this._synth);if(this._player=e,0===e)throw new Error("Out of memory");if(null===this._fluidSynthCallback){const t=h.HEAPU32[e+588>>2];h.HEAPU32[e+592>>2]===this._synth&&(this._fluidSynthCallback=t)}}_closePlayer(){const e=this._player;0!==e&&(this.stopPlayer(),h._delete_fluid_player(e),this._player=0,this._playerCallbackPtr=null)}isPlayerPlaying(){if(this._playerPlaying){if(1===h._fluid_player_get_status(this._player))return!0;this.stopPlayer()}return!1}addSMFDataToPlayer(e){this.ensurePlayerInitialized();const t=e.byteLength,s=g(t);h.HEAPU8.set(new Uint8Array(e),s);const n=h._fluid_player_add_mem(this._player,s,t);return b(s),-1!==n?Promise.resolve():Promise.reject(new Error(m(this._synth)))}playPlayer(){if(this.ensurePlayerInitialized(),this._playerPlaying&&this.stopPlayer(),-1===h._fluid_player_play(this._player))return Promise.reject(new Error(m(this._synth)));this._playerPlaying=!0;let e=()=>{};const t=new Promise((t=>{e=t}));return this._playerDefer={promise:t,resolve:e},Promise.resolve()}stopPlayer(){const e=this._player;0!==e&&this._playerPlaying&&(h._fluid_player_stop(e),h._fluid_player_join(e),h._fluid_synth_all_sounds_off(this._synth,-1),this._playerDefer&&(this._playerDefer.resolve(),this._playerDefer=void 0),this._playerPlaying=!1)}retrievePlayerCurrentTick(){return this.ensurePlayerInitialized(),Promise.resolve(h._fluid_player_get_current_tick(this._player))}retrievePlayerTotalTicks(){return this.ensurePlayerInitialized(),Promise.resolve(h._fluid_player_get_total_ticks(this._player))}retrievePlayerBpm(){return this.ensurePlayerInitialized(),Promise.resolve(h._fluid_player_get_bpm(this._player))}retrievePlayerMIDITempo(){return this.ensurePlayerInitialized(),Promise.resolve(h._fluid_player_get_midi_tempo(this._player))}seekPlayer(e){this.ensurePlayerInitialized(),h._fluid_player_seek(this._player,e)}setPlayerLoop(e){this.ensurePlayerInitialized(),h._fluid_player_set_loop(this._player,e)}setPlayerTempo(e,t){this.ensurePlayerInitialized(),h._fluid_player_set_tempo(this._player,e,t)}hookPlayerMIDIEvents(e,s){this.ensurePlayerInitialized();const n=this._playerCallbackPtr;if(null===n&&null===e)return;const i=null!==e?u(function(e,s,n){return(i,_)=>{const r=h._fluid_midi_event_get_type(_);return s(e,r,new t(_,h),n)?0:h._fluid_synth_handle_midi_event(i,_)}}(this,e,s),"iii"):null!==this._fluidSynthCallback?null:u(P,"iii");null!==n&&null!==i?(h._fluid_player_set_playback_callback(this._player,i,this._synth),a(n)):null===i?(h._fluid_player_set_playback_callback(this._player,this._fluidSynthCallback,this._synth),a(n)):h._fluid_player_set_playback_callback(this._player,i,this._synth),this._playerCallbackPtr=i}ensureInitialized(){if(0===this._synth)throw new Error("Synthesizer is not initialized")}ensurePlayerInitialized(){this.ensureInitialized(),0===this._player&&this._initPlayer()}renderRaw(e,t,s){h._fluid_synth_write_float(this._synth,s,e,0,1,t,0,1)}flushFramesSync(){const e=g(524288),t=e,s=e+262144;for(;this.isPlaying();)this.renderRaw(t,s,65536);b(e)}flushFramesAsync(){if(!this.isPlaying())return Promise.resolve();const e=g(524288),t=e,s=e+262144,n="undefined"!=typeof setTimeout?()=>new Promise((e=>setTimeout(e,0))):()=>Promise.resolve();function i(){return n().then(r)}const _=this;function r(){return _.isPlaying()?(_.renderRaw(t,s,65536),i()):(b(e),Promise.resolve())}return i()}waitForPlayerStopped(){return this._playerDefer?this._playerDefer.promise:Promise.resolve()}static createSequencer(){I();const e=new q;return e._initialize().then((()=>e))}static registerSequencerClient(e,t,n,i){if(!(e instanceof q))throw new TypeError("Invalid sequencer instance");const _=u(((t,i,_,r)=>{const l=new s(i,h),o=h._fluid_event_get_type(i);n(t,o,l,e,r)}),"viiii"),r=v(e.getRaw(),t,_,i);return-1!==r&&(e._clientFuncMap[r]=_),r}static sendEventToClientNow(e,t,s){if(!(e instanceof q))throw new TypeError("Invalid sequencer instance");e.sendEventToClientNow(t,s)}static sendEventNow(e,t,s){if(!(e instanceof q))throw new TypeError("Invalid sequencer instance");e.sendEventNow(t,s)}static setIntervalForSequencer(e,t){if(!(e instanceof q))throw new TypeError("Invalid sequencer instance");return e.setIntervalForSequencer(t)}}const F=new z;document.addEventListener("DOMContentLoaded",(()=>{z.waitForWasmInitialized().then((()=>{F.init(48e3),document.getElementById("root").innerText=F.toString(),console.log(F)}))}),!1)})();