const data = {
  expectations: [
    {
      id: "seats",
      num: "01",
      title: "Enter and go directly to your assigned seat",
      side: "Side A",
      hook: "Stops the doorway chaos and creates a predictable threshold.",
      studentSteps: [
        "Walk into the room.",
        "Look at the board or posted seat chart.",
        "Go directly to your assigned seat.",
        "Sit down.",
        "Start the Do Now silently."
      ],
      teacherScript: "When you enter this room, there are five steps. Walk in. Find your assigned seat. Sit down. Start the Do Now. Stay silent unless I say otherwise. We are going to practice that until it is automatic.",
      frame: "Assigned seats are not a punishment. They are a classroom regulation tool. They lower social ignition and help you monitor quickly.",
      dontSay: [
        "Please sit down, everybody.",
        "How many times do I have to tell y'all?",
        "Come on, guys, settle down."
      ],
      why: "Long explanations and broad pleas are easy to ignore. A specific direction to a specific student, said once, lands."
    },
    {
      id: "seated",
      num: "02",
      title: "Remain in your seat unless given permission",
      side: "Side A",
      hook: "Keeps the body of the class intact. You move, they do not.",
      studentSteps: [
        "Stay in your assigned seat during work time.",
        "Raise your hand or use the class signal if you need help.",
        "Keep working while waiting.",
        "Move only when the teacher gives permission."
      ],
      teacherScript: "During class, your seat is your workspace. If you need something, do not get up. Raise your hand or use the signal. I will come to you. You move when I give permission.",
      frame: "If you answer the student who walked up first, you just taught the wrong system. Reward the signal, not the stand.",
      dontSay: [
        "What are you doing out of your seat?",
        "Sit down, sit down, sit down.",
        "I've told you a hundred times to stay seated."
      ],
      why: "Do not accidentally train students that standing up gets faster attention."
    },
    {
      id: "language",
      num: "03",
      title: "Use school-appropriate language. No profanity.",
      side: "Side B",
      hook: "Frustration is allowed. Profanity is not. Name it, restate, move on.",
      studentSteps: [
        "Pause before speaking.",
        "Use school-appropriate words.",
        "If profanity comes out, restate the message appropriately.",
        "If frustrated, use a replacement phrase."
      ],
      teacherScript: "In this room, frustration is allowed. Profanity is not. If the wrong word comes out, you will pause and say it again the school way.",
      frame: "Make the response more regulated than the language that triggered it. No character lectures, no matching intensity.",
      dontSay: [
        "How dare you speak to me that way!",
        "That kind of language is unacceptable in civilized society.",
        "Do you kiss your mother with that mouth?"
      ],
      replacementPhrases: [
        "I am frustrated.",
        "Can you help me?",
        "I need a minute.",
        "I do not like that.",
        "Can I try again?"
      ],
      why: "Profanity is fast, impulsive, and emotional. Your job is to be the calmest thing in the room."
    }
  ],
  ladders: {
    seats: {
      title: "Assigned seat refusal",
      rungs: [
        { if: "Student questions the seat once.", then: "\"That is your seat. Go there now.\"", escalate: false },
        { if: "Student continues talking but starts moving.", then: "Let the movement count. Do not re-engage.", escalate: false },
        { if: "Student refuses and remains standing.", then: "\"You may go to your seat now, or I will follow the next school step.\"", escalate: true },
        { if: "Student still refuses.", then: "Implement the next campus consequence without argument - reset seat, buddy room, dean support.", escalate: true },
        { if: "Student eventually complies.", then: "Do not add a lecture. Return to instruction.", escalate: false }
      ]
    },
    seated: {
      title: "Out of seat",
      rungs: [
        { if: "Student stands or walks for a non-emergency reason.", then: "\"Back to your seat.\" or \"Seat. Now.\"", escalate: false },
        { if: "Student returns quickly.", then: "Do not continue talking. Do not praise. Move on.", escalate: false },
        { if: "Student walks to you to show work.", then: "\"Return to your seat. I will come to you.\"", escalate: false },
        { if: "Student keeps moving or socializing.", then: "\"You may go back to your seat now, or I will choose a different seat for you.\"", escalate: true },
        { if: "Behavior repeats after correction.", then: "Seat change, reflection sheet, or next school consequence.", escalate: true },
        { if: "Several students start moving at once.", then: "\"Freeze. Back to seats in 3, 2, 1.\" Reset the procedure for everyone.", escalate: true }
      ]
    },
    language: {
      title: "Profanity",
      rungs: [
        { if: "Student blurts profanity from frustration and it is not targeted.", then: "\"Language. Try again.\"", escalate: false },
        { if: "Student restates appropriately.", then: "Move on. No lecture.", escalate: false },
        { if: "Student uses profanity again after the cue.", then: "\"That is profanity. You owe me a reset conversation at the end of class.\"", escalate: true },
        { if: "Profanity is directed at another student or adult.", then: "\"Stop. That language is not okay. Move to the reset seat now.\" Follow school behavior policy.", escalate: true },
        { if: "Profanity spreads across multiple students.", then: "\"Pause. Frustration can stay. Profanity cannot. Reset your language and we continue.\"", escalate: true }
      ]
    }
  },
  arrival: [
    {
      time: "-5 min",
      title: "Before students arrive",
      body: "Post the Do Now where students can see it from the doorway. Post or project the seating chart. Put all needed materials on desks or at a visible pickup spot."
    },
    {
      time: "-1 min",
      title: "Stand at the threshold",
      body: "You are at the door before students enter. If students enter before the room is ready, you start from behind."
    },
    {
      time: "00:00",
      title: "Greet every student with the same direction",
      body: "\"Good morning. Find your assigned seat. Do Now on the board.\" Add time if needed: \"You have 3 minutes.\""
    },
    {
      time: "01:00",
      title: "Circulate and do not call across the room",
      body: "Nod at the students who are working. For students not seated: \"Malik, assigned seat. Now.\" Point. Keep moving."
    },
    {
      time: "03:00",
      title: "Launch the Do Now and do not wait for perfection",
      body: "\"Eyes here in 3, 2, 1. You should be seated with your Do Now started.\" If three or four students are still settling, start anyway."
    },
    {
      time: "05:00",
      title: "Handle stragglers with proximity",
      body: "Walk near, quiet redirection. Do not get trapped on one student at the expense of the room."
    },
    {
      time: "10:00",
      title: "The routine is holding or it is not",
      body: "If it held: keep going, do not praise a ton, just keep instruction tight. If it did not: note who, where, what. Reset tomorrow, do not add more words today."
    }
  ],
  days: [
    {
      num: 1,
      label: "Day 01",
      focus: "Teach all three expectations explicitly.",
      actions: [
        "Teach the three expectations directly.",
        "Practice entry at least two times.",
        "Correct every out-of-seat behavior immediately.",
        "Teach profanity restatement language.",
        "End class with a brief review."
      ],
      script: "Today we are resetting how this room works so learning can happen faster.",
      reflectPrompts: [
        "Who still resisted assigned seats?",
        "Who kept leaving their seat?",
        "Who needed profanity correction?",
        "Which correction script felt easiest to use?"
      ]
    },
    {
      num: 2,
      label: "Day 02",
      focus: "Re-teach quickly. Emphasize speed and consistency.",
      actions: [
        "Run the same door script with no changes.",
        "Give one short reminder before the Do Now.",
        "Follow through more strongly on staying seated.",
        "Praise the routine, not personalities."
      ],
      script: "Today the goal is faster entry and fewer reminders. Show me you know the routine.",
      reflectPrompts: [
        "Was entry faster than yesterday?",
        "Where did the routine break?",
        "Did you stay under 10 words per correction?"
      ]
    },
    {
      num: 3,
      label: "Day 03",
      focus: "Tighten transitions and reduce teacher talk.",
      actions: [
        "Reduce reminders.",
        "Monitor whether students begin independently.",
        "Catch repeated out-of-seat behavior early.",
        "Move profanity correction more privately when possible."
      ],
      script: "By now, you know the system. I should not have to repeat it. Show it.",
      reflectPrompts: [
        "How many students began without any prompt?",
        "Which corrections went private today?",
        "What still requires too much talking?"
      ]
    },
    {
      num: 4,
      label: "Day 04",
      focus: "Check whether the system holds with minimal prompting.",
      actions: [
        "Run entry with almost no reminders.",
        "Track how many students begin correctly on their own.",
        "Notice which students still need individualized support."
      ],
      script: "Today I am watching to see what this class can do without extra reminders.",
      reflectPrompts: [
        "How many started the Do Now on their own?",
        "Which 2 to 3 students still need a private plan?",
        "Is the system holding? If not, tighten consistency, not words."
      ]
    }
  ],
  scenarios: [
    {
      id: "s1",
      ladder: "seats",
      setup: "A student walks in, sees their new seat, and loudly announces to the room:",
      studentSays: "\"Nah, this ain't my seat. I'm sittin' with Jayden.\"",
      choices: [
        {
          text: "\"I explained yesterday why I moved everyone. This is a better seat for you - just trust me on this.\"",
          correct: false,
          feedback: "Explaining invites debate and turns it into a performance for the room. The direction gets buried."
        },
        {
          text: "\"That is your seat. Go there now.\"",
          correct: true,
          feedback: "Name + direction + timeframe. Said once, calmly, then monitor. This is the core pattern."
        },
        {
          text: "\"If you don't sit down right now, you're going to the office.\"",
          correct: false,
          feedback: "Threats escalate the room and put you in a corner. Save consequences for the next rung. Do not lead with them."
        },
        {
          text: "Wait for the student to finish, then respond when they are calmer.",
          correct: false,
          feedback: "Silence in this moment reads as permission. The rest of the room is watching. Direct briefly, then move."
        }
      ]
    },
    {
      id: "s2",
      ladder: "seated",
      setup: "Mid-lesson, a student stands up and walks toward your desk with their paper.",
      studentSays: "\"Ms., can you check this real quick?\"",
      choices: [
        {
          text: "Quickly check the paper because you do not want to embarrass them.",
          correct: false,
          feedback: "You just taught that standing up gets the teacher's attention first. The system inverts."
        },
        {
          text: "\"Return to your seat. I will come to you.\"",
          correct: true,
          feedback: "Keeps the system intact. You move, they do not. Follow through by actually going to them within 30 seconds."
        },
        {
          text: "\"Why are you out of your seat?\"",
          correct: false,
          feedback: "Questions invite explanation and debate. Give the direction, not the interview."
        },
        {
          text: "Ignore it and hope they return to their seat.",
          correct: false,
          feedback: "Ignoring reads as permission and erodes the expectation for the whole room."
        }
      ]
    },
    {
      id: "s3",
      ladder: "language",
      setup: "A student slams their pencil down and says:",
      studentSays: "\"This is stupid as hell.\"",
      choices: [
        {
          text: "\"Excuse me? We do not speak that way in my classroom, young man.\"",
          correct: false,
          feedback: "Matches their intensity, adds a lecture, and makes it about you. Calm wins here."
        },
        {
          text: "\"Language. Try again with school words.\"",
          correct: true,
          feedback: "Light cue, clear redirect, no shame. Gives them the path back without a showdown."
        },
        {
          text: "Write them up immediately.",
          correct: false,
          feedback: "Skipping the cue skips a learning moment. Use the lightest effective correction first. Save the write-up for the next rung."
        },
        {
          text: "\"Do you talk to your mother like that?\"",
          correct: false,
          feedback: "Invites argument, pulls in family, and turns a small moment into a confrontation."
        }
      ]
    },
    {
      id: "s4",
      ladder: "seated",
      setup: "Three students are out of their seats, chatting near the window. The rest of the class is watching to see what you will do.",
      studentSays: "[The room is escalating]",
      choices: [
        {
          text: "Call each one by name from across the room.",
          correct: false,
          feedback: "Escalates the volume and the performance. You are now the loudest thing in the room."
        },
        {
          text: "\"Freeze. Back to seats in 3, 2, 1.\"",
          correct: true,
          feedback: "Stops the whole room, resets the procedure for everyone. When several go at once, reset the whole class - not individuals."
        },
        {
          text: "Wait it out because they will sit back down eventually.",
          correct: false,
          feedback: "Waiting reads as permission. The longer it goes, the harder the reset."
        },
        {
          text: "Walk over and physically guide them back.",
          correct: false,
          feedback: "Hands-on escalates risk and gives up the regulated-adult advantage. Use your voice and proximity."
        }
      ]
    },
    {
      id: "s5",
      ladder: "seated",
      setup: "A student who normally shuts down when corrected drops her head on her desk after you redirect her.",
      studentSays: "[Head down, silent, not working]",
      choices: [
        {
          text: "\"Head up. I said get to work.\"",
          correct: false,
          feedback: "For a shutdown student, pressure collapses the system further. Direct + loud equals more shutdown."
        },
        {
          text: "Quietly set her Do Now near her, say \"Start when you can,\" and move on.",
          correct: true,
          feedback: "Respects the shutdown response, keeps the expectation alive, and does not turn it into a power moment. Circle back in 2 to 3 minutes."
        },
        {
          text: "Send her to the hallway to collect herself.",
          correct: false,
          feedback: "Removal from the room can read as rejection, especially for a trauma-affected student. Try proximity first."
        },
        {
          text: "Loudly praise another student to shame her into working.",
          correct: false,
          feedback: "Shame-based motivation damages trust and does not build the routine. Do not use the room against her."
        }
      ]
    }
  ],
  trauma: [
    {
      title: "Shutdown (freeze)",
      summary: "Student goes silent, head down, and will not engage. They are not being defiant. Their nervous system hit the brakes.",
      strategy: "Use proximity without pressure. Place the work near them. Say, \"Start when you can.\" Circle back in 2 to 3 minutes. Avoid public call-outs.",
      watch: "Slouching, eyes dropping, sudden quiet after a correction."
    },
    {
      title: "Escalation (fight)",
      summary: "Volume rises, language sharpens, and the body tenses. They are trying to make the threat go away by making it bigger.",
      strategy: "Lower your volume by one step. Use fewer words. Give a choice, not an ultimatum. Do not make it about the room.",
      watch: "Jaw set, faster breathing, pacing, locking eyes with peers."
    },
    {
      title: "Over-function (fawn)",
      summary: "Student takes on managing the room through tattling, fixing peers, or narrating. It looks like helpfulness but is often anxiety.",
      strategy: "Say, \"Your job is your work. I've got the room.\" Redirect warmly. Do not reward the monitoring role.",
      watch: "Constant hand up about others instead of self; hyper-awareness of peer behavior."
    },
    {
      title: "Flight",
      summary: "Student walks out or asks to leave constantly. Escape is the regulation strategy.",
      strategy: "Build a pre-planned exit with a signal, destination, and return time. Predictable exit beats surprise exit.",
      watch: "Repeat bathroom asks, sudden \"I need water,\" edging toward the door."
    },
    {
      title: "Hypervigilance",
      summary: "Student tracks your every move, reads tone for danger, and misreads neutral corrections as attacks.",
      strategy: "Consistency is regulation. Same door script every day. Same corrections. No surprise tone shifts.",
      watch: "Flinching at raised voices, even when not directed at them, and asking \"Are you mad?\" often."
    },
    {
      title: "Dissociation",
      summary: "Student is physically present but cognitively elsewhere. Eyes glazed. No response to name.",
      strategy: "Tap the desk, not the student. Name them once. Give a concrete single task: \"Open to page 12.\"",
      watch: "Staring into middle distance, delayed reactions, no eye tracking."
    }
  ],
  panicScripts: [
    { label: "Room is loud", script: "Freeze. Back to seats in 3, 2, 1." },
    { label: "One student escalating", script: "Take a breath. Try that again." },
    { label: "Profanity just happened", script: "Language. Try again with school words." },
    { label: "Too many redirecting at once", script: "Pause. We are going to practice this again. Stand behind your chair." },
    { label: "You feel heated", script: "[To self] One direction. One timeframe. Then monitor." },
    { label: "Student will not sit", script: "That is your seat. Go there now." }
  ],
  economyExamples: [
    { when: "Student out of seat", script: "Jordan, seat now." },
    { when: "Student in wrong seat", script: "Maya, assigned seat. Now." },
    { when: "Profanity just happened", script: "Language. Try that again." },
    { when: "Class needs to focus", script: "Eyes here in 3, 2, 1." },
    { when: "Student walked up to you", script: "Return to your seat. I will come to you." },
    { when: "Whole-class reset", script: "Freeze. Back to seats in 3, 2, 1." }
  ]
};

const storageKeys = {
  progress: "r3apBrightStudioProgress",
  reflections: "r3apBrightStudioReflections"
};

const state = {
  screen: "desk",
  trackId: "seats",
  ladderId: "seats",
  scenarioIndex: 0,
  selectedChoiceIndex: null,
  selectedDay: 1,
  panicOpen: false
};

let progress = loadProgress();
let reflections = loadReflections();

const appRoot = document.getElementById("app");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#39;");
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.progress) || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKeys.progress, JSON.stringify(progress));
}

function loadReflections() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.reflections) || "[]");
  } catch {
    return [];
  }
}

function saveReflections() {
  localStorage.setItem(storageKeys.reflections, JSON.stringify(reflections));
}

function getDayRecord(dayNum) {
  if (!progress[dayNum]) {
    progress[dayNum] = {
      actions: data.days.find((day) => day.num === dayNum)?.actions.map(() => false) || [],
      reflection: ""
    };
  }

  return progress[dayNum];
}

function setDayRecord(dayNum, record) {
  progress[dayNum] = record;
  saveProgress();
}

function completedActionCount() {
  return data.days.reduce((total, day) => {
    const record = getDayRecord(day.num);
    return total + record.actions.filter(Boolean).length;
  }, 0);
}

function totalActionCount() {
  return data.days.reduce((total, day) => total + day.actions.length, 0);
}

function completedDayCount() {
  return data.days.reduce((count, day) => {
    const record = getDayRecord(day.num);
    return count + (record.actions.every(Boolean) ? 1 : 0);
  }, 0);
}

function activeDayNumber() {
  return data.days.find((day) => !getDayRecord(day.num).actions.every(Boolean))?.num || data.days[data.days.length - 1].num;
}

function renderQuickCard(screen, kicker, title, copy) {
  return `
    <button class="quick-card" type="button" data-action="goto-screen" data-screen="${screen}">
      <div class="card-kicker">${kicker}</div>
      <h3>${title}</h3>
      <p>${copy}</p>
      <div class="card-link">Open -></div>
    </button>
  `;
}

function render() {
  appRoot.innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      <main class="main-shell">
        ${renderCurrentScreen()}
      </main>
      <button class="panic-fab" type="button" data-action="open-panic">Reset scripts</button>
      ${renderPanicOverlay()}
    </div>
  `;
}

function renderTopbar() {
  const nav = [
    ["desk", "Studio Desk"],
    ["equalizer", "Equalizer"],
    ["ladders", "In The Booth"],
    ["practice", "Sessions"],
    ["rollout", "Rollout"],
    ["arrival", "Arrival"],
    ["trauma", "Trauma Lens"]
  ];

  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand-lockup">
          <div class="brand-dot"></div>
          <div class="brand-text">
            <div class="brand-title">R3 Agency Practice <span>(R3.A.P.)</span></div>
            <div class="brand-sub">Bright Studio Prototype</div>
          </div>
        </div>
        <nav class="nav-row" aria-label="Primary navigation">
          ${nav.map(([id, label]) => `
            <button
              class="nav-button ${state.screen === id ? "is-active" : ""}"
              type="button"
              data-action="goto-screen"
              data-screen="${id}"
            >
              ${label}
            </button>
          `).join("")}
        </nav>
        <div class="status-pod">
          <div class="status-pill">Today</div>
          <div class="status-copy">${data.days.find((day) => day.num === activeDayNumber())?.focus || "Keep the room steady."}</div>
        </div>
      </div>
    </header>
  `;
}

function renderCurrentScreen() {
  if (state.screen === "desk") {
    return renderDeskScreen();
  }

  if (state.screen === "track") {
    return renderTrackScreen();
  }

  if (state.screen === "equalizer") {
    return renderEqualizerScreen();
  }

  if (state.screen === "ladders") {
    return renderLadderScreen();
  }

  if (state.screen === "practice") {
    return renderPracticeScreen();
  }

  if (state.screen === "rollout") {
    return renderRolloutScreen();
  }

  if (state.screen === "arrival") {
    return renderArrivalScreen();
  }

  if (state.screen === "trauma") {
    return renderTraumaScreen();
  }

  return renderDeskScreen();
}

function renderDeskScreen() {
  const nextDay = data.days.find((day) => day.num === activeDayNumber()) || data.days[0];

  return `
    <section class="screen">
      <section class="hero-card">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">Teacher-ready playbook</div>
            <h1 class="display">The Studio Desk</h1>
            <h2 class="hero-headline">Bright, grounded coaching for building classroom rhythm one clear move at a time.</h2>
            <p class="hero-copy">
              This version keeps the stronger playbook logic, but shifts the feeling toward light, warmth, and hope.
              It is still a real teacher tool. It just sounds and looks more like your brand.
            </p>
            <div class="chip-row" style="margin-top:18px;">
              <span class="chip">Grade 5 rollout</span>
              <span class="chip is-warm">Light-first design</span>
              <span class="chip">Hip hop informed</span>
            </div>
            <div class="hero-actions">
              <button class="button-primary" type="button" data-action="goto-screen" data-screen="rollout">Open today's rollout</button>
              <button class="button-secondary" type="button" data-action="open-track" data-track="seats">Load track 01</button>
              <button class="button-ghost" type="button" data-action="goto-screen" data-screen="equalizer">Open equalizer</button>
            </div>
          </div>
          <div class="hero-media">
            <div class="hero-image-wrap">
              ${renderArtPanel("Cypher Energy", "Bright coaching with rhythm, structure, and room to breathe.")}
            </div>
            <div class="hero-note">
              <div class="mini-kicker">Current focus</div>
              <p><strong>${nextDay.label}</strong> - ${nextDay.focus}</p>
              <p>Teacher tone: calm, clear, and regulated. If the room is not improving, tighten consistency instead of adding more words.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">Progress pulse</div>
            <h2 class="section-title">What is already built</h2>
          </div>
          <p class="section-copy">A bright app still has to work under pressure. These numbers keep the prototype honest.</p>
        </div>
        <div class="stat-grid" style="margin-top:18px;">
          <div class="stat-card">
            <div class="stat-value">${completedActionCount()} / ${totalActionCount()}</div>
            <div class="stat-label">Rollout actions logged</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${completedDayCount()} / ${data.days.length}</div>
            <div class="stat-label">Days completed</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${reflections.length}</div>
            <div class="stat-label">Reflection notes saved</div>
          </div>
        </div>
      </section>

      <section class="screen">
        <div class="section-head">
          <div>
            <div class="eyebrow">The 3 tracks</div>
            <h2 class="section-title">Priority expectations</h2>
          </div>
          <p class="section-copy">Keep the practical structure from the stronger playbook. Each track teaches one routine, one script, one ladder.</p>
        </div>
        <div class="grid-three">
          ${data.expectations.map((item) => `
            <button
              class="track-card ${item.side === "Side B" ? "is-side-b" : "is-side-a"}"
              type="button"
              data-action="open-track"
              data-track="${item.id}"
            >
              <div class="track-card-meta">${item.side} - Track ${item.num}</div>
              <h3>${item.title}</h3>
              <p>${item.hook}</p>
              <span class="card-link">Open track -></span>
            </button>
          `).join("")}
        </div>
      </section>

      <section class="screen">
        <div class="section-head">
          <div>
            <div class="eyebrow">Jump in quickly</div>
            <h2 class="section-title">The fastest support paths</h2>
          </div>
          <p class="section-copy">These are the app moments a teacher reaches for when the room is moving faster than their planning.</p>
        </div>
        <div class="grid-four">
          ${renderQuickCard("equalizer", "Equalizer", "Economy of language", "Name + direction + timeframe. Drill the pattern until it sounds natural.")}
          ${renderQuickCard("ladders", "In The Booth", "If-then ladders", "Seat refusal, out-of-seat, and profanity ladders for real-time use.")}
          ${renderQuickCard("practice", "Sessions", "Scenario practice", "Rehearse 5 classroom moments before you have to live them.")}
          ${renderQuickCard("arrival", "Studio entry", "First 10 minutes", "A second-by-second walkthrough for threshold, Do Now, and launch.")}
        </div>
      </section>

      <section class="spotlight">
        <div class="spotlight-media">
          ${renderArtPanel("Plural State", "From survival mode to a steadier, chosen rhythm.", true)}
        </div>
        <div>
          <div class="eyebrow" style="color:#f7ba52;">Hopeful destination</div>
          <h2 class="display">PLURAL</h2>
          <h3 class="section-title" style="margin-top:10px;">A brighter app should still point somewhere bigger than behavior control.</h3>
          <p style="margin-top:14px;">
            PLURAL is the mastered flow. The room feels safer. The teacher sounds steadier. Students know what to do before the second reminder ever arrives.
            The app should hold that hopeful destination in view while still helping with the next hard minute.
          </p>
          <div class="hero-actions" style="margin-top:22px;">
            <button class="button-primary" type="button" data-action="goto-screen" data-screen="trauma">Open trauma lens</button>
            <button class="button-ghost" type="button" data-action="open-panic">Open reset scripts</button>
          </div>
        </div>
      </section>
    </section>
  `;
}

function renderTrackScreen() {
  const item = data.expectations.find((entry) => entry.id === state.trackId);
  const ladder = data.ladders[state.trackId];

  if (!item) {
    return `<section class="screen"><div class="empty-state">Track not found.</div></section>`;
  }

  const visualLabel = item.id === "language" ? "Language Reset" : "Practice Loop";
  const visualCopy = item.id === "language"
    ? "Keep the response calm, clean, and school-safe."
    : "Repetition builds safety. Safety builds capacity.";

  return `
    <section class="screen track-layout">
      <button class="back-link" type="button" data-action="goto-screen" data-screen="desk">&larr; Back to the studio desk</button>

      <section class="hero-card">
        <div class="hero-grid track-hero">
          <div>
            <div class="eyebrow">${item.side} - Track ${item.num}</div>
            <h1 class="display">${item.side === "Side B" ? "Reset The Words" : "Set The Tone"}</h1>
            <h2 class="hero-headline">${item.title}</h2>
            <p class="hero-copy">${item.hook}</p>
            <div class="hero-note" style="margin-top:18px;">
              <div class="mini-kicker">Why this track matters</div>
              <p>${item.why}</p>
            </div>
          </div>
          <div class="track-stage">
            ${renderArtPanel(visualLabel, visualCopy)}
          </div>
        </div>
      </section>

      <div class="grid-two">
        <section class="panel">
          <div class="eyebrow">Student-facing</div>
          <h3>What students do</h3>
          <div class="track-bullet-list" style="margin-top:16px;">
            ${item.studentSteps.map((step, index) => `
              <div class="bullet-row">
                <span class="bullet-index">${String(index + 1).padStart(2, "0")}</span>
                <div>${step}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="panel">
          <div class="eyebrow">Teacher script</div>
          <h3>What you say when you teach it</h3>
          <div class="script-card" style="margin-top:16px;">
            <div class="script-label">Say this</div>
            <div class="script-quote">${item.teacherScript}</div>
          </div>
          <div class="hero-note" style="margin-top:16px;">
            <div class="mini-kicker">Coaching frame</div>
            <p>${item.frame}</p>
          </div>
        </section>
      </div>

      <div class="grid-two">
        <section class="danger-card">
          <div class="eyebrow">Avoid</div>
          <h3>Common traps</h3>
          <ul>
            ${item.dontSay.map((text) => `<li>${text}</li>`).join("")}
          </ul>
        </section>

        <section class="panel">
          <div class="eyebrow">Response ladder</div>
          <h3>${ladder.title}</h3>
          <p style="margin-top:8px;">Start light. Escalate only when needed. Work the rung instead of improvising.</p>
        </section>
      </div>

      ${item.replacementPhrases ? `
        <section class="panel">
          <div class="eyebrow">Post in room</div>
          <h3>Replacement phrases students can actually use</h3>
          <div class="grid-three" style="margin-top:16px;">
            ${item.replacementPhrases.map((phrase) => `
              <div class="quick-card">
                <div class="mini-kicker">Instead of profanity</div>
                <h3 style="font-size:1.18rem;">${phrase}</h3>
              </div>
            `).join("")}
          </div>
        </section>
      ` : ""}

      <section class="panel">
        <div class="eyebrow">If then</div>
        <h3>${ladder.title}</h3>
        <div class="ladder" style="margin-top:16px;">
          ${ladder.rungs.map((rung, index) => `
            <div class="ladder-rung ${rung.escalate ? "is-escalated" : ""}">
              <div class="ladder-number">${String(index + 1).padStart(2, "0")}</div>
              <div>
                <div class="ladder-label">If</div>
                <div class="ladder-text">${rung.if}</div>
              </div>
              <div>
                <div class="ladder-label">Then</div>
                <div class="ladder-text">${rung.then}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderEqualizerScreen() {
  return `
    <section class="screen">
      <section class="formula-hero">
        <div class="eyebrow" style="color:#f7ba52;">Equalizer</div>
        <h1 class="display">Check Your Levels</h1>
        <h2 class="hero-headline" style="color:#fff; margin-top:10px;">Calm language keeps the room from borrowing your stress.</h2>
        <p class="hero-copy" style="color:rgba(255,255,255,0.85); max-width:52ch;">
          A light, hopeful app still needs a sharp correction pattern. This is the fast formula that keeps the teacher regulated and the message clear.
        </p>
        <div class="formula-line">
          <span class="formula-token">Name</span>
          <span>+</span>
          <span class="formula-token">Direction</span>
          <span>+</span>
          <span class="formula-token">Timeframe</span>
        </div>
      </section>

      <section class="screen">
        <div class="section-head">
          <div>
            <div class="eyebrow">Examples</div>
            <h2 class="section-title">What it sounds like in motion</h2>
          </div>
          <p class="section-copy">Shorter does not mean colder. It means clearer and safer.</p>
        </div>
        <div class="grid-three">
          ${data.economyExamples.map((item) => `
            <div class="quick-card">
              <div class="card-kicker">${item.when}</div>
              <h3 style="font-size:1.14rem;">"${item.script}"</h3>
            </div>
          `).join("")}
        </div>
      </section>

      <div class="grid-two">
        <section class="panel">
          <div class="eyebrow">Do</div>
          <h3>Protect clarity</h3>
          <ul>
            <li>Give one direction at a time.</li>
            <li>Use the fewest words possible.</li>
            <li>Say the direction once, then monitor.</li>
            <li>Correct quietly unless safety requires public.</li>
            <li>Follow through every time.</li>
          </ul>
        </section>

        <section class="danger-card">
          <div class="eyebrow">Do not</div>
          <h3>Accidentally feed the chaos</h3>
          <ul>
            <li>Do not explain during noncompliance.</li>
            <li>Do not debate seat assignments.</li>
            <li>Do not lecture when correcting profanity.</li>
            <li>Do not match the student's emotional intensity.</li>
            <li>Do not call out across the room.</li>
          </ul>
        </section>
      </div>
    </section>
  `;
}

function renderLadderScreen() {
  const current = data.ladders[state.ladderId];
  const tabs = [
    { id: "seats", label: "Seat refusal" },
    { id: "seated", label: "Out of seat" },
    { id: "language", label: "Profanity" }
  ];

  return `
    <section class="screen">
      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">In The Booth</div>
            <h1 class="section-title">If-then response ladders</h1>
          </div>
          <p class="section-copy">When the moment comes, do not improvise. Work the rung. Escalate only when the previous move did not land.</p>
        </div>
        <div class="pill-tabs" style="margin-top:18px;">
          ${tabs.map((tab) => `
            <button
              class="pill-tab ${state.ladderId === tab.id ? "is-active" : ""}"
              type="button"
              data-action="switch-ladder"
              data-ladder="${tab.id}"
            >
              ${tab.label}
            </button>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="eyebrow">Current ladder</div>
        <h2 class="section-title">${current.title}</h2>
        <div class="ladder" style="margin-top:18px;">
          ${current.rungs.map((rung, index) => `
            <div class="ladder-rung ${rung.escalate ? "is-escalated" : ""}">
              <div class="ladder-number">${String(index + 1).padStart(2, "0")}</div>
              <div>
                <div class="ladder-label">If</div>
                <div class="ladder-text">${rung.if}</div>
              </div>
              <div>
                <div class="ladder-label">Then</div>
                <div class="ladder-text">${rung.then}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderPracticeScreen() {
  const scenario = data.scenarios[state.scenarioIndex];
  const ladder = data.ladders[scenario.ladder];

  return `
    <section class="screen">
      <section class="scenario-card">
        <div class="section-head">
          <div>
            <div class="eyebrow">Sessions</div>
            <h1 class="section-title">Scenario practice</h1>
          </div>
          <div class="chip">Scenario ${state.scenarioIndex + 1} of ${data.scenarios.length}</div>
        </div>
        <p class="scenario-setup">${scenario.setup}</p>
        <div class="scenario-student">
          <strong>Student says or does</strong>
          <div>${scenario.studentSays}</div>
        </div>
        <div class="choice-list">
          ${scenario.choices.map((choice, index) => {
            const selected = state.selectedChoiceIndex === index;
            const answered = state.selectedChoiceIndex !== null;
            const className = answered && choice.correct
              ? "choice-button is-correct"
              : answered && selected && !choice.correct
                ? "choice-button is-wrong"
                : "choice-button";

            const showFeedback = answered && (selected || choice.correct);

            return `
              <button class="${className}" type="button" data-action="choose-scenario" data-choice="${index}">
                <div class="choice-top">
                  <span class="choice-key">${String.fromCharCode(65 + index)}</span>
                  <div>
                    <div>${choice.text}</div>
                    ${showFeedback ? `<div class="choice-feedback">${choice.feedback}</div>` : ""}
                  </div>
                </div>
              </button>
            `;
          }).join("")}
        </div>

        ${state.selectedChoiceIndex !== null ? `
          <section class="panel">
            <div class="eyebrow">Connected ladder</div>
            <h3>${ladder.title}</h3>
            <p style="margin-top:8px;">If this moment keeps escalating, these are the moves you work through next.</p>
            <div class="ladder" style="margin-top:16px;">
              ${ladder.rungs.slice(0, 3).map((rung, index) => `
                <div class="ladder-rung ${rung.escalate ? "is-escalated" : ""}">
                  <div class="ladder-number">${String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div class="ladder-label">If</div>
                    <div class="ladder-text">${rung.if}</div>
                  </div>
                  <div>
                    <div class="ladder-label">Then</div>
                    <div class="ladder-text">${rung.then}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </section>
        ` : ""}

        <div class="row-actions">
          <button class="button-ghost" type="button" data-action="retry-scenario">Try again</button>
          <button class="button-primary" type="button" data-action="next-scenario">Next scenario</button>
        </div>
      </section>
    </section>
  `;
}

function renderRolloutScreen() {
  const day = data.days.find((entry) => entry.num === state.selectedDay) || data.days[0];
  const record = getDayRecord(day.num);

  return `
    <section class="screen">
      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">Rollout</div>
            <h1 class="section-title">4-day tracker</h1>
          </div>
          <p class="section-copy">Teach it on Day 1. Tighten it on Day 2. Reduce words on Day 3. Watch it hold on Day 4.</p>
        </div>
        <div class="days-grid" style="margin-top:18px;">
          ${data.days.map((entry) => {
            const entryRecord = getDayRecord(entry.num);
            const isDone = entryRecord.actions.filter(Boolean).length >= entry.actions.length;
            const isActive = state.selectedDay === entry.num;

            return `
              <button
                class="day-card ${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}"
                type="button"
                data-action="select-day"
                data-day="${entry.num}"
              >
                <div class="card-kicker">${entry.label}</div>
                <h3 style="font-size:1.12rem;">${entry.focus}</h3>
                <p>${entryRecord.actions.filter(Boolean).length} / ${entry.actions.length} actions logged</p>
              </button>
            `;
          }).join("")}
        </div>
      </section>

      <div class="grid-two">
        <section class="reflection-card">
          <div class="eyebrow">${day.label}</div>
          <h3>${day.focus}</h3>
          <div class="script-card" style="margin-top:16px;">
            <div class="script-label">Teacher script for today</div>
            <div class="script-quote">${day.script}</div>
          </div>
          <div class="checklist" style="margin-top:18px;">
            ${day.actions.map((action, index) => `
              <button
                class="check-row ${record.actions[index] ? "is-done" : ""}"
                type="button"
                data-action="toggle-rollout"
                data-day="${day.num}"
                data-index="${index}"
              >
                <span class="check-box">${record.actions[index] ? "&#10003;" : ""}</span>
                <span class="check-copy">${action}</span>
              </button>
            `).join("")}
          </div>
        </section>

        <section class="reflection-card">
          <div class="eyebrow">End of class</div>
          <h3>What did the room teach you?</h3>
          <div class="prompt-list" style="margin-top:16px;">
            ${day.reflectPrompts.map((prompt, index) => `
              <div class="prompt-item">
                <span class="prompt-index">${String(index + 1).padStart(2, "0")}</span>
                <div>${prompt}</div>
              </div>
            `).join("")}
          </div>
          <textarea
            class="reflection-textarea"
            data-action="reflection-input"
            data-day="${day.num}"
            placeholder="Jot what you noticed. Names. Specifics. Which script felt easy? Which one still needs rehearsal?"
          >${escapeHtml(record.reflection)}</textarea>
          <div class="hero-actions" style="margin-top:16px;">
            <button class="button-primary" type="button" data-action="save-reflection" data-day="${day.num}">Save reflection</button>
          </div>
        </section>
      </div>

      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">Reflection log</div>
            <h2 class="section-title">What is compounding</h2>
          </div>
          <p class="section-copy">A brighter prototype still needs an honest memory of what worked and what did not.</p>
        </div>
        ${reflections.length === 0 ? `
          <div class="empty-state" style="margin-top:18px;">No reflection entries yet. Save your first note from the tracker above.</div>
        ` : `
          <div class="reflection-log" style="margin-top:18px;">
            ${reflections.slice(0, 8).map((entry) => `
              <div class="reflection-entry">
                <div class="reflection-date">Day ${entry.day} - ${entry.date}</div>
                <div class="reflection-copy">${escapeHtml(entry.text)}</div>
              </div>
            `).join("")}
          </div>
        `}
      </section>
    </section>
  `;
}

function renderArrivalScreen() {
  return `
    <section class="screen">
      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">Arrival walkthrough</div>
            <h1 class="section-title">The first 10 minutes</h1>
          </div>
          <p class="section-copy">If students enter before the room is ready, you start from behind. Make the room tell them what to do before you have to.</p>
        </div>
      </section>

      <section class="timeline">
        ${data.arrival.map((step) => `
          <article class="timeline-card">
            <div class="timeline-time">${step.time}</div>
            <h2 class="timeline-title">${step.title}</h2>
            <div class="timeline-body">${step.body}</div>
          </article>
        `).join("")}
      </section>
    </section>
  `;
}

function renderTraumaScreen() {
  return `
    <section class="screen">
      <section class="panel">
        <div class="section-head">
          <div>
            <div class="eyebrow">Trauma lens</div>
            <h1 class="section-title">Read the nervous system, not just the behavior</h1>
          </div>
          <p class="section-copy">Recognizing the pattern tells you what correction will not work and what might land with dignity.</p>
        </div>
      </section>

      <section class="lens-grid">
        ${data.trauma.map((lens) => `
          <article class="lens-card">
            <h3>${lens.title}</h3>
            <div class="lens-copy">
              <div>${lens.summary}</div>
              <div class="lens-label">Strategy</div>
              <div>${lens.strategy}</div>
              <div class="lens-label">What to watch for</div>
              <div>${lens.watch}</div>
            </div>
          </article>
        `).join("")}
      </section>
    </section>
  `;
}

function renderPanicOverlay() {
  return `
    <div class="panic-overlay" ${state.panicOpen ? "" : "hidden"}>
      <div class="panic-sheet" role="dialog" aria-modal="true" aria-label="Reset scripts">
        <div class="panic-head">
          <div>
            <div class="eyebrow">Reset</div>
            <h2 class="section-title">Breathe. One direction.</h2>
            <p class="section-copy" style="margin-top:6px;">The room is reading you. Be the calmest thing in it. Pick the script that fits.</p>
          </div>
          <button class="close-button" type="button" data-action="close-panic" aria-label="Close reset overlay">&times;</button>
        </div>
        <div class="breath-orb"></div>
        <div class="panic-breath">Breathe in - hold - breathe out</div>
        <div class="panic-script-list">
          ${data.panicScripts.map((item) => `
            <div class="panic-script">
              <div class="mini-kicker">${item.label}</div>
              <p>"${item.script}"</p>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderArtPanel(label, copy, spotlight = false) {
  return `
    <div class="art-panel ${spotlight ? "is-spotlight" : ""}" aria-hidden="true">
      <div class="art-panel-inner">
        <div class="art-panel-band is-top"></div>
        <div class="art-panel-band is-middle"></div>
        <div class="art-panel-band is-bottom"></div>
        <div class="art-panel-copy">
          <strong>${label}</strong>
          <span>${copy}</span>
        </div>
      </div>
    </div>
  `;
}

function openScreen(screen) {
  state.screen = screen;
  if (screen === "rollout") {
    state.selectedDay = activeDayNumber();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function openTrack(trackId) {
  state.trackId = trackId;
  state.screen = "track";
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

appRoot.addEventListener("click", (event) => {
  if (event.target.classList.contains("panic-overlay")) {
    state.panicOpen = false;
    render();
    return;
  }

  const target = event.target.closest("[data-action]");
  if (!target) {
    return;
  }

  const { action } = target.dataset;

  if (action === "goto-screen") {
    openScreen(target.dataset.screen);
    return;
  }

  if (action === "open-track") {
    openTrack(target.dataset.track);
    return;
  }

  if (action === "switch-ladder") {
    state.ladderId = target.dataset.ladder;
    render();
    return;
  }

  if (action === "choose-scenario") {
    if (state.selectedChoiceIndex === null) {
      state.selectedChoiceIndex = Number(target.dataset.choice);
      render();
    }
    return;
  }

  if (action === "retry-scenario") {
    state.selectedChoiceIndex = null;
    render();
    return;
  }

  if (action === "next-scenario") {
    state.scenarioIndex = (state.scenarioIndex + 1) % data.scenarios.length;
    state.selectedChoiceIndex = null;
    render();
    return;
  }

  if (action === "select-day") {
    state.selectedDay = Number(target.dataset.day);
    render();
    return;
  }

  if (action === "toggle-rollout") {
    const dayNum = Number(target.dataset.day);
    const actionIndex = Number(target.dataset.index);
    const record = getDayRecord(dayNum);
    record.actions[actionIndex] = !record.actions[actionIndex];
    setDayRecord(dayNum, record);
    render();
    return;
  }

  if (action === "save-reflection") {
    const dayNum = Number(target.dataset.day);
    const record = getDayRecord(dayNum);
    const text = record.reflection.trim();

    if (!text) {
      return;
    }

    reflections = [
      {
        day: dayNum,
        date: new Date().toLocaleDateString(),
        text
      },
      ...reflections
    ];
    saveReflections();

    setDayRecord(dayNum, {
      ...record,
      reflection: ""
    });

    render();
    return;
  }

  if (action === "open-panic") {
    state.panicOpen = true;
    render();
    return;
  }

  if (action === "close-panic") {
    state.panicOpen = false;
    render();
  }
});

appRoot.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("[data-action='reflection-input']")) {
    return;
  }

  const dayNum = Number(target.dataset.day);
  const record = getDayRecord(dayNum);
  setDayRecord(dayNum, {
    ...record,
    reflection: target.value
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.panicOpen) {
    state.panicOpen = false;
    render();
  }
});

render();
