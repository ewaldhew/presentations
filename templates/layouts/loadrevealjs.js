// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  // Display controls in the bottom right corner
  controls: true,

  width: '100%',
  height: '100%',

  progress: true,
  slideNumber: true,
  keyboard: true,
  overview: true,
  center: true,
  hash: true,

  // Enables touch navigation on devices with touch input
  touch: true,

  // Loop the presentation
  loop: false,

  // Change the presentation direction to be RTL
  rtl: false,

  // Randomizes the order of slides each time the presentation loads
  shuffle: false,

  // Turns fragments on and off globally
  fragments: true,

  // Flags if the presentation is running in an embedded mode,
  // i.e. contained within a limited portion of the screen
  embedded: false,

  // Flags if we should show a help overlay when the questionmark
  // key is pressed
  help: true,

  // Flags if speaker notes should be visible to all viewers
  showNotes: false,

  // Global override for autolaying embedded media (video/audio/iframe)
  // - null: Media will only autoplay if data-autoplay is present
  // - true: All media will autoplay, regardless of individual setting
  // - false: No media will autoplay, regardless of individual setting
  autoPlayMedia: null,

  // Hides the address bar on mobile devices
  hideAddressBar: true,

  // Opens links in an iframe preview overlay
  previewLinks: true,

  // Transition style
  transition: 'slide', // none/fade/slide/convex/concave/zoom

  // Transition style for full page slide backgrounds
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

  // Number of slides away from the current that are visible
  viewDistance: 3,

  // The display mode that will be used to show slides
  display: 'block',

  dependencies: [
    { src: 'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/plugin/markdown/marked.js' },
    { src: 'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/plugin/markdown/markdown.js' },
    { src: 'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/plugin/notes/notes.js', async: true },
    { src: 'https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/plugin/highlight/highlight.js', async: true, callback: function () { hljs.initHighlightingOnLoad(); } },
  ],
  markdown: {
    smartypants: true
  }
});
Reveal.configure({
  // PDF Configurations
  pdfMaxPagesPerSlide: 1
});
