export const projectContent = {
  meta: {
    project: 'PulseBand',
    team: 'Team 16',
    course: 'DECO3500 / Social & Mobile Computing',
    year: '2026',
  },
  productImage: {
    src: '/assets/pulseband-pair-transparent.png',
    alt: 'Two black PulseBand devices displaying connected friends Nayaka and Syifa',
  },
  friends: [
    { name: 'Nayaka', initials: 'N', colour: '#A855F7' },
    { name: 'Syifa', initials: 'S', colour: '#FACC15' },
  ],
  features: [
    {
      number: '01',
      title: 'Find Friend',
      copy: 'Choose a friend and use directional and proximity feedback to reconnect.',
      visual: 'direction',
    },
    {
      number: '02',
      title: 'Quick Signals',
      copy: 'Send pre-made messages without typing during the event. Customise your messages before the event.',
      visual: 'signals',
      signals: ['Toilet', 'Taking a Break', 'Going Home', 'I’m Safe'],
    },
    {
      number: '03',
      title: 'SOS',
      copy: 'Send an urgent signal to your connected friend using deliberate confirmation.',
      visual: 'sos',
    },
  ],
  howItWorks: [
    { number: '01', title: 'Select', copy: 'Choose Find Friend.', visual: 'select' },
    { number: '02', title: 'Follow', copy: 'Use directional guidance.', visual: 'arrow' },
    { number: '03', title: 'Get Closer', copy: 'Proximity feedback becomes more noticeable.', visual: 'proximity' },
    { number: '04', title: 'Reconnect', copy: 'Return attention to your friend and the event.', visual: 'connected' },
  ],
  tutorial: [
    {
      key: 'find-friend',
      label: 'A / Find a friend',
      note: 'Direction + proximity',
      steps: [
        ['Open Find Friend', '/tutorial/find-friend-01.jpg'],
        ['Select a friend', '/tutorial/find-friend-02.jpg'],
        ['Follow the direction', '/tutorial/find-friend-03.jpg'],
        ['Watch proximity feedback', '/tutorial/find-friend-04.jpg'],
      ],
    },
    {
      key: 'quick-signal',
      label: 'B / Send a quick signal',
      note: 'Toilet · Taking a Break · Going Home · I’m Safe',
      steps: [
        ['Choose your update', '/tutorial/quick-signal-01.jpg'],
        ['Confirm it', '/tutorial/quick-signal-02.jpg'],
        ['Your connected friend receives the message', '/tutorial/quick-signal-03.jpg'],
      ],
    },
    {
      key: 'sos',
      label: 'C / Send SOS',
      note: 'A deliberate alert to your connected friend',
      steps: [
        ['Activate SOS', '/tutorial/sos-01.jpg'],
        ['Confirm deliberately', '/tutorial/sos-02.jpg'],
        ['Alert your connected friend', '/tutorial/sos-03.jpg'],
      ],
    },
  ],
  videos: {
    usability: {
      label: 'PulseBand usability testing video',
      src: '/videos/usability-testing.mp4',
      poster: '',
    },
    promo: {
      label: 'PulseBand promotional video',
      src: '/videos/pulseband-promo.mp4',
      poster: '',
    },
  },
  improvements: [
    {
      number: '01',
      title: 'Direction',
      finding: 'Users liked the directional guidance but found inconsistent movement during sideways motion.',
      refinement: 'More consistent directional feedback',
    },
    {
      number: '02',
      title: 'Proximity',
      finding: 'Brightness changes were difficult to notice.',
      note: 'Participant suggestion: faster blinking when users get closer.',
      refinement: 'Clearer proximity feedback',
    },
    {
      number: '03',
      title: 'Simplicity',
      finding: 'Participants did not understand the four proximity dots.',
      refinement: 'Remove redundant indicators',
    },
  ],
  team: [
    { name: 'Andhika Nayaka Arya Wibowo' },
    { name: 'Serafina Nala Putri Setiawan' },
    { name: 'Syifa Ananda Widyati' },
    { name: 'Nguyen Minh Thao Vy' },
  ],
}
