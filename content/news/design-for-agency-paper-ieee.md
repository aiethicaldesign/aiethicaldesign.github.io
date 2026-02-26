---
title: "Design for Agency Paper Submitted to ACM"
description: "New research paper exploring design principles for fostering children's agency in AI systems has been submitted to ACM IDC for peer review."
date: "Jan 27, 2026"
author: "Boyin Yang"
readTime: "2 min read"
type: "Publication"
image: "/images/news/default-image.png"
---

New research paper exploring design principles for fostering children's agency in AI systems has been submitted to ACM IDC for peer review.


# **Designing for Children's Agency in AI** 

# **1. Introduction**

## **Why Ethical Design, Why Agency by Design**

As AI becomes more deeply embedded in children's lives, algorithmic
manipulations and behavioural engineering are prevalently applied to
enable personalisation or so-called effective user engagement. These
systems shape children's learning, play, and everyday decision-making in
ways that are often invisible. Children, whose cognitive and
socio-emotional capacities are still developing, are particularly
susceptible to persuasive or manipulative design patterns.

Within this landscape, children's **agency** – the ability to make
meaningful choices and act upon them – has been increasingly recognised
as a central value in the design of AI-enabled systems. Agency is not
limited to individual control. It includes relational forms: children's
actions and decisions are shaped by caregivers, peers, educators, and
the platforms they use. A child's capacity to act meaningfully depends
on these relationships and on the structures of the systems they
interact with.

Critically, agency should be treated not as an optional ethical
principle but as a **foundational lens** through which other ethical
commitments are realised in practice. Without agency, transparency
cannot be meaningfully interpreted, accountability cannot be exercised,
and fairness cannot be contested. Designing for agency operationalises
ethical commitments by enabling children to understand, question, and
engage with AI systems in developmentally appropriate ways. This
motivates the need for **agency by design**: systematically integrating
considerations of children's autonomy, participation, and voice into the
design process from the outset.

## **Gaps and Our Objectives**

Despite this growing recognition, designing for children's agency
remains challenging in practice. Agency is often articulated at a high
level of abstraction, leaving design teams with limited guidance on how
to translate principles into concrete decisions. In real-world contexts,
designing for agency is frequently treated as implicit or
retrospectively justified. Existing toolkits have attempted to address
this by raising awareness of ethical values, but they have paid little
attention to supporting the explicit consideration of agency for
children, and largely focus on stimulating conceptual awareness rather
than supporting the reasoning processes and decision-making that happen
during design.

We hypothesise that designing for agency is fundamentally a **cognitive
and reasoning challenge**, rather than merely a problem of optimising
outcomes. It should not be a tick-box exercise but a systematic process
of recognising the value of agency, identifying children's needs in
relation to system structure and stakeholder roles, and reasoning about
trade-offs. In response, we developed the **CHAI (Designing for
Children's Agency in AI) framework** – a conceptual framework designed
to support designers' reasoning about children's agency by making
assumptions visible, articulating trade-offs, and linking abstract
values to concrete system functions.

# **2. The CHAI Conceptual Framework**

## **The Journey and Context**

The CHAI framework draws on established approaches to ethical and
child-centred technology design, including the Ethics by Design for AI
(EbD-AI) framework, the UNICEF/LEGO RITEC Digital Design Toolbox, and
rights-by-design and playful-by-design principles. While these provide
important guidance, CHAI focuses specifically on supporting designers'
reasoning processes by offering a structured way to engage with
children's agency during design. The framework was refined through three
iterative pilot workshops with a child–AI design competition winner
team.

## **Core Components**

**Four types of agency as reasoning lenses.** Drawing on Bandura's
social cognitive theory and cross-disciplinary literature, the framework
distinguishes four analytically distinct types of agency. These function
as lightweight prompts for considering how children's agency is
distributed across stakeholders and system components:

1.  **Individual agency:** the child's capacity to make choices and act
    independently within or through the system.

2.  **Co-agency:** control, responsibility, and influence over outcomes
    are shared between the child and others such as a parent, peer, or
    teacher.

3.  **Proxy agency:** others act on the child's behalf (e.g. parents
    configuring settings), while the child's voice and preferences
    should remain represented.

4.  **Collective agency:** children act together with peers, families,
    or communities to influence shared outcomes through coordinated
    effort.

**Three levels of agency.** For each type, three levels (low, medium,
high) describe degrees of children's involvement, expressed from the
child's perspective. At a low level, the child's role is primarily
reactive. At a medium level, children can meaningfully influence
interactions within bounded conditions. At a high level, children play
an active role in shaping interactions and outcomes. Importantly,
maximising agency is not always the optimal goal; tensions and
trade-offs arise, and children's best interests should guide decisions.

**A four-stage reasoning process.** Inspired by the EbD-AI framework,
CHAI supports designers through: **Assessment** (articulating
agency-related design goals and clarifying which forms of agency are
valued, for whom, and why); **Mapping** (linking agency types and levels
to concrete system components and interactions via an agency mapping
matrix); **Application** (selecting consequential system functions and
exploring redesigns to better support agency); and **Reflection**
(examining how reasoning evolved, surfacing tensions and constraints,
and preparing for implementation).

## **Open-Source Resources**

The CHAI framework materials, including workshop templates, the agency
mapping matrix, and case study examples, are openly available at:
<https://github.com/junszhao/ethical-design>

# **3. Findings from Our Engagement with Designers**

## **Who, When, and How**

We conducted participatory workshops with four small design teams (nine
designers in total) who had previously taken part in child–AI design
competitions. Participants included undergraduate, Master's, and
doctoral students with backgrounds in education, design, and
engineering. All teams entered with an existing child-focused AI
project. Workshops lasted 60–90 minutes, conducted remotely via
Microsoft Teams with Figma for collaborative design. Each session
followed the four-stage CHAI reasoning process, with a researcher
facilitating while teams applied the framework independently.

## **What Worked Well** 

A key benefit was surfacing misalignments early. Teams discovered that
choices made for efficiency or protection (e.g., adult-first workflows,
restrictions, or structured prompts) could unintentionally remove
children from the interaction loop or narrow meaningful choice.
Participants described the process as "more complicated," but largely in
a positive way: the complexity felt productive because it exposed
trade-offs that are otherwise easy to miss, such as consent, privacy,
and the balance between parental responsibility and children's
participation. Overall, CHAI improved designers' confidence in
articulating and communicating agency-related trade-offs, even when they
were not ready to fully resolve them.

## **Barriers and Challenges**

The main friction points were conceptual boundaries, operationalisation,
and effort. Designers frequently struggled to distinguish co-agency from
proxy agency – especially when adults configure settings or make
decisions "for the child." The question often became not whether adults
are involved, but who ultimately holds power and whether the child can
influence, contest, or revise outcomes.

While CHAI strengthened awareness and reasoning, translating insights
into specific features remained difficult. Designers could identify
agency tensions but felt less certain about what concrete interaction
patterns, settings, or workflows would best address them, particularly
under constraints like child age differences, safeguarding obligations,
and limited development time. Finally, systematically annotating
multiple functions across types and levels was cognitively demanding.
Participants suggested that curated examples, a case library, or tool
support could reduce overhead while preserving the benefits of
structured reasoning.

**4. Findings from Engagement with Policymakers (TBC)**

## **Who, When, How**

# **5. Future Steps**

Our workshops demonstrate that the CHAI framework has genuine potential
as a cognitive scaffold for agency-oriented design reasoning. Rather
than introducing new ethical principles, it supports designers in making
their existing value commitments explicit and actionable. Key directions
for future development include:

1.  **Expanding and diversifying evaluation** across levels of design
    expertise, professional contexts, target child age groups, and AI
    application domains – including how experienced industry
    practitioners engage with the framework under commercial
    constraints.

2.  **Developing AI-supported design tools** that guide designers
    through the reasoning process in real time, flagging potential
    misalignments between stated values and design structures, and
    suggesting relevant agency considerations based on system
    descriptions.

3.  **Building a case study library** of concrete examples showing how
    different child–AI systems have navigated agency trade-offs in
    practice, to support learning and calibration across design
    contexts.

4.  **Connecting to longitudinal evidence** on how children's agency
    develops over time in AI-mediated environments, integrating insights
    from the wider CHAILD project's observational and empirical studies.

We believe that designing for children's agency is fundamentally a
reasoning challenge rather than an outcome-oriented problem. Supporting
this reasoning requires tools that embrace complexity, make tensions
visible, and enable negotiation rather than simplification. The CHAI
framework is a first step toward making that practice structured,
communicable, and grounded in the lived experiences of the children
these systems are built to serve.