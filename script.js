const STORAGE_KEY = 'back-to-zero-reader-state';

const chapters = [
  {
    title: 'Beyond the Pepperoni',
    summary: 'A first job, a first chance, and the lesson that people remember how they are treated.',
    content: [
      `It's 9:15 on Sunday night. I have nothing to do and nobody to talk to, which is probably why I'm finally sitting down to write this. Tomorrow I'll be up at 5 AM, getting ready for another day at the cardiology clinic where I work now. But tonight, for some reason, I keep thinking about how I got here. And when I trace it all the way back, it doesn't start in a hospital. It starts in a pizza shop.`,
      `I was seventeen. There was a build-your-own pizza place near us in North Carolina, and my dad used to take me there from time to time. We'd go through the line together and build our own pizzas. Mine was always the same: plain cheese with a side of ranch. One day, while going through that line, my dad brought up the idea of me getting a job. My dad looked around and said, half-joking, “Hey, maybe you could get a job here.”`,
      `A pizza place? I remember thinking. But we kept moving through the line, ordered our food, and when we got to the register, my dad just asked the woman working it what it would take to get a job there. Her name was Clarissa. “All you got to do is fill out a paper application,” she said. “Bring it back when you're done, and we'll see what happens.”`,
      `So we took the application to our table, ate our pizza, and I filled it out right there between bites. Weeks went by. I didn't think much of it. Then my phone rang. It was a number I didn't recognize. “Is this Tyler?” “Yes.” “Hi, this is Clarissa from the pizza place. You filled out an application with us, and we'd like to offer you a job making pizzas.”`,
      `I tell this story because Clarissa was the first person who ever took a chance on me. A seventeen-year-old kid with no experience, nothing on paper, and she still gave him a shot. That first day, the job looked simple from the outside. My job was just to take the dough, add sauce, ask about toppings, and build pizzas. But what I didn't understand yet was that I wasn't just making food. I was standing at the one point in the entire business where the customer could actually see the process happen.`,
      `I remember one of my first real lessons that had nothing to do with dough at all. A woman came through with her two kids, and one of them wanted extra pepperoni. I hesitated because I didn't know the rule and I just kind of froze. Clarissa came over and explained something that stayed with me forever: “You can always say yes to a little more.” The cost of a few extra pepperonis was nothing compared to what it cost us if that mom decided she wasn't coming back because she felt like we were counting her pepperonis.`,
      `That one sentence rewired how I thought about the job. It wasn't about pepperoni. It was about the fact that the woman standing in front of me was deciding, in that exact moment, whether this was going to be a place her family came back to on a Friday night, or just a place they tried once. That was the beginning of my understanding that customer service wasn't about being nice for thirty seconds. It was about noticing what a person needed before they'd fully said it, and making a decision fast that made them feel like they mattered more than the transaction did.`,
      `I got better at reading people faster than I got better at making pizza. There was the family after a soccer game, the nervous couple on a first date, and the regular who always ordered the same thing and just wanted to feel recognized. We had a guy who came in almost every Thursday, always ordered a thin crust with mushrooms and banana peppers, and sat at the same table by the window. Clarissa leaned over and said, quiet enough that only I could hear, “Mushroom and banana pepper guy's here.” That was the whole lesson. I started building his pizza before he even reached the register.`,
      `Then one day, Clarissa brought me in early before opening and started showing me the parts of the business customers never saw. She taught me how to make dough from scratch. She taught me expo: how to cut the pizza, how to plate it, and how to make sure it looked as good going out as the customer had pictured it in their head. Eventually she trusted me to prep everything myself, every topping, every sauce, every part of the process that happened before a customer ever walked through the door. That's when it really clicked for me. This wasn't just about making pizza. It was about understanding how a business actually runs.`,
      `I started noticing customer service in places I hadn't before. The way a slightly burnt crust could be saved by how apologetic and fast you were about fixing it. The way a busy Friday night rush could either feel chaotic or controlled depending entirely on whether the person handing them their food looked like they had it together. Clarissa understood that better than anyone I'd met up to that point. She didn't just teach me what to do. She taught me why it mattered to the person waiting on the other side of the counter.`,
      `I already knew, even then, which kind of person I wanted to be. I just didn't know yet how far that would take me.`
    ]
  },
  {
    title: 'Nine Pages of Armor',
    summary: 'A nervous interview, a hard lesson in preparation, and the first time effort becomes a clear advantage.',
    content: [
      `By the time I left the pizza shop, I'd started thinking about something bigger. I wanted to get into tech. The problem was, I had a resume with one line on it: pizza shop, cheese and toppings, customer service. Nothing about technology. Nothing that said I understood the first thing about the products I wanted to sell. But I wanted it more than I'd wanted anything, and I genuinely didn't know if it was something a kid like me was even allowed to want.`,
      `So when a position opened up at the local Best Buy, I applied without really letting myself believe anything would come of it. And then, a week later, my phone rang again. A number I didn't know. An interview was scheduled for the following Tuesday. I remember sitting in the parking lot before that interview longer than I probably needed to, rehearsing what I'd say if they asked why I wanted the job.`,
      `I remember walking into the store itself more than almost anything else about that day. Marcus was already sitting on one side of the table when I walked in. He had a way of looking at you that made you feel like he was already three questions ahead of whatever you were saying. He started with the usual questions: why do you want to work here, what do you know about our products. I fumbled through it.`,
      `Then, out of nowhere, he slid a laptop across the table and said, “Sell me this laptop.” I froze. I said something like, “So, um, do you need a laptop?” He just looked at me. I didn't know the specs. I didn't know what made it different from any other laptop on the shelf. I was verbally treading water. It was bad. I knew it was bad while it was happening.`,
      `Before I left, Marcus said, “Tell you what. Come back next week. Same thing. I'm going to ask you to sell me a laptop again.” That was it. No pep talk. No hints. Just an opportunity to not embarrass myself a second time. I took that week more seriously than I'd taken anything up to that point in my life. I skipped school to work on it. I watched sales training videos and wrote everything down.`,
      `By the end of that week, I had nine full pages of notes. Sales tactics, questions, phrases, whole scripts I'd half-memorized. I didn't know yet that most of it would turn out to be useless the second a real conversation started, but at the time, those nine pages felt like armor. I walked back in the following week with those pages folded in a manila folder under my arm. Marcus looked at the folder and asked what I had there. “Notes,” I said. “From this week.”`,
      `Then he slid the laptop back across the long table. “Alright. Sell it to me.” And I froze again. All those pages, all those nights, all that preparation, and in the actual moment, none of it came out right. I stammered through something, lost the thread halfway through a sentence, and just kind of trailed off into silence. Marcus didn't let me sit in it, though. He picked the laptop up himself and walked me through it, not a script, just a conversation. He asked me what I'd use it for. He listened. He paused. He explained why this particular laptop made sense.`,
      `Then he set the laptop down, looked at me, and said, “Give me a second.” He came back with a woman I'll call Grace. “This kid,” he said, nodding at me, “showed up with nine pages of notes. He wants this job more than anything I've seen in a long time. He's going to be directly under you. You're responsible for him.” Grace looked at me for a moment, and then Marcus said, “I'll take the kid.” That was the first time in my life someone looked past a bad first impression and decided that my effort afterward mattered more than the mistakes had.`,
      `The next few months, Marcus and Grace trained me on everything. I started in the computer department, then moved through TVs, appliances, smart home systems, cameras, all of it. The real lesson wasn't memorizing specs. It was asking the right questions to understand what someone was actually going through. That idea cracked something open for me. It wasn't actually new. It was the same lesson Clarissa had taught me at the pizza counter, just dressed up in a different uniform.` 
    ]
  },
  {
    title: 'The North Face Jacket',
    summary: 'A room full of credentials and the moment a different kind of confidence begins to matter.',
    content: [
      `By the time I was eighteen, I was still working at Best Buy, still in the computer department most days, but something in me had started reaching past it. I knew that in tech, a resume alone doesn't say much. What said something was certifications. So I signed up for a class here in North Carolina, working toward one of those certifications, sitting in a room full of people learning the guts of how computers actually worked. I remember feeling like I could conquer the world.`,
      `One day, sitting in that class, I opened LinkedIn and saw a Microsoft hiring event. Microsoft. Not a store. Not a mall kiosk. Microsoft. I applied that same day. A few days later, an email came through: an invitation to the hiring event itself. I remember walking into that room in my North Face jacket and feeling almost instantly like I'd walked into the wrong building. Everyone around me was in a suit.`,
      `And there I was. Eighteen years old, no degree, not even finished with the certification I was working toward, sitting among people with master's degrees and PhDs. I remember finding a seat and just sitting there for a minute, taking it all in, feeling that particular kind of quiet panic that comes from realizing you might be in over your head before anyone's even asked you a single question. But underneath the panic was something else: a strange calm.`,
      `I had learned to have conversations with all kinds of people who were way outside my own experience. I'd talked a woman through smart home cameras when I barely understood half the security features myself, just by asking the right questions and actually listening to her answers. I didn't have a PhD. I didn't have years of infrastructure experience. But I had a pizza counter and a Best Buy computer department's worth of practice in exactly the skill most of the people in that room had probably never had to develop: connecting with a person instead of reciting a spec sheet.`,
      `A few days later, I got a call about an interview. The woman who reached out, Renee, didn't tell me much beforehand, just a time and a place. I remember finding myself standing near a fountain in the middle of a shopping mall, waiting for a woman I'd never met to walk up and change the direction of my life. We walked the entire mall together. She asked me about my background, not what my title was, but how I'd actually started in sales.`,
      `She asked me what it took to start a conversation with somebody who didn't know you, and what it took to keep that conversation going. I told her that starting a conversation was really just about noticing something true about the person in front of you and saying it out loud, and that keeping it going was about actually caring what they said back. She asked me about trust, and how you get somebody to trust you fast. I told her that trust wasn't something you asked for. It was something you earned by asking the right question at the right moment, and then actually sitting with the answer.`,
      `By the time we finished walking, I didn't know exactly what she thought of me. But I knew I'd told her the truth the entire time. And for the first time since I'd seen that hiring event posted on LinkedIn under a classroom table, I let myself believe that this might actually go somewhere.`
    ]
  },
  {
    title: 'Handing Over the Clicker',
    summary: 'A mentor teaches that stories carry information farther than facts alone ever can.',
    content: [
      `Once I actually got hired, the job itself started out looking a lot like what I already knew. I was in sales, selling software and hardware, the same basic shape of work I'd done at Best Buy: figure out what somebody needs, ask the right questions, guide them toward the right solution instead of just the most expensive one. But it didn't take long to realize this was an entirely different level of the same game.`,
      `And running underneath every single conversation was the same sentence, repeated so often it stopped feeling like a slogan and started feeling like an instruction: empower every person and every organization on the planet to achieve more. You weren't selling software. You were supposed to be thinking about the person on the other end of it.`,
      `The woman who taught me how to do that, Erica, was unlike anyone I'd worked under up to that point. Clarissa had taught me patience and attention. Marcus and Grace had taught me structure and how to ask the right question. Erica taught me something different entirely: she taught me that none of that mattered if you couldn't make people actually care. I remember the first time she brought me along to one of her trainings.`,
      `She handed me the clicker as the room filled up. Eighty-plus people found their seats, laptops open, waiting to be taught how to use Teams inside their organization. And then she looked at me and said, essentially, “You're up.” I froze. I fumbled through a good chunk of that training. Badly. I lost my place. I explained things out of order. The room's attention drifted.`,
      `But she didn't take the clicker back. She let me finish the whole thing, start to finish, mistakes and all, and I'm genuinely thankful for that now. That training ran in multiple sessions that day. When the next session started, Erica stepped up to present it herself. I sat in the back and watched her the way I'd never watched anyone teach anything before. Every redirect, every pause, every place where she let a question breathe before answering it, I wanted all of it.`,
      `What she'd been doing, I realized, was telling a story. Erica taught me that you can hand a room eighty PowerPoint slides full of accurate information and still lose every single person in it within the first ten minutes if none of it connects to anything they actually care about. Facts don't move people. Features don't move people. A story moves people. She taught me that people don't connect to information. They connect to a story with a purpose behind it, and to the person telling it.`,
      `That idea cracked something open in me. It connected straight back to Clarissa and the pizza counter, except I hadn't fully understood the shape of it until Erica put language to it. Clarissa had taught me to notice a person. Marcus and Grace had taught me to ask the right question instead of pushing a product. Erica taught me why all of that actually worked: because underneath every interaction, whether it was a pizza order or an enterprise software rollout, there was a story.`
    ]
  },
  {
    title: 'The Breaking Point',
    summary: 'A period of exhaustion and fear that reveals the value of support, honesty, and slowing down.',
    content: [
      `There is a version of this book where I could skip this chapter. It's harder to write about the part where I pushed myself so far past my own limit that stress and anxiety put me in a hospital bed instead of at a desk. But this chapter is probably the most important one in the whole book, because none of what came after it would have happened without the person who helped pull me back from it.`,
      `I was working harder than a person is supposed to work, for longer than a person is supposed to sustain it, convinced the entire time that stopping, or even slowing down, meant I was failing at the one thing I'd built my whole identity around. The stress built quietly at first. A tightness in my chest. A mind that wouldn't slow down at 2 a.m. A low hum of dread. I ignored every bit of it.`,
      `It caught up with me all at once. The anxiety stopped being something I could push through with willpower and turned into something physical: a racing heart, a body bracing for an impact that never arrived, until eventually I ended up in a hospital. I don't think I can fully describe how alone I felt lying there. Not just physically alone, though there was plenty of that too, but alone in the sense that I didn't recognize the person the monitors were tracking.`,
      `It was somewhere in that stretch of time, broken down and isolated, that I signed up for a mentorship program at work. I almost didn't. It felt like a small gesture against the size of what I was actually dealing with. But I got matched with Melony, and I remember the first call with her more vividly than almost anything else from that year. She didn't come at me with fixes or frameworks. She just asked how I was, and waited.`,
      `What Melony gave me during that period wasn't career guidance. It was presence, and light, delivered slowly and patiently into a life that had gone almost entirely dark. She talked about limits as information rather than weakness. She asked how I was actually doing. She showed up as a person, for a person, and she refused to let me sit in the dark alone. Looking back, I think that's the real difference between a mentor and somebody who's simply above you on an org chart. A mentor doesn't just want your output. A mentor wants you, the actual person, to still be standing at the end of whatever you're going through.`
    ]
  },
  {
    title: 'The Fifth Floor',
    summary: 'A career-defining loss that strips away identity and forces a painful reset.',
    content: [
      `I remember the exact floor. Fifth floor, Microsoft corporate office, a conference room I had walked past a hundred times without ever thinking it would be the room where my entire life changed direction in under fifteen minutes. I got the calendar invite the way you get any other meeting invite. No red flags. No warning. Just a name and a time slot.`,
      `The call started, and I remember the exact cadence of the voice on the other end explaining restructuring, explaining that my role was being eliminated, explaining it in the careful, rehearsed language that companies use so that the actual weight of the sentence doesn't land until several seconds after the words do. It was a corporate monologue delivered with practiced empathy. I remember hearing the sentence and understanding it and still somehow not understanding it.`,
      `Then it was over. The call ended. The red light on the conference phone went dark. And I was still sitting in that conference room, on the fifth floor, staring at a table that had, thirty seconds earlier, still belonged to a life I recognized. I don't think people who haven't lived through it understand what it actually feels like to lose a job like that: not just financially, but identity-first, before the financial fear even has time to fully register.`,
      `Every single piece of who I thought I was had been built inside that company. The kid who'd learned to read a customer at a pizza counter. The kid who'd bombed a laptop pitch twice and gotten a shot anyway. The kid who'd walked into a room of PhDs in a North Face jacket and found a way to belong. When you build your entire self-worth into the machine you work for, the machine doesn't just take your labor when it turns off. It takes your history. It takes the proof that you exist.`,
      `I walked out of that building afterward and sat in my car with the engine off. I thought about Clarissa, Marcus, Grace, Renee, Erica, Melony. Every person who had taken a chance on me, trained me, pushed me, held me together. I felt like I'd somehow let all of them down in one fifteen-minute phone call, even though none of them would have said that. That's what losing something like that does. It doesn't just take the job. It takes your ability to trust the story you've been telling yourself about who you were and where you were headed.`,
      `I sat there in that parking lot for a long time, staring at the key card in my center console and wondering how many hours it would take before the system deactivated it and turned me into a stranger to the gates. There was just me, in a parking lot, staring at a building I used to belong to, trying to figure out who I was supposed to be now that the thing I'd built my entire identity around had disappeared in less time than it takes to eat a slice of pizza.`
    ]
  },
  {
    title: 'You\'re Crazy',
    summary: 'The fear of starting over and the courage to choose meaning over a familiar path.',
    content: [
      `I never thought I'd have to write a chapter like this one. Every other chapter in this book has been about somebody who showed up for me. But I've seen this next part play out too many times in my career now to let it go by without saying it plainly. Some people will not support you. They won't do it quietly by disappearing. Right to your face, they will tell you that what you're trying to do is a mistake.`,
      `I found that out firsthand when I decided to leave tech for healthcare. By that point, I'd spent seven years building a career in technology. I had certifications. I had a degree in business. I had a resume that, on paper, made sense in exactly one direction: further into tech. And then I told people I wanted to walk away from all of it and go into healthcare, a field I knew almost nothing about.`,
      `I remember specific conversations where I could see it happening in real time. The tilted head. The pause before responding. The gentler version of the same message: “I just want you to think this through.” The less generous version was even more direct: “You're crazy.” Some of them said it outright. Some of them dressed it up as concern. But it landed exactly the same either way.`,
      `People told me I was throwing away seven years of my life on a whim. For a while, I let myself wonder if they were right. Maybe I was crazy. Maybe seven years and a stack of certifications were too much to walk away from for a feeling I couldn't fully explain yet. But the truth was that all of it had built a career that looked successful from the outside but still didn't feel like it meant much of anything to me on the inside.`,
      `None of them were cruel about it, not exactly. Most of them genuinely believed they were being practical. But what none of them seemed able to understand was that I wanted to be close to something that mattered in a way I could see and feel directly, not just close a deal and move to the next one. That was the part of the reasoning they couldn't see.`,
      `I didn't stop because of what they said, but I won't pretend it didn't shake something loose in me for a while. It is one thing to have strangers doubt you. It is another thing entirely to have the people closest to you look you directly in the eye and tell you, plainly, that they think you've lost your mind. But I kept going. And that decision would change everything.`
    ]
  },
  {
    title: 'The Doorway to Vanderbilt',
    summary: 'A new industry, a new language, and the moment the full story becomes a real strength.',
    content: [
      `This is where the magic happens. Everything up to this point had been building toward a single room I didn't know existed yet, and a conversation where, for the first time in my career, none of it needed to be explained away. It just needed to be told.`,
      `After deciding healthcare was the direction I wanted, I still had almost nothing that said healthcare on paper. My resume was built entirely around technology. I had to start over from something close to zero, the same way I had at seventeen with nothing but a first-job line on a paper application. Except this time I was in my mid-twenties, with a real career already behind me, trying to explain to an entirely new industry why any of that mattered.`,
      `I spent months reworking that resume, trying to translate everything I'd learned: the customer service instincts from Clarissa, the relationship-building Marcus and Grace had drilled into me, and the storytelling Erica had taught me. I also started earning healthcare-specific certifications, the same way I'd once stacked up certifications to break into tech. When the first real opportunity came, it wasn't glamorous. It wasn't the job I actually wanted. It was a position at an eye surgery center. I took it anyway, because I understood something by then that I hadn't fully understood back at the pizza shop or at Best Buy: sometimes the job in front of you isn't the destination. It's the doorway.`,
      `That eye surgery center taught me more about healthcare, in a shorter amount of time, than any certification or textbook could have. I learned scheduling, pre-op workflows, informed consent, sterile fields, and the real rhythm of how a surgical day actually moved. But what struck me most was the patients themselves. Most of them were older, many of them nervous, and some were having a procedure that would be the difference between independence and losing the ability to drive, to read, or to recognize the faces they loved.`,
      `I started to understand, standing in that waiting room morning after morning, exactly what I'd been missing in tech all those years: this was the human impact I'd wanted, right in front of me, immediate and undeniable. I could calm a nervous patient, walk a confused family member through what to expect, and go home having done something that mattered in a way a closed software deal never quite had. It was there, doing work far below what I'd once been paid to do in tech, that I finally started to believe I'd made the right decision.`,
      `And then the opportunity came: an interview at Vanderbilt. I remember preparing for that interview differently than anything before. I didn't show up with nine pages of sales tactics scribbled together the night before. This time, I had an actual story, built across nearly a decade, and for the first time, I understood that the story itself was the qualification.`,
      `When I got into the room, the interviewer asked the usual question: walk me through your background. And instead of trying to compress everything into a tight, safe, resume-friendly summary, I just told it, start to finish. I talked about the pizza shop. I talked about Best Buy. I talked about the Microsoft hiring event, the fifth-floor conference room, the hospital bed, the mentorship program, the eye surgery center. I watched the interviewer's posture change. She asked follow-up questions that weren't about my technical qualifications at all. She asked what it had been like sitting in that room full of PhDs, what I'd learned from being told I was crazy, and what it felt like the first time a patient thanked me.`,
      `Nobody across that table looked at my winding path and saw a liability. They saw exactly what I'd finally learned to see in myself: a person who understood, on a level most candidates never get the chance to demonstrate, what it actually means to connect with somebody who's struggling, to notice what they need before they say it, and to tell a story clearly enough that a stranger can see themselves inside of it. Every piece of the path that people had once called crazy turned out to be the exact thing the person across the table was looking for. That's the moment I understood something I'd never fully grasped until I said it all out loud: nothing in this story had ever been wasted.`
    ]
  },
  {
    title: 'Passing It Forward',
    summary: 'The final reflection on why people matter more than titles and how belief should be shared.',
    content: [
      `I keep thinking back to that first night I sat down to write any of this: a quiet house, an early alarm waiting for me the next morning, nothing but a blank page and a question I couldn't quite shake: how did I actually get here? I didn't know yet, starting out, that the answer wouldn't be about a career at all. It would be about people.`,
      `Every chapter in here has a name in it, sometimes changed, but always real. Clarissa, Marcus, Grace, Renee, Erica, Melony, and even the people who let me down taught me something too. If you strip away the job titles, what's left in every single one of these chapters is the same thing, over and over: someone deciding to see me, fully, and take a chance on what they saw.`,
      `That's the real thesis of this whole book, if it has one: success was never actually about the credentials. It wasn't about the certifications I stacked up, or the degree, or the title, or the resume that eventually looked impressive enough to get me in a room. What moved my life forward, every single time, was a person who paid attention to the details other people rushed past and decided I was worth investing in before I'd given them any real proof that I would be.`,
      `Clarissa didn't need me to already know how to make dough. Marcus and Grace didn't need me to already know how to sell a laptop. Renee didn't need a technical resume. Erica didn't need me to be ready. Melony didn't need me to perform wellness or strength. They all needed something more human than that. They needed to see the willingness to become. That distinction changed the way I look at literally everyone I meet now.`,
      `And that's the responsibility this book has slowly walked me toward, chapter by chapter. Once you've been on the receiving end of that kind of belief, you don't get to keep it for yourself. It becomes yours to pass forward. I think about that every single day now, standing in a cardiology clinic instead of a pizza shop or a Microsoft office, watching new people come through the door still figuring out who they're going to become.`,
      `Because here's what I know for certain now: the details matter more than people think they do. The way you stretch a pizza dough. The question you ask instead of the pitch you give. The way you show up for someone during their hardest month instead of going quiet. The decision to believe someone's story instead of demanding they already have the proof. None of it looks like much in the moment. All of it, added up over years, is the entire difference between a life that stays stuck and one that keeps climbing back after every fall.`,
      `And if you're reading this and you're somewhere in the middle of your own version of this story right now, laid off, doubted, sitting in a parking lot with the engine off, wondering if any of it counted, I want you to know you're not standing there alone. Somebody, somewhere, is about to be the next Clarissa, the next Melony, for you. And if nobody has shown up yet, let this be that. Let this book be the hand reaching back.`,
      `Because that's really what back to zero means, in the end. It's not the starting over. It is the exact place and time, surrounded by the right people.`
    ]
  }
];

const state = {
  chapterIndex: 0
};

const chapterLabel = document.getElementById('chapter-label');
const chapterCount = document.getElementById('chapter-count');
const chapterTitle = document.getElementById('chapter-title');
const chapterContent = document.getElementById('chapter-content');
const progressFill = document.getElementById('progress-fill');
const chapterPills = document.getElementById('chapter-pills');
const prevButton = document.getElementById('prev-chapter');
const nextButton = document.getElementById('next-chapter');

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return state;

  try {
    const parsed = JSON.parse(saved);
    return { ...state, ...parsed };
  } catch {
    return state;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function renderChapterPills() {
  chapterPills.innerHTML = chapters
    .map((chapter, index) => {
      const activeClass = index === state.chapterIndex ? ' is-active' : '';
      return `<button class="chapter-pill${activeClass}" type="button" data-index="${index}">${index + 1}</button>`;
    })
    .join('');
}

function renderChapter() {
  const chapter = chapters[state.chapterIndex];
  chapterLabel.textContent = `Chapter ${state.chapterIndex + 1}`;
  chapterCount.textContent = `of ${chapters.length}`;
  chapterTitle.textContent = chapter.title;
  chapterContent.innerHTML = chapter.content.map((paragraph) => `<p>${paragraph}</p>`).join('');

  progressFill.style.width = `${((state.chapterIndex + 1) / chapters.length) * 100}%`;
  prevButton.disabled = state.chapterIndex === 0;
  nextButton.disabled = state.chapterIndex === chapters.length - 1;
  renderChapterPills();
  saveState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToChapter(index) {
  state.chapterIndex = Math.max(0, Math.min(chapters.length - 1, index));
  renderChapter();
}

prevButton.addEventListener('click', () => goToChapter(state.chapterIndex - 1));
nextButton.addEventListener('click', () => goToChapter(state.chapterIndex + 1));

chapterPills.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-index]');
  if (!button) return;

  goToChapter(Number(button.dataset.index));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') goToChapter(state.chapterIndex + 1);
  if (event.key === 'ArrowLeft') goToChapter(state.chapterIndex - 1);
});

Object.assign(state, loadState());
renderChapter();
