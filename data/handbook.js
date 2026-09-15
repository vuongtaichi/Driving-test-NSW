/* Hand-written summary of the NSW "Road User Handbook" (Transport for NSW), condensed into
   scannable bullets per chapter/subsection. Not a verbatim copy - see the PDF at
   nsw.gov.au for the full, current text and the actual Road Rules at legislation.nsw.gov.au. */
window.HANDBOOK = [
  {
    "id": "licences",
    "title": "Licences",
    "page": 6,
    "sections": [
      {
        "title": "Getting your driver licence",
        "page": 7,
        "figures": [
          { "src": "images-handbook/licence-7-steps.png", "caption": "The 7 steps from the Driver Knowledge Test through to a full driver licence." }
        ],
        "bullets": [],
        "tables": [
          {
            "title": "Graduated Licensing Scheme (GLS) — minimum time to a full licence",
            "headers": ["Starting age", "Minimum time to full licence"],
            "rows": [
              ["Under 25", "At least 4 years (Learner → P1 → P2 → Full)"],
              ["25 and over", "At least 3 years"]
            ]
          },
          {
            "title": "Before you start",
            "headers": ["Requirement", "Detail"],
            "rows": [
              ["Minimum age", "15y 11m+ (DKT online) or 16+ (DKT in-person)"],
              ["Residency", "NSW residential address"],
              ["Identity", "Proof of identity"],
              ["Health", "Medically fit; pass an eyesight test"]
            ]
          },
          {
            "title": "Step 1 — Driver Knowledge Test (DKT)",
            "headers": ["Option", "Format", "Notes"],
            "rows": [
              ["Online", "Interactive course + test, anywhere via a MyServiceNSW Account", "Unlimited resits, one fee; minimum age 15y 11m"],
              ["In-person", "Multiple-choice computer test at a service centre", "Fee every re-sit; minimum age 16"],
              ["DLAP support", "Driver Licensing Access Program", "For disadvantaged/Aboriginal applicants; call 13 22 13 for an assistant reader"]
            ]
          },
          {
            "title": "Step 2 — Learner licence",
            "headers": ["Aspect", "Detail"],
            "rows": [
              ["Validity", "5 years (redo the DKT and pay again if it lapses)"],
              ["Logged hours, under 25", "120 hours incl. 20 at night, before the Driving Test"],
              ["Logged hours, 25+", "None needed — move on as soon as ready"],
              ["Building logged hours", "Safer Drivers Course (20hr credit); \"3 for 1\" lessons with an instructor (1 lesson hr = 3 log-book hrs); DLAP support"],
              ["Supervisor", "Must have a full Australian-licence holder beside you"],
              ["Alcohol", "Zero"],
              ["Plates", "Must display L plates"]
            ]
          },
          {
            "title": "Step 3 — Hazard Perception Test (HPT)",
            "headers": ["Aspect", "Detail"],
            "rows": [
              ["Format", "Computer test using real driving film clips, respond by touch"],
              ["Validity", "15 months"],
              ["Eligibility", "25+: any time. Under 25: needs 10 months on a learner licence first"]
            ]
          },
          {
            "title": "Step 4 — Driving Test",
            "headers": ["Aspect", "Detail"],
            "rows": [
              ["Format", "Practical on-road test with a Service NSW officer, in a registered roadworthy car"],
              ["Timing", "Within 15 months of passing the HPT (else redo the HPT)"],
              ["Under-25 extra requirements", "12 months on a learner licence + 120 logged hours (20 at night)"],
              ["If you fail", "Re-book after 7 days"]
            ]
          },
          {
            "title": "Steps 5–7 — Provisional and full licence",
            "headers": ["Stage", "Validity", "To progress"],
            "rows": [
              ["P1 (red P)", "18 months, renewable for a fee", "Apply for P2 after 12 months (extended if suspended; restarts if disqualified)"],
              ["P2 (green P)", "36 months, renewable for a fee", "Progress to full after 24 months (extended by the suspension length + 6 months; restarts if disqualified)"],
              ["Full", "1, 3 or 5 years — 10 years if aged 21–44", "—"]
            ]
          }
        ],
        "abbr": [
          ["DKT", "Driver Knowledge Test"],
          ["HPT", "Hazard Perception Test"],
          ["GLS", "Graduated Licensing Scheme"],
          ["DLAP", "Driver Licensing Access Program"]
        ]
      },
      {
        "title": "Licence classes",
        "page": 16,
        "bullets": [
          "This handbook covers the Car (C) licence; other vehicle types need a different licence class, plus tests, assessments and medical checks.",
          "Once you hold a full C licence you can apply for: a Passenger Transport (PT) code (taxis, chauffeured hire cars, rideshare), a Driving Instructor licence, or a Tow Truck Driver certificate; a Bus Driver Authority once you hold the matching bus class."
        ],
        "table": {
          "headers": ["Licence", "Can drive"],
          "rows": [
            ["Car (C)", "Up to 4.5t GVM, seats up to 12 adults incl. driver — utes, vans, light trucks, tractors/graders, car-based motor tricycles (no under-16 passengers in a tricycle)"],
            ["Rider (R)", "Any motorcycle, scooter or motor tricycle — doesn't require holding a C licence first"],
            ["Light Rigid (LR)", "C vehicles + 4.5–8t GVM (small delivery trucks), or >12-seat vehicles up to 8t (minibuses); trailer up to 9t"],
            ["Medium Rigid (MR)", "C + LR + 2-axle rigid vehicles over 8t GVM (e.g. buses); trailer up to 9t"],
            ["Heavy Rigid (HR)", "C + LR + MR + rigid vehicles/articulated buses with 3+ axles over 8t; trailer up to 9t"],
            ["Heavy Combination (HC)", "Above + prime movers with a single semi-trailer, or rigid vehicles towing over 9t"],
            ["Multi Combination (MC)", "All of the above + B-doubles, road trains, low loader dolly/trailer combinations"]
          ]
        }
      },
      {
        "title": "Licence restrictions",
        "page": 19,
        "bullets": [
          "Alcohol: zero BAC for Learner, P1 and P2 drivers alike — no alcohol in your system at all.",
          "Mobile phones: Learner/P1/P2 must not use a phone at all while driving, even stationary in traffic — no calls, texts, music, email, social media, internet, maps or photos. Only exceptions: showing a digital licence to police, or a stationary tap-and-pay in a car park/driveway/drive-through.",
          "Passengers: limited to the number of fitted seatbelts/child seats. After a disqualification, only 1 passenger for 12 months. Under-25s driving 11pm–5am can carry only one passenger aged under 21 (exemptions apply).",
          "High-performance cars: Learner/P1/P2 must not drive vehicles over 130kW/tonne power-to-mass, significantly engine-modified, or on the banned list — learners may still learn in one, just not drive solo.",
          "Location: Learner/P1/P2 must not drive in Parramatta Park, Centennial Park or Moore Park in Sydney; no restriction once fully licensed.",
          "Manual/automatic: passed the test in a manual → can drive either; passed in an automatic → automatic only, unless supervised in a manual by a full-licence holder.",
          "Motor tricycles: Learner/P1/P2 must not drive car-based motor tricycles.",
          "None of Learner/P1/P2 may supervise another learner.",
          "*P1/P2 supervision exception: if you passed the Driving Test in an automatic car and want to drive a manual, you still need a full-licence supervisor."
        ],
        "table": {
          "headers": ["Restriction", "Learner", "P1 (red P)", "P2 (green P)"],
          "rows": [
            ["Maximum speed", "90km/h", "90km/h", "100km/h"],
            ["Plate", "White L", "Red P", "Green P"],
            ["Supervision", "Required at all times", "Not required*", "Not required"],
            ["Towing", "Not allowed", "Light trailer up to 250kg empty", "Full-licence towing rules"],
            ["Extra vehicle classes", "Not allowed", "Not allowed", "LR/MR immediately; HR after 1 year on P2"]
          ]
        }
      },
      {
        "title": "Medical conditions and disability",
        "page": 24,
        "bullets": [
          "You must declare any medical condition or disability that could affect your driving when applying, and pass an eyesight test.",
          "Conditions like epilepsy or cardiovascular disease need regular medical assessments; a new condition after licensing must be reported to Transport for NSW — not reporting risks losing your licence.",
          "A disability with a serious effect on driving may require a practical test and can add licence conditions, e.g. automatic-only.",
          "Ageing: from 75, an annual medical assessment plus eyesight test is required to keep your licence; from 85, also a practical driving assessment every 2 years — or switch to a modified/local-area licence to skip the practical test."
        ]
      },
      {
        "title": "Interstate and overseas licences",
        "page": 25,
        "bullets": [
          "A current interstate/overseas licence can be used to drive in NSW; conditions depend on licence type — Learner needs a full-licence NSW-equivalent supervisor, L plates and zero alcohol; Provisional/Full follow your own licence's conditions.",
          "Always: obey NSW road rules, hold the correct class for the vehicle, and don't drive if suspended, disqualified or withdrawn.",
          "Interstate & NZ licences: usable for up to 3 months, then must be transferred to a NSW licence within that window.",
          "Other overseas licences: usable for 3–6 months; carry it with an English translation or an International Driving Permit if it's not in English.",
          "Permanent residents must transfer within 3 months; temporary-visa holders living in NSW over 6 months must transfer within 6 months — only one licence can be held/used in Australia at a time.",
          "Right to drive on an overseas licence is withdrawn if: 6+ months in NSW without transferring, the licence is suspended/disqualified anywhere, its demerit-point equivalent is exceeded, or certain speeding/alcohol/drug offences are committed.",
          "A DKT and/or Driving Test may still be required when transferring, depending on the country the licence is from."
        ],
        "table": {
          "headers": ["Overseas/interstate licence held", "NSW equivalent"],
          "rows": [
            ["Learner licence", "Learner licence (may skip straight to the HPT/Driving Test)"],
            ["Full licence held less than 12 months", "Provisional P1"],
            ["Full licence held 12 months to 3 years", "Provisional P2"],
            ["Full licence held 3+ years", "Full (unrestricted) licence"]
          ]
        }
      },
      {
        "title": "Driving with the correct licence",
        "page": 28,
        "bullets": [
          "Always carry the correct, current licence for the vehicle you're driving — police can ask for it anytime; keep a digital licence charged and uncracked.",
          "Fines apply for not carrying it or refusing to show it.",
          "Your licence must be current (not expired/suspended/disqualified), the right class, and a NSW licence unless validly using an interstate/overseas one.",
          "Driving without a correct, current licence risks large fines and prison, worse for repeat offences within 5 years.",
          "Never let an unlicensed person drive your vehicle."
        ]
      },
      {
        "title": "Learner driver supervisor",
        "page": 28,
        "bullets": [
          "A learner must always have a supervisor in the seat beside them; driving without one can mean immediate suspension.",
          "The supervisor must hold a full unrestricted Australian licence (not learner, P1/P2 or overseas) — both supervisor and learner can be fined otherwise.",
          "Supervisor alcohol/drugs: BAC under 0.05, no illegal drugs or drug influence. Police can breath-test a supervisor after a crash, hospital staff can blood/urine test, and police can test for suspected drug influence — the same severe penalties as for drivers apply.",
          "A supervisor is a role model and mentor: start with simple skills (steering, accelerating, braking) on quiet daytime roads, build up to busier roads and harder conditions, and keep early night practice on familiar roads."
        ]
      }
    ]
  },
  {
    "id": "safe-driving",
    "title": "Safe driving behaviour",
    "page": 30,
    "sections": [
      {
        "title": "Speed limits",
        "page": 32,
        "figures": [
          { "src": "images-handbook/speed-sign-regulatory.png", "caption": "Regulatory sign: white background, red circle — the legal limit." },
          { "src": "images-handbook/speed-sign-variable.png", "caption": "Variable electronic signs — change with road conditions." },
          { "src": "images-handbook/speed-sign-local-traffic-area.png", "caption": "Local traffic area — 40km/h residential streets." },
          { "src": "images-handbook/speed-sign-high-pedestrian.png", "caption": "High pedestrian activity area — 30 or 40km/h." },
          { "src": "images-handbook/speed-sign-shared-zone.png", "caption": "Shared zone (10km/h) and its end sign." },
          { "src": "images-handbook/speed-sign-school-zone-flag.png", "caption": "School zone start sign." },
          { "src": "images-handbook/speed-sign-school-zone-times.png", "caption": "School zone times and speed limit." },
          { "src": "images-handbook/speed-sign-school-zone-end.png", "caption": "End of school zone — limit reverts." }
        ],
        "bullets": [
          "Speeding is the #1 killer on NSW roads (~40% of deaths, ~20% of serious injuries).",
          "No sign = default limit: 50km/h built-up, 100km/h elsewhere.",
          "Radar detectors/jammers are illegal to carry.",
          "Penalties: fines, demerits (can double), licence loss, impoundment — worse over the limit and in school zones; a learner/P1 offence suspends their licence.",
          "A pedestrian hit at 50km/h is ~2x as likely to die as one hit at 40km/h."
        ],
        "tables": [
          {
            "title": "Sign types",
            "headers": ["Sign", "Meaning"],
            "rows": [
              ["Regulatory", "The legal limit"],
              ["Variable electronic", "Changes with conditions (tunnels/motorways)"],
              ["Local traffic area", "40km/h residential streets"],
              ["High pedestrian area", "30 or 40km/h"],
              ["Shared zone", "10km/h, give way to pedestrians"],
              ["School zone", "Signed times, flashing lights, dragon's teeth"],
              ["School bus", "40km/h either direction while lights flash"],
              ["Roadwork zone", "Signed limit"],
              ["Advisory (yellow)", "Recommended safe speed, not a legal limit"]
            ]
          },
          {
            "title": "Licence speed caps",
            "headers": ["Licence / vehicle", "Max speed"],
            "rows": [
              ["Learner, P1", "90km/h"],
              ["P2", "100km/h"],
              ["Heavy vehicles (LR/MR/HR/HC/MC)", "100km/h"]
            ]
          },
          {
            "title": "Speed camera types",
            "headers": ["Type", "Where"],
            "rows": [
              ["Mobile", "Moved anywhere, anytime"],
              ["Red-light speed", "Multi-lane intersections"],
              ["Fixed", "High-risk locations (tunnels)"],
              ["Average-speed", "Measures average over a distance"]
            ]
          }
        ],
        "abbr": [["LR/MR/HR/HC/MC", "Light/Medium/Heavy Rigid, Heavy/Multi Combination — heavy vehicle licence classes"]]
      },
      {
        "title": "Alcohol limits",
        "page": 39,
        "bullets": [
          "Can't reliably estimate your own BAC — not drinking at all is the only sure way to stay under.",
          "Penalties scale with how far over + repeat offences: fines, licence loss, prison, or a mandatory alcohol interlock. Even under-limit drink-driving draws a fine and demerits.",
          "Even 1–2 drinks impair reaction, judgement and distance perception; cause false confidence and drowsiness.",
          "~50% of Thu/Fri/Sat night fatal crashes involve alcohol.",
          "Only time reduces BAC (18+ hours after heavy drinking) — not coffee, a shower or a meal."
        ],
        "tables": [
          {
            "title": "BAC limit by licence / vehicle",
            "headers": ["Licence / vehicle type", "BAC limit"],
            "rows": [
              ["Learner, P1, P2", "Zero"],
              ["Full licence (C/R), interstate/overseas full", "Under 0.05"],
              ["Public passenger (bus/taxi/rideshare/hire car)", "Under 0.02"],
              ["Heavy vehicles over 13.9 tonnes", "Under 0.02"],
              ["Dangerous goods vehicles", "Under 0.02"]
            ]
          },
          {
            "title": "Testing",
            "headers": ["Test", "When", "Can you refuse?"],
            "rows": [
              ["Random Breath Test", "Anytime; mandatory after a crash", "No"],
              ["Blood/urine test", "After a crash, or on hospital admission", "No"]
            ]
          }
        ],
        "abbr": [["BAC", "Blood Alcohol Concentration"]]
      },
      {
        "title": "Drugs and medicines",
        "page": 43,
        "bullets": [
          "Must not drive with illegal drugs present, or under the influence of any drug (illegal, prescription or over-the-counter).",
          "MDT: roadside test for 4 illegal drugs (ecstasy, cannabis, cocaine, meth) — detectable long after use.",
          "Testing: random roadside saliva swab; blood/urine test after signs of influence, a serious crash, or hospital admission. Must not refuse.",
          "Many medicines can affect driving (painkillers, sedatives, cold/flu meds, etc.) — check labels, ask a doctor/pharmacist.",
          "Never mix drugs with alcohol or each other."
        ],
        "tables": [
          {
            "title": "Effects by drug type",
            "headers": ["Drug type", "Effect"],
            "rows": [
              ["Stimulants (ecstasy, cocaine, meth)", "False confidence, risky driving"],
              ["Opiates (heroin, morphine, codeine)", "Drowsiness, slow reactions"],
              ["Cannabis", "Slower reactions, distorted perception"]
            ]
          },
          {
            "title": "Penalties",
            "headers": ["Offence", "Penalty"],
            "rows": [
              ["Illegal drug present", "Fine + licence loss"],
              ["Driving under the influence (incl. prescription)", "Heavier, up to prison"]
            ]
          }
        ],
        "abbr": [["MDT", "Mobile Drug Testing"]]
      },
      {
        "title": "Seatbelts",
        "page": 46,
        "figures": [
          { "src": "images-handbook/seatbelt-fit.jpg", "caption": "The person with the tick is wearing their seatbelt correctly (low, flat and firm); the person with the cross is not." }
        ],
        "bullets": [
          "~30 killed, ~90 seriously injured yearly in NSW from not wearing a seatbelt.",
          "Everyone must wear a belt, whole body inside the vehicle — one per passenger, never shared.",
          "Wear it \"low, flat and firm\" — never under the arm or behind the back.",
          "A seatbelt roughly doubles your chance of surviving a crash.",
          "Penalties: detection cameras + police can fine the driver and any passenger 16+; demerits (can double)."
        ],
        "tables": [
          {
            "title": "Exemptions",
            "headers": ["Who", "When"],
            "rows": [
              ["Full-licence driver", "Reversing, or driving a slow garbage/delivery vehicle"],
              ["Their passengers", "Giving/getting urgent medical treatment"],
              ["Any driver/passenger (incl. learner/P1/P2)", "Medical certificate — sit in the back if possible"]
            ]
          }
        ]
      },
      {
        "title": "Child car seats",
        "page": 49,
        "figures": [
          { "src": "images-handbook/child-seat-ages.jpg", "caption": "Children wearing their seatbelt or child restraint properly for their age." }
        ],
        "bullets": [
          "Under-7s need an approved restraint (AS/NZS 1754) — driver's responsibility. See the age table below.",
          "7–16 too small for an adult belt: booster, forward-facing seat, or anchored harness (adult belt needs ~145cm).",
          "Fit tightly per the manufacturer's instructions, proper anchorage — an Authorised Restraint Fitter is recommended.",
          "Front seat: under-4s never in a 2+ row vehicle; 4–7s only if every back-row seat is taken by other under-7s.",
          "Penalties: fines and demerits (can double) for not restraining a child correctly.",
          "Never share a seatbelt with a child on your lap, and never carry a child in your arms while driving."
        ],
        "tables": [
          {
            "title": "Restraint required by age",
            "headers": ["Age", "Restraint required"],
            "rows": [
              ["Up to 6 months", "Rear-facing child car seat"],
              ["6 months – 4 years", "Rear- or forward-facing seat with an inbuilt harness"],
              ["4 – 7 years", "Forward-facing seat with harness, or an approved booster seat"],
              ["7 – 16 years (too small for an adult belt)", "Booster seat, forward-facing seat, or anchored harness"]
            ]
          },
          {
            "title": "Exemptions",
            "headers": ["Situation", "Rule"],
            "rows": [
              ["Under 12 months, tow truck after a crash", "OK without a proper seat if none is available"],
              ["Taxis", "Same age-based seat/booster/seatbelt rules"],
              ["Under-7 with a medical condition", "Doctor's certificate for an alternative restraint"]
            ]
          }
        ],
        "abbr": [["AS/NZS", "Australian/New Zealand Standard"]]
      },
      {
        "title": "Mobile phones",
        "page": 54,
        "bullets": [
          "No other function is allowed for anyone while driving (texting, video, social media, photos); never held or rested on the leg/shoulder.",
          "Any driver: any use once safely parked out of the line of traffic.",
          "Exemptions: showing a digital licence to police; a stationary tap-and-pay.",
          "Penalties: detection cameras operate anywhere/anytime; fines + doubled demerits; a learner/P1 over the limit loses their licence.",
          "Phone use while driving roughly quadruples casualty-crash risk."
        ],
        "tables": [
          {
            "title": "Allowed phone use",
            "headers": ["Licence", "Allowed"],
            "rows": [
              ["Learner, P1, P2", "None at all, even stationary"],
              ["Full licence", "Bluetooth hands-free (calls/audio); or a fixed holder (calls/audio/navigation)"]
            ]
          }
        ]
      },
      {
        "title": "Digital screens and GPS",
        "page": 57,
        "bullets": [
          "No visible/distracting digital screen unless it's a driver's aid (GPS, dispatch, reversing/CCTV/monitoring) properly fixed or built in.",
          "Passengers can use screens if not visible to the driver or distracting.",
          "Penalties: fine and demerit points."
        ],
        "abbr": [["GPS", "Global Positioning System"]]
      },
      {
        "title": "Fatigue",
        "page": 58,
        "figures": [
          { "src": "images-handbook/rest-area-sign.jpg", "caption": "A rest area sign — rest areas are open 24/7 but you must not camp in them." }
        ],
        "bullets": [
          "Affects everyone, even on short trips. Higher risk: shift workers, professional drivers, early-starting tradies, students, new parents.",
          "No specific road rule against it, but it's your responsibility.",
          "Prevention: ~8 hours' sleep a night; wait ~30 min after waking before driving.",
          "Warning signs: yawning, poor concentration, sore eyes, drowsiness, slow reactions, drifting, missing signs.",
          "Stop and nap (~20 min) at the first signs — don't wait for a microsleep.",
          "Plan breaks, share driving, stay hydrated; avoid alcohol, fatty food, too much coffee.",
          "Rest areas (24/7, no camping), petrol stations, or seasonal Driver Reviver sites."
        ],
        "tables": [
          {
            "title": "Fatigue by the numbers",
            "headers": ["Fact", "Figure"],
            "rows": [
              ["Deaths caused by fatigue", "~20% of NSW road deaths"],
              ["Fatal-crash likelihood", "~2x higher than average"],
              ["Awake ~17 hours", "≈ driving at BAC 0.05"],
              ["Late night / early morning fatal risk", "4x higher"],
              ["4-second microsleep at 100km/h", "110m+ with eyes off the road"]
            ]
          }
        ],
        "abbr": [["BAC", "Blood Alcohol Concentration"]]
      },
      {
        "title": "Hooning and street racing",
        "page": 62,
        "bullets": [
          "Must not organise, take part in, promote or even film hooning or street racing (burnouts, racing other vehicles, speed trials).",
          "Vehicle and licence can be confiscated on the spot."
        ],
        "tables": [
          {
            "title": "Penalties",
            "headers": ["Offence", "Penalty"],
            "rows": [
              ["First offence", "Large fines, demerits, licence loss, impoundment (up to 3 months + fees)"],
              ["Repeat offence", "All of the above, plus the vehicle can be sold, and prison"]
            ]
          }
        ]
      },
      {
        "title": "Negligent or dangerous driving",
        "page": 63,
        "bullets": [],
        "tables": [
          {
            "headers": ["Offence", "Definition", "Penalty"],
            "rows": [
              ["Negligent driving", "Below the care/attention expected of a driver", "Fine + demerits"],
              ["Dangerous driving", "Speed/manner risking serious injury or death", "Large fines, licence loss, prison"],
              ["Either, causing death or injury", "—", "Large fines, licence loss, prison"]
            ]
          }
        ]
      },
      {
        "title": "Safe stopping distance",
        "page": 64,
        "figures": [
          { "src": "images-handbook/crash-avoidance-3sec.jpg", "caption": "Keep at least 3 seconds' distance between your vehicle and the vehicle in front." },
          { "src": "images-handbook/crash-avoidance-photo.jpg", "caption": "Keep a 3-second gap behind the vehicle in front of you." },
          { "src": "images-handbook/stopping-distance-chart.jpg", "caption": "The distance a car travels to stop at 40/60/80/100km/h, on a dry vs wet road." }
        ],
        "bullets": [
          "Keep a 3-second gap behind the vehicle in front (4+ seconds in poor conditions: unsealed, icy/wet, night).",
          "Long vehicle (7.5m+ incl. towed): stay 60m+ behind another long vehicle, except multi-lane roads, built-up areas, or overtaking.",
          "Buffering: keep space around your vehicle for hazards (keep left over blind hills, avoid the door zone of parked cars).",
          "Check your gap: count \"1 thousand and 1, 2 thousand and 2...\" from a fixed object as the vehicle ahead passes it — too close if you reach it first.",
          "Two-stage braking (light pressure + pause, then squeeze) beats harsh braking, especially wet/gravel.",
          "Scanning: keep your eyes moving — ahead, road surface, each side, mirrors and instruments.",
          "Penalty: fine and demerit points for following too closely."
        ],
        "tables": [
          {
            "title": "Crash-avoidance space (≈ 3-second gap)",
            "headers": ["Component", "Time"],
            "rows": [
              ["Reaction time", "~1.5–2.5s"],
              ["Response time", "~1.5s"]
            ]
          }
        ]
      },
      {
        "title": "Common crashes in NSW",
        "page": 69,
        "figures": [
          { "src": "images-handbook/crash-type-rearend.jpg", "caption": "1. Rear-end collision." },
          { "src": "images-handbook/crash-type-adjacent.jpg", "caption": "2. Collision from an adjacent (side) direction." },
          { "src": "images-handbook/crash-type-opposite.jpg", "caption": "3. Head-on collision with an oncoming vehicle." },
          { "src": "images-handbook/crash-type-runoff-straight.jpg", "caption": "4. Running off the road on a straight." },
          { "src": "images-handbook/crash-type-runoff-curve.jpg", "caption": "5. Running off the road on a curve or bend." }
        ],
        "bullets": [
          "~80% of NSW casualty crashes are one of 5 types below (also the most common for provisional drivers).",
          "Avoidable by following the road rules and managing speed, fatigue and stopping distance — extra care at intersections and when overtaking."
        ],
        "tables": [
          {
            "title": "The 5 most common crash types",
            "headers": ["#", "Type", "Avoid by"],
            "rows": [
              ["1", "Rear-end", "Keeping a safe following distance"],
              ["2", "Adjacent (side) direction", "Extra care at intersections"],
              ["3", "Head-on", "Staying in your lane, careful overtaking"],
              ["4", "Running off a straight", "Managing speed and fatigue"],
              ["5", "Running off a curve/bend", "Slowing for the bend, scanning ahead"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "sharing-road",
    "title": "Sharing with other road users",
    "page": 71,
    "sections": [
      {
        "title": "Pedestrians",
        "page": 71,
        "bullets": [
          "Pedestrians include people walking/running, pushing a bicycle, using a wheelchair or mobility scooter/motorised wheelchair, or on a skateboard, foot scooter or rollerblades — they're vulnerable because they have no protection if a vehicle collides with them.",
          "Must give way to pedestrians: at pedestrian and children's crossings, when turning at intersections, when doing a U-turn, in shared zones, and when entering or leaving a driveway.",
          "Always slow down and be ready to stop for any pedestrian in danger, even if they don't have right of way or are jaywalking.",
          "Extra care for vulnerable groups: children (unpredictable, hard for them to judge speed/distance — watch near play areas, schools and school buses); older people (may be slower and not see you coming — slow down, give extra time); people affected by alcohol or drugs (common in crashes — take care near clubs, hotels, restaurants, festivals and events).",
          "Slow down and take extra care near shopping centres and transport hubs (inattentive pedestrians, people between parked cars or opening doors) and in poor visibility (over half of pedestrian deaths happen in darkness or dusk — rain, fog, night, dawn, dusk all count).",
          "Take extra care when reversing, especially in/out of a driveway — children are especially hard to see; only reverse as far as necessary.",
          "Without a footpath or nature strip, pedestrians may walk on the road facing oncoming traffic, keeping to the far side and not more than 2 abreast unless overtaking — the same applies to mobility scooter/motorised wheelchair users.",
          "Skateboards, foot scooters and rollerblades can use roads with a 50km/h limit and no dividing line, during daylight only; on footpaths they keep left and give way to pedestrians, and use the bicycle section (out of bikes' way) on shared paths. Motorised versions are private-land only.",
          "Mobility scooters and motorised wheelchairs follow pedestrian rules and must not exceed 10km/h to share footpaths safely — take particular care for them entering/leaving a driveway."
        ]
      },
      {
        "title": "Bicycle riders",
        "page": 75,
        "bullets": [
          "Bicycle riders mostly follow the same road rules as drivers, plus extra rules (e.g. an approved helmet) — they're vulnerable and unprotected in a crash, so it's your responsibility to help keep them safe.",
          "Keep a lookout: bikes are harder to see, especially at dawn, dusk and night, and often ride at the far left of the lane — check your blind spots before turning left or changing lanes. Never underestimate their speed; in slow traffic they can match or beat a car.",
          "Riders may legally overtake on the left of vehicles, ride left of the edge line, use bus/tram/transit/truck lanes (but not bus-only lanes or tramways), and use motorways/freeways unless signed otherwise.",
          "They must use a bike lane where one exists; otherwise they can ride on the road, including in the middle of a lane (e.g. to avoid rough edges or gravel) — be ready to slow and give them room. They may ride two abreast within 1.5m of each other.",
          "Overtaking distance: at least 1m if the speed limit is 60km/h or less, 1.5m if it's more. You may cross single or double white lines to pass a bike if you have a clear view of oncoming traffic and it's safe.",
          "At intersections and roundabouts, watch for riders before turning — they may do a hook turn (using the left lane) to turn right unless signed otherwise, and must give way to vehicles leaving the intersection. Vehicles must not enter a bicycle storage area at a red light.",
          "Always check your mirrors before opening a door — you must not open it into a bicycle's path."
        ]
      },
      {
        "title": "Motorcycle riders",
        "page": 77,
        "bullets": [
          "Motorcycle riders mostly follow the same rules as other drivers, plus extra rules (e.g. an approved helmet) — they're about 25 times more likely to be killed per kilometre travelled, being harder to see, less stable and unprotected by a car body. Most at risk on busy city roads (intersections, lane changes) and on country roads (bends).",
          "Keep a lookout: motorcycles are smaller and can hide behind a truck or car — check mirrors and blind spots (shoulder check) especially before merging, changing lanes or turning at intersections.",
          "Lane filtering (riding slowly between same-direction traffic) is only legal for a full motorcycle licence holder, under 30km/h, in stopped or slow traffic, when it's safe — never next to kerbs/parked cars or in school zones.",
          "Overtake a motorcycle with as much space as you'd give a car, and never drive alongside one in the same lane — they're entitled to a full-width lane. They may ride two abreast within 1.5m of each other.",
          "Keep a safe distance — riders may need to dodge debris, oil or poor road surface, and may need extra time to stop."
        ]
      },
      {
        "title": "Horse riders",
        "page": 79,
        "bullets": [
          "Horse riders and horse-drawn vehicles have the same rights and responsibilities as other road users, plus some special rules.",
          "Can ride on any road unless signed otherwise, two abreast within 1.5m of each other — more than two abreast only when overtaking or droving stock.",
          "Horses can be unpredictable: slow down and leave plenty of room passing a ridden/led horse or horse-drawn vehicle, stop if the rider is struggling, and never sound your horn or rev your engine near a horse."
        ]
      },
      {
        "title": "Trucks and buses",
        "page": 80,
        "figures": [
          { "src": "images-handbook/truck-blind-spots.jpg", "caption": "Blind spots in front, beside and behind a truck." },
          { "src": "images-handbook/truck-turning-left.jpg", "caption": "A long vehicle can use more than one lane to turn left." }
        ],
        "bullets": [
          "Heavy vehicles cause more serious crashes because of their size, weight and length — everyone needs to take extra care around them.",
          "They can't stop quickly: don't cut in front of one, and give it room to stop; don't pull in front of a bus or truck that's approaching a light turning red.",
          "They have large blind spots at the front, sides and rear — the driver may not see your vehicle, or pedestrians, bikes or motorcycles nearby, so take care driving next to or behind them.",
          "They may need more than one lane to turn — give them room and never put your vehicle in the path of a turning heavy vehicle (crush risk); wait behind until the turn is complete.",
          "Must not overtake a bus showing \"40 when lights flash\" at more than 40km/h while its lights are flashing (children boarding or alighting).",
          "Oversize vehicles move slowly and can take more than one lane, sometimes escorted by pilot vehicles (yellow flashing lights, \"Oversize load ahead\" sign) or police. Approaching one: slow down, keep left of the centre line, and be ready to move further left if needed."
        ]
      }
    ]
  },
  {
    "id": "stopping-giving-way",
    "title": "Stopping, giving way and turning",
    "page": 82,
    "sections": [
      {
        "title": "Stop signs and stop lines",
        "page": 82,
        "figures": [
          { "src": "images-handbook/stop-sign-types.jpg", "caption": "Stop sign at an intersection, one held by a traffic controller, one for a broken traffic light, and \"Stop sign ahead\"." }
        ],
        "bullets": [
          "A \"Stop\" sign is a regulatory sign and must be obeyed by law.",
          "At a Stop sign and line: come to a complete stop before the line (as close as possible), and stay stopped until it's safe to go.",
          "At a pedestrian crossing with a Stop sign/line: stop and give way to any pedestrian entering or crossing. At a railway level crossing with a Stop sign/line: stop and give way to a train or tram on, approaching or entering the crossing.",
          "A Stop sign with no line at an intersection: stop before, and as close as possible to, the intersection; elsewhere, stop before/as close as possible to the sign itself.",
          "At other places with a Stop sign or line: stop and give way to any vehicle or pedestrian at or near it, including when entering/leaving a road, turning left or right, or making a U-turn.",
          "Must stop at a Stop sign held by a traffic controller (e.g. roadworks, children's crossing) and stay stopped until they lower it or signal you to go.",
          "Some traffic-light intersections have a Stop sign with three black dots — if the lights are off or flashing yellow, treat it like an ordinary Stop sign.",
          "A \"Stop sign ahead\" sign warns you to slow down and prepare to stop."
        ]
      },
      {
        "title": "Give way signs and give way lines",
        "page": 84,
        "figures": [
          { "src": "images-handbook/give-way-sign-types.jpg", "caption": "A give way sign, and a \"give way sign ahead\" warning sign." }
        ],
        "bullets": [
          "A \"Give way\" sign is a regulatory sign and must be obeyed by law.",
          "At a Give way sign or line (single broken line): slow down and prepare to stop.",
          "Specific give-way rules apply at intersections, narrow bridges/roads and pedestrian crossings; elsewhere, give way to any vehicle or pedestrian at or near the sign or line.",
          "A \"Give way sign ahead\" sign warns you to slow down and prepare to stop."
        ]
      },
      {
        "title": "Traffic lights",
        "page": 85,
        "figures": [
          { "src": "images-handbook/turn-signal-arrows.jpg", "caption": "Red, green and flashing yellow turn arrows, and what each one means for turning traffic." },
          { "src": "images-handbook/left-turn-on-red-sign.jpg", "caption": "You can turn left on a red light after stopping, where this sign is shown." },
          { "src": "images-handbook/turning-right-lights.jpg", "caption": "Only turn right at traffic lights when there's a break in the oncoming traffic." },
          { "src": "images-handbook/bus-signal-b.jpg", "caption": "A white \"B\" signal means only buses can go through the intersection." },
          { "src": "images-handbook/tram-signal-t.jpg", "caption": "A red \"T\" signal means trams must stop at the intersection." },
          { "src": "images-handbook/bicycle-signal-lights.jpg", "caption": "Green and red bicycle crossing lights." },
          { "src": "images-handbook/bicycle-storage-area.jpg", "caption": "A bicycle storage area at traffic lights — vehicles must not enter it while the lights are red." },
          { "src": "images-handbook/pedestrian-signals.jpg", "caption": "Red, flashing red and green pedestrian signals, plus a walk-direction sign and a countdown timer." }
        ],
        "bullets": [
          "Must always obey traffic lights, even with no other traffic around or late at night — the same rules apply to temporary lights at roadworks.",
          "Red = stop as close as possible behind the Stop line. Yellow = stop, unless you can't stop safely before the line (never speed up to beat it, never stop suddenly). Green = go if it's safe.",
          "Turn arrows: red arrow = must not turn (stop until it turns green or disappears); green arrow = you may turn that way (a red light alongside means stop if going any other direction); yellow arrow = stop unless you can't safely; flashing yellow arrow = you may turn but must give way to pedestrians crossing the road you're turning into.",
          "A \"turn left on red\" sign lets you stop at the red, then turn left when clear, giving way to traffic approaching from the right.",
          "Turning right on a green light with no arrow: wait for a gap in oncoming traffic; if the light changes while you're in the intersection, complete the turn as soon as it's safe. No U-turns at traffic lights unless a \"U-turn permitted\" sign is shown.",
          "Special signals: white \"B\" = only buses may go (lights up briefly before the main lights change; red/yellow \"B\" = buses stop); white \"T\" = only trams may go (red/yellow \"T\" = trams stop or prepare to stop); bicycle signals (green = riders go, red = riders stop) — vehicles must never stop in a bicycle storage area.",
          "Pedestrian signals: red = don't start crossing; flashing red = don't start, but finish crossing; green = can start, walk any direction; countdown timers show seconds left. When turning, give way to any pedestrian still crossing even on a flashing red, and always stop for pedestrians at a pelican crossing.",
          "Red-light speed cameras catch both red-light running (crossing the line or entering after red) and speeding at any light phase."
        ]
      },
      {
        "title": "Roundabouts",
        "page": 91,
        "figures": [
          { "src": "images-handbook/roundabout-signs.jpg", "caption": "\"Roundabout ahead\" and \"give way to vehicles on the roundabout\" signs." },
          { "src": "images-handbook/roundabout-turn-left.jpg", "caption": "Turning left at a roundabout." },
          { "src": "images-handbook/roundabout-straight.jpg", "caption": "Going straight ahead at a roundabout." },
          { "src": "images-handbook/roundabout-turn-right.jpg", "caption": "Turning right or making a full turn (U-turn) at a roundabout." },
          { "src": "images-handbook/roundabout-multilane.jpg", "caption": "Using a multi-lane roundabout with arrows marked on the road." },
          { "src": "images-handbook/roundabout-bicycle.jpg", "caption": "A bicycle at a roundabout turning right from the left lane." }
        ],
        "bullets": [
          "Traffic moves one way around a central island; you can turn left or right, go straight ahead, or make a full U-turn.",
          "On approach, slow or stop to give way to all vehicles already on the roundabout — those on your right, and those who've entered from your left or from directly opposite you.",
          "Indicate to show your intention, keep indicating through the turn, indicate left on exit if practical, and stop indicating once clear. Follow road arrows/signs on multi-lane roundabouts.",
          "Turning left: indicate left, use the left lane (unless arrows allow otherwise), give way to vehicles already on the roundabout, keep indicating left through the turn.",
          "Going straight ahead: use any lane not marked for left/right turns only; give way to vehicles already on the roundabout; indicate left on exit if practical.",
          "Turning right or making a full U-turn: indicate right, use the right lane (unless arrows allow otherwise), give way to vehicles already on it, keep indicating right through the turn, then indicate left on exit.",
          "Changing lanes inside a roundabout: plan ahead to avoid it; if you must, indicate and give way to vehicles in the lane you're moving into — only where there's a broken line, never across a continuous one.",
          "Exiting: indicate left if practical (may not be practical on a small single-lane roundabout going straight through), and stop indicating once you've exited.",
          "Pedestrians: you don't have to give way when turning unless there's a marked crossing, but must always avoid a collision.",
          "Bicycles are entitled to a full lane and may use the left lane to turn right on a multi-lane roundabout (must give way to vehicles leaving) — watch for riders stopped in the left lane giving way to exiting traffic."
        ]
      },
      {
        "title": "Intersections",
        "page": 98,
        "figures": [
          { "src": "images-handbook/intersection-stop-signs.jpg", "caption": "Two cars at a Stop sign on opposite sides of an intersection — the car turning right (A) must give way to the car going straight ahead (B)." },
          { "src": "images-handbook/intersection-giveway-signs.jpg", "caption": "Two cars at a Give way sign on opposite sides of an intersection — the car turning right (B) must give way to the car turning left (A)." },
          { "src": "images-handbook/intersection-nosign-1.jpg", "caption": "No signs: the car turning right (A) must give way to the car going straight ahead (B)." },
          { "src": "images-handbook/intersection-nosign-2.jpg", "caption": "No signs: the car turning right (A) must give way to the car turning left (B)." },
          { "src": "images-handbook/intersection-nosign-3.jpg", "caption": "No signs: two cars both turning right at opposite sides can pass in front of each other." },
          { "src": "images-handbook/intersection-turnleft.jpg", "caption": "A car turning left (A) must give way to a car crossing straight through from the right (B)." },
          { "src": "images-handbook/t-intersection-sign.jpg", "caption": "A T-intersection warning sign." },
          { "src": "images-handbook/t-intersection-1.jpg", "caption": "The car turning right from the road ending at a T-intersection (A) must give way to the car going straight ahead on the continuing road (B)." },
          { "src": "images-handbook/t-intersection-2.jpg", "caption": "Where the continuing road bends, the car leaving it (B) must give way to the oncoming car on the continuing road (A)." },
          { "src": "images-handbook/keep-intersection-clear.jpg", "caption": "Keep the intersection clear at all times — don't enter unless there's room on the far side." }
        ],
        "bullets": [
          "About half of all NSW crashes happen at intersections — approach at a speed that lets you stop and give way. Over half of motorcycle-vehicle crashes happen there too.",
          "Rules depend on the intersection type: Stop signs, Give way signs, no signs or lines, traffic lights, or a roundabout. Always follow police or traffic controller hand signals over the signs.",
          "At a Stop sign/line: give way to all vehicles driving in, entering or approaching, except an oncoming vehicle also at a Stop sign/line turning right, an oncoming vehicle at a Give way sign/line turning right, a vehicle turning left via a slip lane, or a vehicle doing a U-turn — plus pedestrians crossing the road you're turning into.",
          "At a Give way sign/line: the same give-way logic and exceptions apply as at a Stop sign, plus pedestrians when turning.",
          "No signs, lights or roundabout: give way to any vehicle whose path you cross when turning, and to pedestrians crossing the road you're turning into; don't force a dangerous situation if another driver fails to give way.",
          "Turning right with no signs: give way to a vehicle approaching from the right, an oncoming vehicle going straight or turning left, and pedestrians. Two vehicles both turning right from opposite sides may turn simultaneously and pass in front of each other.",
          "Turning left with no signs: give way to vehicles on your right and to pedestrians crossing the road you're turning into.",
          "T-intersections: traffic on the road that ends must give way to all traffic on the continuing road (unless signed otherwise) — including when turning right, giving way to oncoming through-traffic or left-turners on the continuing road, even where that road curves.",
          "Keeping intersections clear: don't enter unless there's room for your vehicle on the far side (applies to all intersections, level crossings and pedestrian crossings); never stop in a \"Keep clear\" marked area."
        ]
      },
      {
        "title": "Turning left and right",
        "page": 106,
        "figures": [
          { "src": "images-handbook/turn-plan-ahead.jpg", "caption": "Turning right then immediately left: turn right from the left lane." },
          { "src": "images-handbook/no-left-turn-signs.jpg", "caption": "'No left turn' signs (regulatory and electronic): you must not turn left." },
          { "src": "images-handbook/left-lane-must-turn-left.jpg", "caption": "'Left lane must turn left' sign: if you're in the left lane, you must turn left." },
          { "src": "images-handbook/left-only-sign.jpg", "caption": "'Left only' sign: you must turn left." },
          { "src": "images-handbook/turning-right-dividing-lines.jpg", "caption": "You can cross a single or double dividing line when entering or leaving a road." },
          { "src": "images-handbook/no-right-turn-signs.jpg", "caption": "'No right turn' signs (regulatory and electronic): you must not turn right or make a U-turn." },
          { "src": "images-handbook/right-lane-must-turn-right.jpg", "caption": "'Right lane must turn right' sign: if you're in the right lane, you must turn right." },
          { "src": "images-handbook/right-only-sign.jpg", "caption": "'Right only' sign: you must turn right." },
          { "src": "images-handbook/long-vehicle-turning.jpg", "caption": "Stay behind heavy vehicles that are turning — don't put your vehicle in their path." },
          { "src": "images-handbook/no-entry-sign.jpg", "caption": "'No entry' sign: you must not drive beyond the sign." },
          { "src": "images-handbook/no-bicycles-sign.jpg", "caption": "'No bicycles' sign: bicycle riders must not ride beyond the sign." },
          { "src": "images-handbook/right-turn-from-left-sign.jpg", "caption": "'Right turn from left only' sign, marking a bicycle hook-turn intersection." },
          { "src": "images-handbook/hook-turn-diagram.jpg", "caption": "A bicycle hook turn: wait at the far left (A), keep left while turning (B), turn when it's safe (C)." }
        ],
        "bullets": [
          "Always check both directions before turning and give way to pedestrians crossing the road you're turning into; obey turn-restriction regulatory signs.",
          "Plan turns early to be in the right lane in time to indicate; you may drive on, across or outside edge lines for up to 100m when turning; follow lane lines, or stay in the same lane if there are none.",
          "Turning left: indicate left, move close to the left side, keep to the left side of the road you're entering, use a slip lane if there is one; on a multi-lane road, turn only from the left lane or one arrowed left. \"No left turn\" = don't; \"Left lane must turn left\" / \"Left only\" = you must, from that lane.",
          "Turning right: indicate right, follow lane markings/arrows, move close to the centre dividing line on your original road, stay in the same relative lane as you cross; on a multi-lane road, turn only from the right lane or one arrowed right. You may cross any type of dividing line to enter/leave a road, driveway or car park; keep your wheels straight beforehand so you don't block oncoming traffic. \"No right turn\" = no right turn or U-turn; \"Right lane must turn right\" / \"Right only\" = you must, from that lane.",
          "Long or oversize vehicles with a \"Do not overtake turning vehicle\" sign may use more than one lane to turn — stay behind, never alongside, until they've completed the turn.",
          "\"No entry\" = don't turn into or enter that road; \"No bicycles\" = riders must not go past that point.",
          "Bicycles may hook-turn right (from the far left, staying left through the intersection, clear of crossings, giving way to traffic from their right, waiting at the light if there is one) — drivers must take care to avoid them; a hook turn needs no hand signal (an ordinary right turn does)."
        ]
      },
      {
        "title": "U-turns and three-point turns",
        "page": 112,
        "figures": [
          { "src": "images-handbook/u-turn-signs.jpg", "caption": "'No U-turn' signs (regulatory and electronic) and the 'U-turn permitted' sign for use at traffic lights." },
          { "src": "images-handbook/three-point-turn.jpg", "caption": "A three-point turn usually involves at least three turns." }
        ],
        "bullets": [
          "Take extra care: indicate and check mirrors/blind spots for traffic from every direction before turning, then check again, indicate, and pull out only when clear.",
          "Must not U-turn: at a no-signal intersection with a \"No U-turn\" sign; at a signalled intersection unless a \"U-turn permitted\" sign is shown; across a single or double continuous dividing line, or where the continuous line of a double line is closer to you; on motorways or freeways.",
          "When U-turning: have a clear view of approaching traffic, start from the marked lane nearest the centre (or left of centre if unmarked), turn without obstructing traffic, give way to vehicles and pedestrians, and indicate before starting.",
          "A three-point turn suits a road too narrow for a U-turn (typically 3 manoeuvres) — it takes longer, so on a busy road it's safer to drive around the block or use a roundabout instead."
        ]
      },
      {
        "title": "Indicating",
        "page": 114,
        "figures": [
          { "src": "images-handbook/hand-signals.jpg", "caption": "Hand signals: bend your arm at the elbow to signal stopping, or extend it straight out to signal turning right." }
        ],
        "bullets": [
          "Indicating warns others you intend to move left or right — plan early so you're in the right lane with time to signal, and still check mirrors and blind spots.",
          "Must indicate before: turning right or left, moving right or left, a U-turn or three-point turn, changing lanes (incl. overtaking), merging, pulling over to stop or park, pulling out from the roadside, turning at a roundabout, going straight at a T-intersection where the continuing road curves, and (if practical) leaving a roundabout.",
          "Turn the indicator off after each manoeuvre; before pulling out from the roadside or a parking spot, indicate for at least 5 seconds first.",
          "If your indicators aren't fitted, working or clearly visible (risking a Defect Notice), you must hand-signal instead — arm out with elbow bent for stopping, arm straight out for a right turn. Bicycle riders must hand-signal a right turn (but not for a hook turn)."
        ]
      },
      {
        "title": "Pedestrian crossings",
        "page": 116,
        "figures": [
          { "src": "images-handbook/pedestrian-crossing-sign.jpg", "caption": "'Pedestrian crossing' sign, shown at the crossing." },
          { "src": "images-handbook/pedestrian-crossing-ahead-sign.jpg", "caption": "'Pedestrian crossing ahead' warning sign." },
          { "src": "images-handbook/zigzag-crossing.jpg", "caption": "A pedestrian crossing with zig-zag approach lines." },
          { "src": "images-handbook/childrens-crossing-flag.jpg", "caption": "A red-orange flag marks a children's crossing when it's operating." },
          { "src": "images-handbook/children-crossing-ahead-sign.jpg", "caption": "'Children may be crossing ahead' warning sign." },
          { "src": "images-handbook/pedestrians-crossing-ahead-sign.jpg", "caption": "'Pedestrians may be crossing ahead' warning sign, used near pedestrian refuges and high-activity areas." }
        ],
        "bullets": [
          "Must give way to pedestrians crossing at any pedestrian crossing; approach at a speed that lets you stop, and give extra time to children or elderly pedestrians.",
          "Zebra crossings: white parallel stripes, sometimes a yellow \"legs\" sign; zig-zag approach lines improve visibility. At the crossing: give way to crossing pedestrians, don't overtake a vehicle stopped/stopping for them, and don't drive onto it if the far side is blocked. Still stop at a nearby Stop sign even if you've just stopped for the crossing.",
          "Pelican crossings are pedestrian-triggered traffic lights, usually with the same sequence as ordinary lights; some flash yellow after red, letting you proceed if no pedestrians are crossing.",
          "Children's crossings are part-time (usually school zone hours), marked by red-orange flags when operating — slow and stop before the stripes/Stop line and remain stopped until every pedestrian has cleared. No flags means it's not currently operating as one.",
          "School Crossing Supervisors: stop when a supervisor shows a \"Stop – children crossing\" sign, and stay stopped until pedestrians have cleared and the sign is lowered.",
          "High pedestrian activity areas (shopping strips, near schools/parks/pools) may have a lower limit and warning signs — slow down when you see them.",
          "Pedestrian refuges (a median island for crossing in two stages) are signed — slow down and watch for pedestrians."
        ]
      },
      {
        "title": "Railway level crossings",
        "page": 120,
        "figures": [
          { "src": "images-handbook/level-crossing-sign.jpg", "caption": "Level crossing sign, placed at the crossing itself." },
          { "src": "images-handbook/level-crossing-warning-signs.jpg", "caption": "Level crossing warning signs: flashing lights ahead, level crossing ahead, and level crossing on a side road." },
          { "src": "images-handbook/level-crossing-stop-signals.jpg", "caption": "Stop at a level crossing for a Stop sign, flashing red lights, or a closing/closed boom gate." },
          { "src": "images-handbook/level-crossing-giveway.jpg", "caption": "'Give way' at a level crossing: slow down, look both ways, and stop if a train is coming." }
        ],
        "bullets": [
          "Trains are fast, heavy and can't stop quickly — always slow down, look and listen approaching a crossing; never drive onto one while a train is approaching or if the far side is blocked.",
          "Never block a crossing — know your vehicle's length and only cross if you can clear the tracks completely. Never stop or park on a crossing or within 20m of either side of it.",
          "Must stop when: there's a Stop sign, a gate or boom gate is down, red lights are flashing, or a railway employee signals you to stop. At a Give way sign, slow, look both ways, and stop only if a train is coming.",
          "Don't proceed until the lights stop flashing and gates are fully open — and if you stopped at a Stop or Give way sign, still wait until it's genuinely safe.",
          "Crossings without signals (common in the country) need extra care: slow down, look and listen both ways on any warning sign, and after one train passes, check for a second before crossing."
        ]
      },
      {
        "title": "Narrow bridges and roads",
        "page": 122,
        "figures": [
          { "src": "images-handbook/narrow-bridge-giveway.jpg", "caption": "Car B must give way to Car A on a bridge." },
          { "src": "images-handbook/narrow-bridge-road-signs.jpg", "caption": "'Narrow bridge', 'Narrow bridge ahead' and 'Road narrows ahead' warning signs." }
        ],
        "bullets": [
          "At a narrow bridge or road with a Give way sign, slow down, prepare to stop, and give way to oncoming vehicles — even without a sign, you should still give way.",
          "Watch for oversize vehicles that may drive down the centre of a bridge, taking more than one lane — be ready to stop and wait for them to clear it."
        ]
      },
      {
        "title": "One-way streets",
        "page": 123,
        "figures": [
          { "src": "images-handbook/one-way-two-way-signs.jpg", "caption": "'One way' sign (travel only in the arrow's direction) and 'Two way' sign (lanes travelling in opposite directions)." },
          { "src": "images-handbook/one-way-right-turn.jpg", "caption": "Keep to the far right when turning right from a one-way street." }
        ],
        "bullets": [
          "\"One way\" and \"Two way\" signs are regulatory and must be obeyed.",
          "A \"One way\" sign means you may only drive in the arrow's direction; turning right from a one-way street, turn from the far right side of the road.",
          "A \"Two way\" sign means the road carries traffic in both directions."
        ]
      }
    ]
  },
  {
    "id": "overtaking-merging",
    "title": "Overtaking and merging",
    "page": 124,
    "sections": [
      {
        "title": "Overtaking",
        "page": 124,
        "figures": [
          { "src": "images-handbook/overtaking-continuous-lines.png", "caption": "You must not cross a single continuous line, or double continuous lines, to overtake." },
          { "src": "images-handbook/overtake-broken-lines.jpg", "caption": "You can cross a single broken line, or a double line with the broken line closer to you, to overtake if the road ahead is clear." },
          { "src": "images-handbook/no-lines-overtake-sign.jpg", "caption": "'No lines — do not overtake unless safe' sign, shown where no lines are marked on the road." },
          { "src": "images-handbook/keep-left-unless-overtaking-sign.jpg", "caption": "'Keep left unless overtaking' sign." },
          { "src": "images-handbook/long-oversize-vehicle-signs.jpg", "caption": "'Long vehicle' and 'Oversize' signs, warning that the vehicle is longer, wider or higher than normal." },
          { "src": "images-handbook/do-not-overtake-turning-vehicle-sign.jpg", "caption": "'Do not overtake turning vehicle' sign, used on long vehicles that may need more than one lane to turn." },
          { "src": "images-handbook/long-vehicle-no-overtake-left.jpg", "caption": "Do not overtake to the left of a long vehicle which is turning left." },
          { "src": "images-handbook/long-vehicle-overtake-left-multilane.jpg", "caption": "You can overtake a long vehicle on the left when it's safe and you're on a multi-lane road." },
          { "src": "images-handbook/overtake-motorcycle.jpg", "caption": "Give motorcycles plenty of room when overtaking." },
          { "src": "images-handbook/overtake-bicycle.jpg", "caption": "You can cross double dividing lines when overtaking a bicycle." },
          { "src": "images-handbook/no-overtaking-passing-sign.jpg", "caption": "'No overtaking or passing' sign, used on bridges." }
        ],
        "bullets": [
          "Take care and accurately judge the space needed — if in doubt, wait. Always check mirrors and blind spots first; motorcycles and bicycles can be hidden behind other vehicles.",
          "Must not overtake: across a continuous dividing line (single or double); without a clear view of approaching traffic (e.g. before a crest or curve, or limited visibility); when a vehicle is stopping or stopped at a pedestrian crossing, intersection or railway crossing; where the road narrows.",
          "Before overtaking: check the road ahead is clear with enough distance, check side streets/other lanes for anything that might enter your space, check mirrors and blind spots, and indicate.",
          "While overtaking, stay under the speed limit; before returning to your lane, make sure you can see the passed vehicle in your mirror, and indicate.",
          "Being overtaken: don't speed up while the other vehicle is crossing the dividing line — stay in your lane, keep left, and give them room to pass and return.",
          "Overtaking on the left is only allowed when the vehicle ahead is waiting to turn right/U-turn from the centre of the road, is stopped, or you're on a multi-lane road. To pass a vehicle turning right or U-turning from the centre, you may use the left lane, drive on/across/outside edge lines for up to 100m, use a bus/transit/truck lane for up to 100m, or a bicycle/tram lane for up to 50m.",
          "\"Keep left unless overtaking\" applies on roads with that sign or over 80km/h — don't drive in the right lane unless overtaking, turning right, U-turning, avoiding an obstruction, in slow/stopped left-lane traffic, driving a bus/truck where the right lane is bus/truck-only, overtaking a slow left-turner, or a \"left lane must turn left\"/left-arrow signal applies and you're not turning left.",
          "Overtaking long or oversize vehicles needs extra care and time. A \"Do not overtake turning vehicle\" sign means: don't overtake on the left while it's turning left; don't overtake on the right while it's turning right unless clearly safe; overtaking on the left is otherwise banned unless you're on a multi-lane road, or the vehicle is stationary or turning right/U-turning, and it's safe.",
          "Overtake motorcycles with the same rules and space as a car.",
          "Overtake bicycles with at least 1m clearance (60km/h or less) or 1.5m (over 60km/h); you may cross the centre, straddle any dividing line, or use painted islands/median strips if needed, safe and with a clear view ahead. Bicycles may overtake a vehicle on the left.",
          "A \"No overtaking or passing\" sign on a bridge means you must give way to oncoming traffic and must not overtake vehicles travelling the same direction."
        ]
      },
      {
        "title": "Merging and changing lanes",
        "page": 132,
        "figures": [
          { "src": "images-handbook/lane-ends-merge.jpg", "caption": "When Car A crosses a broken line to change lanes because its lane is ending, it must give way to Car B already in that lane." },
          { "src": "images-handbook/give-way-to-buses-sign.jpg", "caption": "'Give way to buses' sign, shown when driving in the left lane." },
          { "src": "images-handbook/zipper-merge.jpg", "caption": "A zipper merge: when two lanes reduce to one, the trailing car (B) gives way to the car ahead (A)." }
        ],
        "bullets": [
          "Always check mirrors and blind spots (watch for motorcycles and bicycles) and indicate before changing or merging lanes; turn the indicator off afterwards.",
          "Changing lanes: give way to vehicles already in the lane you're moving into.",
          "When your lane ends and you cross a broken line into another (e.g. joining a motorway), give way to vehicles already in that lane — slow down and find a safe gap; if a vehicle is merging into your lane, leave it room.",
          "Must give way to a bus displaying \"Give way to buses\" if you're in the left lane and the bus is stopped or moving slowly at the far left, indicating right, and about to pull out in front of you.",
          "Zipper merge: where lanes reduce with no road markings left, give way to the vehicle ahead of you."
        ]
      },
      {
        "title": "Motorways and freeways",
        "page": 134,
        "figures": [
          { "src": "images-handbook/start-motorway-signs.jpg", "caption": "These signs show the start of a motorway." },
          { "src": "images-handbook/ramp-metering-sign.jpg", "caption": "Sign at ramp metering signals on a motorway." },
          { "src": "images-handbook/ramp-metering-photo.jpg", "caption": "You must stop at a red ramp metering signal on a motorway." },
          { "src": "images-handbook/variable-speed-limit-signs.jpg", "caption": "Overhead variable speed limit signs — you must not drive over the speed limit shown." },
          { "src": "images-handbook/lane-merge-signals.jpg", "caption": "Left and right lane-merge signals: change lanes in the direction of the arrow." },
          { "src": "images-handbook/closed-lane-signal.jpg", "caption": "Closed-lane signal on a motorway: you must not drive in this lane." },
          { "src": "images-handbook/lane-exit-signals.jpg", "caption": "Left and right lane-exit signals: the road ahead is closed, and the next exit is a detour." },
          { "src": "images-handbook/motorway-lane-signals-photo.jpg", "caption": "Left lane-merge and closed-lane signals in use — you must not drive in the right lane, and must change lanes left if you're in the second lane from the right." },
          { "src": "images-handbook/variable-message-sign.jpg", "caption": "Variable message sign showing travel times." },
          { "src": "images-handbook/end-motorway-signs.jpg", "caption": "These signs indicate the end of a motorway." },
          { "src": "images-handbook/exit-motorway-sign.jpg", "caption": "Exit sign from a motorway." },
          { "src": "images-handbook/motorway-exit-ahead-sign.jpg", "caption": "An exit to the motorway is coming." },
          { "src": "images-handbook/toll-road-sign.jpg", "caption": "Toll road sign — you can pay the toll by electronic tag or electronic pass." }
        ],
        "bullets": [
          "A motorway/freeway/expressway is a high-speed road with more than one lane each direction; bicycles may use it unless signed otherwise. Check fuel, oil, water and tyre pressure before a long freeway trip.",
          "Joining: your lane typically ends and you cross a broken line onto the motorway — give way to traffic already there; slow down, check mirrors/blind spots, and find a safe gap.",
          "Ramp metering signals are quick-change lights managing motorway entry — green stays on just long enough for one vehicle per lane; stop behind the line on red.",
          "On a motorway with a limit over 80km/h and 2+ lanes, don't drive in the right lane unless overtaking, avoiding an obstruction, all lanes are congested, or a sign allows it. Never U-turn or reverse on a motorway. Keep a safe stopping distance, and take extra care around vehicles joining, since it changes your crash avoidance space.",
          "Overhead signals: variable speed limit signs (obey the shown limit); lane-merge signals (white arrow = change lanes that way, hazard ahead); closed-lane signals (red cross = don't drive in that lane); lane-exit signals (arrow pointing up-left/right = road ahead closed, next exit is the detour, change lanes that way).",
          "Variable message signs show travel times and conditions such as ramp closures and road conditions.",
          "Must not stop or park on a motorway except in a genuine emergency (crash avoidance, breakdown) — move to the emergency stopping lane if you must stop.",
          "Leaving: move to the exit lane early, reduce speed, indicate before exiting; if you miss your exit, continue to the next one.",
          "Route numbering: \"M\" = motorways of national significance (e.g. M2); \"A\" = routes of national significance; \"B\" = routes of state significance.",
          "Toll roads are signed — pay via an electronic tag or pass, or you'll be sent a toll notice."
        ]
      }
    ]
  },
  {
    "id": "road-lanes-lines",
    "title": "Road lanes, lines and markings",
    "page": 140,
    "sections": [
      {
        "title": "Road lines and markings",
        "page": 140,
        "figures": [
          { "src": "images-handbook/single-broken-dividing-line.jpg", "caption": "Single broken dividing line." },
          { "src": "images-handbook/single-continuous-dividing-line.jpg", "caption": "Single continuous dividing line." },
          { "src": "images-handbook/double-continuous-dividing-lines.jpg", "caption": "Double continuous dividing lines." },
          { "src": "images-handbook/double-line-broken-closer.jpg", "caption": "Double line with a broken line closer to Car A." },
          { "src": "images-handbook/double-line-continuous-closer.jpg", "caption": "Double line with a continuous line closer to Car A." },
          { "src": "images-handbook/wide-centrelines.jpg", "caption": "Wide centrelines, up to 1.5m apart, follow the same rules as other dividing lines." },
          { "src": "images-handbook/continuous-edge-line-photo.jpg", "caption": "A continuous edge line marking the edge of the road." },
          { "src": "images-handbook/clearway-kerb-lines.jpg", "caption": "Broken yellow kerb lines mark a clearway — no stopping during the signed hours except in an emergency." },
          { "src": "images-handbook/no-stopping-kerb-lines.jpg", "caption": "Continuous yellow kerb lines mean no stopping at any time except in an emergency." },
          { "src": "images-handbook/painted-island-double-lines.jpg", "caption": "You must not drive or stop on a painted island that's surrounded by double lines." },
          { "src": "images-handbook/painted-island-turning-lane.jpg", "caption": "A car entering a turning lane from a painted island (Car B) must give way to the car already in the turning lane (Car A)." },
          { "src": "images-handbook/s-lane.jpg", "caption": "You must not cross a continuous line to turn into an S-lane." },
          { "src": "images-handbook/painted-arrows-intersection.jpg", "caption": "Follow the painted arrows and stay in your lane when turning." },
          { "src": "images-handbook/keep-clear-marking.jpg", "caption": "Area with 'Keep clear' marked on the road." },
          { "src": "images-handbook/dragons-teeth-photo.jpg", "caption": "Dragon's teeth road markings in a school zone." }
        ],
        "bullets": [
          "Keep to the middle of your lane; keep left where there are no lane markings or approaching the top of a hill; watch for lanes dedicated to bicycles, buses, trams and trucks.",
          "White dividing lines separate opposite-direction traffic — always drive to their left. You may cross one to avoid an obstruction if you have a clear view, it's necessary and reasonable, and it's safe.",
          "Single broken line: cross to overtake, U-turn, enter/leave the road, or angle-park opposite (without a U-turn). Single continuous line: cross only to enter/leave the road or angle-park opposite — no overtaking or U-turning.",
          "Double continuous lines: cross only to enter/leave the road by the shortest route. Double line with the broken side nearer you: cross for overtaking, a U-turn, entering/leaving the road, or angle-parking opposite. Double line with the continuous side nearer you: cross only to enter/leave the road or angle-park opposite.",
          "Wide centrelines (up to 1.5m apart) reduce head-on crash risk but follow the same rules as any other dividing line.",
          "Edge lines (broken or continuous) mark the road's edge, keeping vehicles off soft shoulders and out of breakdown lanes. Rumble strips vibrate and make noise to warn you're leaving your lane — slow down and ease back on if you hit one.",
          "Yellow kerb lines show stopping restrictions: broken = clearway (no stopping during the signed hours except emergencies); continuous = no stopping at any time except emergencies.",
          "Painted islands (striped, bounded by lines): you may drive on one bounded by single lines for up to 50m to enter/leave the road, enter an immediately-following turn lane (giving way to vehicles already in or entering it), or angle-park opposite. Never drive on one bounded by double lines, one separating same-direction lanes, or one separating the road from a slip lane.",
          "Traffic islands (raised) must not be driven on unless designed for it. Median strips (raised, painted or grassed) must not be stopped or parked on unless signed as a parking area.",
          "S-lanes create a right-turn lane via an S-shaped merge, divided by a continuous line — don't cross it to turn into the S-lane.",
          "Painted arrows show a lane's permitted direction(s) — you may go any way shown, but must still indicate, and stay in your lane through marked turn lines.",
          "\"Keep clear\" markings stop vehicles blocking access points (hospitals, fire stations, car parks) or intersections/side roads — never stop in one.",
          "Dragon's teeth (painted triangle pairs) mark school zones and flag the 40km/h limit there."
        ]
      },
      {
        "title": "Slip lanes",
        "page": 148,
        "figures": [
          { "src": "images-handbook/slip-lane-giveway.jpg", "caption": "When a car is turning left in a slip lane (Car A), they must give way to vehicles turning right into the road they're turning into." }
        ],
        "bullets": [
          "Slip lanes improve flow and safety for left turns, marked by a painted or traffic island — you must use one where it's provided.",
          "Turning left in a slip lane (with or without a Give way sign), give way to: vehicles on the road you're turning into, oncoming vehicles turning right into that same road, and any other vehicle or pedestrian in the slip lane.",
          "Must not stop in a slip lane unless a parking sign allows it."
        ]
      },
      {
        "title": "Median turning lanes",
        "page": 149,
        "figures": [
          { "src": "images-handbook/median-turning-lane-sign.jpg", "caption": "'Median turning lane' sign." },
          { "src": "images-handbook/median-turning-lane-diagram.jpg", "caption": "You can enter and share a median turning lane with an oncoming vehicle." }
        ],
        "bullets": [
          "A shared centre lane for vehicles from either direction turning right into a side road, driveway or property access — marked by signs or arrows.",
          "You may enter even if an oncoming vehicle is already using it, but must give way to it, slowing down and stopping if necessary."
        ]
      },
      {
        "title": "Bicycle lanes",
        "page": 149,
        "figures": [
          { "src": "images-handbook/bicycle-lane-sign.jpg", "caption": "'Bicycle lane' sign." },
          { "src": "images-handbook/bicycle-lane-end-sign.jpg", "caption": "'Bicycle lane end' sign." },
          { "src": "images-handbook/bicycle-path-only-sign.jpg", "caption": "'Bicycle path only' sign." },
          { "src": "images-handbook/bicycle-path-end-sign.jpg", "caption": "'Bicycle path only end' sign." }
        ],
        "bullets": [
          "Marked by a bicycle symbol plus \"Lane\" sign/markings; riders must use one where provided unless it's impractical. It ends at a \"Lane end\" sign/marking, at most intersections, or a dead end.",
          "You may drive in a bike lane to avoid an obstruction, or for up to 50m to enter/leave the road, overtake a vehicle turning right or U-turning, or enter a lane from the roadside — take extra care for riders.",
          "Bicycle paths differ from lanes: optional for riders, run alongside roads or off-road, marked by a \"Bicycle path\" sign; also usable by skateboard/scooter/rollerblade riders, wheelchair or mobility scooter users, and postal motorcyclists. Other vehicles may cross one only when entering/leaving a road or where signed, and must give way to everyone else on it."
        ]
      },
      {
        "title": "Bus lanes",
        "page": 151,
        "figures": [
          { "src": "images-handbook/bus-lane-sign.jpg", "caption": "'Bus lane' sign." },
          { "src": "images-handbook/buses-only-lane-sign.jpg", "caption": "'Buses only lane' sign." },
          { "src": "images-handbook/t-way-lane-sign.jpg", "caption": "'T-way lane' sign, for authorised buses and service vehicles only." }
        ],
        "bullets": [
          "Usable by buses, taxis (not rideshare), HC-plated hire cars, special-purpose emergency-response vehicles, bicycles and motorcycles.",
          "No stopping in a bus lane except buses at a stop, or taxis/chauffeured hire cars picking up or dropping off passengers.",
          "Other vehicles may enter to avoid an obstruction, if signed, or for up to 100m to enter/leave the road, overtake a right-turner or U-turner, or enter from the roadside.",
          "\"Bus only\"/\"Buses only\" lanes are for buses alone. T-way lanes are for authorised buses and service vehicles only — never drive in one."
        ]
      },
      {
        "title": "Tramways and tram lanes",
        "page": 152,
        "figures": [
          { "src": "images-handbook/tramway-only-sign.jpg", "caption": "'Tramway' sign." },
          { "src": "images-handbook/tram-lane-sign.jpg", "caption": "'Tram lane' sign." }
        ],
        "bullets": [
          "Tramways: only trams, tram recovery vehicles, some buses and special-purpose vehicles — marked by a \"Tramway\" sign and double continuous yellow lines, or a physical divider. Others may enter only to avoid an obstruction, and only if it won't put them in the path of an approaching tram or bus.",
          "Tram lanes: only trams, tram recovery vehicles and some buses — others may enter to avoid an obstruction, if signed, or for up to 50m to enter/leave the road, overtake a right-turner or U-turner, or enter from the roadside. Never move into the path of a moving tram."
        ]
      },
      {
        "title": "Truck lanes",
        "page": 153,
        "figures": [
          { "src": "images-handbook/truck-lane-sign.jpg", "caption": "'Truck lane' sign." },
          { "src": "images-handbook/trucks-use-left-lane-sign.jpg", "caption": "'Trucks must use left lane' sign." }
        ],
        "bullets": [
          "For vehicles over 4.5 tonnes GVM, plus bicycles, special-purpose vehicles, and Transport for NSW survey vehicles.",
          "Other vehicles may enter to avoid an obstruction, if signed, or for up to 100m to enter/leave the road, overtake a right-turner or U-turner, or enter from the roadside.",
          "\"Trucks must use left lane\" (or \"Buses\"/\"Trucks & buses\") forces trucks into the left lane until told otherwise — any vehicle may still use that lane."
        ]
      },
      {
        "title": "Transit lanes",
        "page": 154,
        "figures": [
          { "src": "images-handbook/t2-transit-lane-sign.jpg", "caption": "'T2 transit lane' sign — only vehicles with two or more people during the specified day or time." },
          { "src": "images-handbook/t3-transit-lane-sign.jpg", "caption": "'T3 transit lane' sign — only vehicles with three or more people during the specified day or time." }
        ],
        "bullets": [
          "Usable regardless of occupancy by public buses/minibuses, taxis, HC-plated hire cars, motorcycles, bicycles, and emergency/special-purpose/breakdown vehicles.",
          "Other vehicles may only use it during the signed times/days if they carry the minimum occupancy shown (2+ or 3+ people including the driver).",
          "Under-occupied vehicles may still enter for up to 100m to enter/leave the road, overtake a right-turner or U-turner, or enter from the roadside — or at any time to avoid an obstruction or where signed."
        ]
      },
      {
        "title": "Shared paths",
        "page": 155,
        "figures": [
          { "src": "images-handbook/shared-path-sign.jpg", "caption": "'Shared path' sign, for bicycle riders and pedestrians." }
        ],
        "bullets": [
          "Only for bicycle riders and pedestrians.",
          "Bicycle riders must keep left (unless impractical), give way to pedestrians (slowing or stopping if needed), and keep left of oncoming riders.",
          "Skateboard, foot scooter and rollerblade riders must also keep left (unless impractical) and give way to all pedestrians."
        ]
      },
      {
        "title": "Keep left or right",
        "page": 155,
        "figures": [
          { "src": "images-handbook/keep-left-sign.jpg", "caption": "'Keep left' sign: drive to the left of the sign." },
          { "src": "images-handbook/keep-right-sign.jpg", "caption": "'Keep right' sign: drive to the right of the sign." }
        ],
        "bullets": [
          "\"Keep left\" and \"Keep right\" are regulatory signs and must be obeyed by law — you must stay on the indicated side of the sign."
        ]
      }
    ]
  },
  {
    "id": "parking",
    "title": "Parking",
    "page": 156,
    "sections": [
      {
        "title": "No parking",
        "page": 156,
        "figures": [
          { "src": "images-handbook/no-parking-sign.png", "caption": "A \"No parking\" sign — you can stop briefly to drop off/pick up or load, but not park." },
          { "src": "images-handbook/bus-stop-distance.png", "caption": "No parking within 20m before or 10m after a bus stop." },
          { "src": "images-handbook/parking-intersections.jpg", "caption": "No parking within 10m of an intersection without traffic lights (or 20m with lights), unless signed or it's a T-intersection." },
          { "src": "images-handbook/parking-crossings.jpg", "caption": "No parking within 20m before or 10m after a children's or pedestrian crossing." },
          { "src": "images-handbook/parking-signal-lights.jpg", "caption": "No parking within 10m before or 3m after standalone pedestrian or bicycle crossing lights." },
          { "src": "images-handbook/parking-railway-crossing.jpg", "caption": "No parking within 20m either side of a railway level crossing." }
        ],
        "bullets": [
          "Never leave children or animals alone in a vehicle — risk of dehydration/burns in a hot car, playing with controls (handbrake, gears, power windows), or harm if the vehicle is stolen.",
          "Must not stop or park: double-parked alongside another vehicle; across a driveway (unless dropping off/picking up passengers); on a median strip (unless signed); on a traffic island; within an intersection; on a children's or pedestrian crossing; on a railway level crossing; on footpaths/nature strips (unless signed); in a slip lane (unless signed) — and never in a way that blocks traffic flow or endangers other road users.",
          "\"No parking\" signs (all the time or at specified times): you may stop under 2 minutes within 3m of the vehicle to drop off/pick up passengers or load/unload — 5 minutes with a Mobility Parking Scheme (MPS) permit.",
          "Must not park within 1m of another parked vehicle in front or behind (angle parking excepted).",
          "Bus stops: no parking within 20m before or 10m after, unless signed.",
          "Intersections: no parking within 20m of a signalised intersection, or within 10m of a non-signalised one — unless signed, or it's a T-intersection and you're parked along the continuing road's unbroken side.",
          "Crossings: no stopping/parking within 20m before / 10m after a children's or pedestrian crossing; within 10m before / 3m after standalone pedestrian/bicycle-crossing traffic lights; within 20m either side of a railway level crossing — all unless signed otherwise.",
          "No parking within 3m of double dividing lines, or within 1m of a fire hydrant, fire hydrant indicator or fire plug indicator.",
          "On a hill or curve outside a built-up area: don't stop or park unless your vehicle would be visible from at least 100m away, and follow any parking sign's specific instructions."
        ]
      },
      {
        "title": "Restricted parking",
        "page": 160,
        "figures": [
          { "src": "images-handbook/no-stopping-sign.jpg", "caption": "'No stopping' sign: no stopping to the left or right of the sign." },
          { "src": "images-handbook/clearway-end-signs.jpg", "caption": "You must not park between a 'Clearway' and 'End clearway' sign during the times shown." },
          { "src": "images-handbook/special-event-clearway-signs.jpg", "caption": "You must not park in a special event clearway during the times and dates shown on the sign." },
          { "src": "images-handbook/restricted-parking-area-signs.jpg", "caption": "'Restricted parking area' and 'End restricted parking area' signs." },
          { "src": "images-handbook/hourly-parking-signs.jpg", "caption": "Hourly parking signs (7P, quarter-hour, unlimited) show the days and hours parking is allowed." },
          { "src": "images-handbook/ev-parking-signs.jpg", "caption": "Electric vehicle parking signs — some allow any EV, others only while charging, with time limits." },
          { "src": "images-handbook/accessible-parking-sign.jpg", "caption": "Accessible parking sign — requires a current Mobility Parking Scheme (MPS) permit." },
          { "src": "images-handbook/special-event-parking-area-sign.jpg", "caption": "Special event parking area sign — capped parking time unless you hold a permit." },
          { "src": "images-handbook/motorcycle-parking-sign.jpg", "caption": "Motorcycle parking sign — motorcycle-only between the signs." },
          { "src": "images-handbook/australia-post-box-parking.jpg", "caption": "Parking at least 3m away from an Australia Post box." },
          { "src": "images-handbook/taxi-zone-sign.jpg", "caption": "Taxi zone sign — taxi zone on both sides of the sign." },
          { "src": "images-handbook/bus-zone-sign.jpg", "caption": "Bus zone sign — bus zone on both sides of the sign." },
          { "src": "images-handbook/loading-zone-sign.jpg", "caption": "Loading zone sign — loading zone to the left of the sign." },
          { "src": "images-handbook/works-zone-sign.jpg", "caption": "Works zone sign — works zone to the left of the sign." },
          { "src": "images-handbook/truck-zone-sign.jpg", "caption": "Truck zone sign — truck zone to the left of the sign." }
        ],
        "bullets": [
          "\"No stopping\" signs ban stopping anywhere along the road/kerb in the arrow's direction except in an emergency (sometimes marked by a continuous yellow edge line); may apply only at certain times.",
          "Clearways (signed, or a broken yellow line) ban stopping between the signed times except in an emergency — buses and taxis (not rideshare) may still stop briefly to pick up/drop off. Special event clearways ban parking during their shown dates and times.",
          "Restricted parking areas (e.g. Darling Harbour, Homebush Bay) ban stopping/parking between the start/end signs except where separately signed — you may still stop to drop off or pick up goods or passengers.",
          "Hourly parking signs allow parking during the shown days/hours, and outside them too unless another sign says otherwise.",
          "Electric vehicle parking bays are for EVs only, sometimes only while charging, and sometimes only during specific signed days/hours.",
          "Accessible parking needs a current Mobility Parking Scheme (MPS) permit displayed (yours or as a passenger's) — permit holders also get extended time in restricted areas.",
          "Resident parking permits let you park free and without time limits in that area — the permit must be displayed at all times.",
          "Special event parking areas near venues cap parking time to what's shown on the sign, unless you hold a permit.",
          "Motorcycle parking zones are motorcycle-only between the signs, though any vehicle may briefly stop to drop off/pick up passengers.",
          "Pay parking (Meter/Ticket/Phone/Coupon signs) requires payment for the shown maximum time — e.g. \"2P meter\" means up to 2 hours, paid.",
          "No parking within 3m of an Australia Post letter box (you can still stop briefly to post mail or drop off/pick up passengers).",
          "Taxi zones and bus zones ban other vehicles stopping in the arrow's direction (except taxis/buses respectively), except outside any signed times.",
          "Loading zones: goods vehicles get up to 30 minutes for goods (not personal items/shopping); public buses up to 30 minutes for passengers; any vehicle may still stop briefly for passengers — times may be restricted.",
          "Works zones ban parking unless your vehicle is used in the nearby construction work; any vehicle may still stop briefly for passengers.",
          "Truck zones ban stopping/parking during the signed hours unless you're a 4.5+ tonne GVM truck dropping off/picking up goods; any vehicle may still stop briefly for passengers."
        ]
      },
      {
        "title": "Ways to park",
        "page": 165,
        "figures": [
          { "src": "images-handbook/parallel-parking-1m.jpg", "caption": "Parking at least 1m in front of and back from other parked vehicles." },
          { "src": "images-handbook/angle-parking.jpg", "caption": "Vehicles parking front to the kerb for 45-degree angle parking." }
        ],
        "bullets": [
          "Two main methods: parallel and angle parking, followed by standard parking checks.",
          "Parallel parking (the default unless signed otherwise): park facing the direction of traffic, parallel and as close as possible to the kerb, within any line markings, and at least 1m from vehicles parked in front and behind. On a one-way street you may also park on the right side.",
          "Angle parking (where signed or marked): park at a 45-degree angle with the front of the vehicle to the kerb, unless signs or markings say otherwise.",
          "Parking checks: engage the park brake before leaving the vehicle; if moving more than 3m away, remove the key and lock all doors/windows if the vehicle is unattended; check mirrors and blind spots for pedestrians, bikes and vehicles before opening your door; before pulling out, indicate for at least 5 seconds, check mirrors, and look over your shoulder for blind spots."
        ]
      }
    ]
  },
  {
    "id": "warnings-hazards",
    "title": "Warnings and road hazards",
    "page": 167,
    "sections": [
      {
        "title": "Warning signs",
        "page": 167,
        "figures": [
          { "src": "images-handbook/warning-signs-1.jpg", "caption": "'Cross road ahead', T-intersection give-way, and 'changing to two lanes of oncoming traffic' warning signs." },
          { "src": "images-handbook/warning-signs-row1.jpg", "caption": "Side road ahead, road curves right, sharp right turn, and sharp left bend warning signs." },
          { "src": "images-handbook/warning-signs-row2.jpg", "caption": "Winding road, road divides, divided road ends, and road narrows warning signs." },
          { "src": "images-handbook/warning-signs-row3.jpg", "caption": "'Give way' ahead, 'Stop' ahead, pedestrian crossing ahead, and pedestrians may be crossing ahead warning signs." },
          { "src": "images-handbook/warning-signs-row4.jpg", "caption": "Children may be crossing, look out for bicycles, road slippery when wet, and steep descent warning signs." },
          { "src": "images-handbook/warning-signs-row5.jpg", "caption": "Slow-moving vehicles, temporary traffic hazard, narrow bridge, and narrow bridge ahead warning signs." },
          { "src": "images-handbook/warning-signs-row6.jpg", "caption": "Dip, hump, kangaroos, and crest (blind hilltop) warning signs." },
          { "src": "images-handbook/warning-signs-row7.jpg", "caption": "Livestock crossing, stock crossing, ford, and grid warning signs." },
          { "src": "images-handbook/warning-signs-row8.jpg", "caption": "Floodway, road subject to flooding, and floodwater depth indicator signs." },
          { "src": "images-handbook/advisory-speed-sign.jpg", "caption": "An advisory speed sign paired with a warning sign, showing the maximum safe speed in good conditions." },
          { "src": "images-handbook/variable-message-sign-photo.jpg", "caption": "A variable message sign on a motorway." }
        ],
        "bullets": [
          "Diamond-shaped, black symbols/words on yellow — they warn of dangers or changed conditions ahead: side roads/T-intersections (give way rules apply), curves/bends/winding roads, roads narrowing/dividing/merging, give way/stop signs ahead, pedestrian/children's crossings ahead, cyclists, roads slippery when wet, steep descents, slow-moving vehicles crossing or entering, temporary hazards (oil spill, fallen tree, snow, landslide), narrow bridges, dips/humps, kangaroos/livestock crossing, floodwater/causeways (sometimes with a depth gauge), grids, and limited sightlines over a hill crest.",
          "Advisory speed signs sometimes pair with a warning sign to show the safe speed for that hazard in good conditions.",
          "Variable message signs (large electronic displays) warn of changing conditions ahead, such as fog, crashes, roadworks, congestion, closures or police operations."
        ]
      },
      {
        "title": "Roadworks",
        "page": 171,
        "figures": [
          { "src": "images-handbook/roadworks-traffic-lights-photo.jpg", "caption": "Temporary traffic lights on a road. You must stop on a red signal." },
          { "src": "images-handbook/stop-slow-signs.jpg", "caption": "'Stop' and 'Slow' signs are held by traffic controllers. You must obey these signs." },
          { "src": "images-handbook/roadwork-signs-row1.jpg", "caption": "40km/h roadwork speed limit, 'Prepare to stop', and traffic controller ahead signs." },
          { "src": "images-handbook/roadwork-signs-row2.jpg", "caption": "Road workers ahead, roadwork ahead, and end roadwork signs." },
          { "src": "images-handbook/roadwork-signs-row3.jpg", "caption": "No lines (take care overtaking), closed lane ahead, and loose stones signs." },
          { "src": "images-handbook/roadwork-arrow-vehicle.jpg", "caption": "A temporary arrow on a roadwork vehicle warns you that a road hazard is ahead and to change lanes." }
        ],
        "bullets": [
          "Temporary signs warn roadworks are ahead — slow down, watch for hazards, and be ready to stop. Obey all regulatory signs, temporary traffic lights, and a traffic controller's handheld Stop/Slow sign or hand signals; watch for road workers.",
          "Roadwork speed limit signs are regulatory — never exceed the shown limit (e.g. 40km/h).",
          "Other roadwork signs: slow down and prepare to stop; a traffic controller ahead; road workers or approaching roadworks; roadworks have ended; unmarked road (take care overtaking); closed lane ahead (merge as directed); loose stones (slow down); a vehicle-mounted temporary arrow warning of a hazard and directing a lane change."
        ]
      },
      {
        "title": "Wildlife and livestock",
        "page": 173,
        "figures": [
          { "src": "images-handbook/wildlife-livestock-signs.jpg", "caption": "'Stock may be crossing ahead' and 'Look out for kangaroos ahead' warning signs." }
        ],
        "bullets": [
          "On country roads, watch for unfenced livestock and wildlife — they move quickly and unpredictably and can cause serious crashes; more active near waterholes/creeks and harder to see at sunrise/sunset.",
          "Slow down at stock or animal warning signs.",
          "If an animal is on or near the road, slow down and brake in a controlled way — never swerve, as that risks losing control or colliding with oncoming traffic.",
          "After hitting an animal, only stop if it's safe. For an injured native or wild animal, contact WIRES (wires.org.au, 1300 094 737, 24/7); for a domestic pet, contact the owner, police, or the RSPCA (rspca.org.au)."
        ]
      },
      {
        "title": "Crashes",
        "page": 174,
        "figures": [
          { "src": "images-handbook/tow-truck-plate.jpg", "caption": "Authorised NSW crash-scene tow trucks have a four-digit number plate ending in 'TT'." }
        ],
        "bullets": [
          "Must always stop after a crash and give as much help as possible, and provide your details to those involved or to police — failing to stop and help after a crash causing death or injury risks a fine and prison.",
          "Immediate steps: turn off the ignition (fire risk), turn on hazard lights, and if it's safe, clear dangerous debris or broken glass from the road.",
          "A crash with a dangerous-goods truck: call 000, warn people away, avoid touching spilled chemicals or breathing fumes/dust, and follow the Emergency Procedures Guide on the truck's door if it's safe.",
          "Exchange with others involved: your name and address, your vehicle registration number, and the vehicle owner's name/address if you're not the owner.",
          "Call an ambulance then police (000) if anyone is injured or killed. Police also attend when someone is trapped, a driver may be alcohol/drug-affected, someone won't stop or exchange details, traffic needs directing or hazards managing, or a bus/truck needs towing. Give police your licence, crash and vehicle details, your name/address, and witness/other-driver information.",
          "Police attendance isn't needed if there are no injuries and nothing needs towing — if an injury surfaces later, call the Police Assistance Line (131 444). If police didn't attend, report within 24 hours if a vehicle was towed, property or animals were damaged/injured, or you couldn't exchange details — report to the nearest station or 131 444.",
          "Learn first aid via St John Ambulance, Australian Red Cross, or the National Safety Council of Australia.",
          "Towing after a crash: you choose who tows your vehicle and where to. Authorised NSW crash-scene tow trucks have a 4-digit plate ending \"TT\" and a driver with a valid driver certificate — don't use one that doesn't qualify. You must sign a Towing Authorisation Form (you can contact someone first, and can get a copy); police or an authorised officer can arrange a tow if you can't. Comprehensive insurance may cover the towing fee."
        ]
      },
      {
        "title": "Breakdowns",
        "page": 177,
        "figures": [
          { "src": "images-handbook/emergency-stopping-lane-sign.jpg", "caption": "'Emergency stopping lane only' sign." },
          { "src": "images-handbook/warning-triangle-photo.jpg", "caption": "Warning triangle on the road. Slow down." }
        ],
        "bullets": [
          "Reduce breakdown risk: check fuel, oil, water and tyre pressure (including the spare) regularly; carry a hi-vis vest and torch.",
          "If you break down: pull over safely (shoulder, emergency stopping lane, breakdown lane), park as far left and away from traffic as possible, turn on hazard lights (and park lights in poor visibility), stay in the vehicle belted and call roadside assistance; for a flat tyre, drive to a safe spot away from traffic if you can.",
          "If you must exit the vehicle: check for traffic first, exit on the safer side, stand clear behind a safety barrier if possible, avoid crossing the road, and don't change a tyre unless it's safe.",
          "In a tunnel: pull into the breakdown bay or side of the lane, turn on hazard lights and radio, stay in the vehicle, and wait — major tunnels are constantly monitored.",
          "Passing a broken-down vehicle: slow down and keep your distance. Passing a stopped tow truck or breakdown vehicle with flashing lights: slow to 40km/h if the limit is 80km/h or less, or slow down and safely move over (change lanes if multi-lane and safe) if it's over 80km/h — don't speed up again until you've passed everyone involved. Slow down for heavy-vehicle warning triangles too."
        ]
      },
      {
        "title": "Police and emergency vehicles",
        "page": 179,
        "bullets": [
          "Watch for emergency vehicles (police, fire, ambulance) — failing to give way risks a fine and demerit points. Obey police directions, signs and hand signals, and pull over safely as soon as you can if directed.",
          "Passing a stopped emergency vehicle with flashing blue/red lights: slow to 40km/h if the limit is 80km/h or less, or slow down and safely move over/change lanes if it's over 80km/h — don't speed up until you've passed everyone involved.",
          "On hearing a siren or seeing flashing blue/red lights approaching, give way — move left, stop, or pull out of the traffic line as needed."
        ]
      },
      {
        "title": "Funeral processions",
        "page": 179,
        "bullets": [
          "Must not interrupt a funeral or official procession — a fine applies. Slow down and stay behind it."
        ]
      },
      {
        "title": "Driving in poor conditions",
        "page": 180,
        "bullets": [
          "Avoid driving in severe or unpredictable weather (storms, bushfires, hail, snow, dust storms, heavy fog) — check conditions beforehand, and pull over safely if conditions worsen mid-trip.",
          "If you must drive in poor conditions: slow down, drive carefully, improve your visibility with running lights or headlights, stay updated via radio, consider an alternate route, and take regular rest breaks.",
          "Wet weather: roads get slippery and stopping takes longer — turn on headlights if needed, brake gently, and increase your following gap.",
          "Unsealed roads (dirt/gravel): slow down and take care — longer stopping distance, harder control, and a risk of skidding, sliding or rolling at speed.",
          "Water: avoid driving through it — depth and current are hard to judge, the surface underneath may be damaged, and debris or rising water add risk. Floodwater is extremely dangerous — find another way or wait; turning around is safer than driving through."
        ]
      },
      {
        "title": "Driving distractions",
        "page": 181,
        "bullets": [
          "A distraction is anything taking your eyes off the road, hands off the wheel, or mind off driving — from inside or outside the vehicle. Just 2 seconds of eyes-off-road doubles crash/near-crash risk (at 50km/h that's 28m travelled blind).",
          "Passengers can help spot hazards, but their noise or behaviour can distract you, and some may push you to speed or break rules — young drivers have a higher crash risk with similarly-aged passengers.",
          "Animals must travel secured in an appropriate area — you must not drive with one on your lap, being led from the vehicle, or tied to the outside.",
          "Ways to reduce distraction: turn off the radio/music in tricky traffic, stow loose items, ask passengers not to distract you, don't adjust the radio while driving, limit passengers/animals, and for phones — learners/P1/P2 should silence, stow or switch off theirs, and full-licence drivers should avoid using theirs at all."
        ]
      },
      {
        "title": "Lights and horns",
        "page": 182,
        "figures": [
          { "src": "images-handbook/highbeam-behind-vehicle.jpg", "caption": "Turn your headlights to low beam when driving within 200m behind another vehicle." },
          { "src": "images-handbook/highbeam-oncoming-vehicle.jpg", "caption": "Turn your headlights to low beam when a vehicle is coming towards you within 200m." }
        ],
        "bullets": [
          "About a third of crashes happen at night — pedestrians, bikes and motorcycles are harder to see.",
          "At night, or whenever there's not enough light to see a person in dark clothing at 100m, your vehicle must clearly show headlights, tail lights, number plates, and any fitted clearance/side marker lights.",
          "Headlights: day running lights (or low beam if not fitted) improve visibility; must be on between sunset and sunrise, or anytime visibility is that poor.",
          "High beam is usable to see further, even under street lights — dip to low beam within 200m of an oncoming vehicle or when following one within 200m; you may flash high beam before overtaking.",
          "Fog lights: only in fog, heavy rain, or similarly limiting conditions (smoke, dust) — switch off once visibility improves; use low beam if you lack fog lights.",
          "Hazard lights: only when your vehicle is in a hazardous position or in genuinely hazardous conditions (thick fog, very heavy rain).",
          "Don't use or fit dazzling or distracting lights. If dazzled by oncoming high beam, look to the left edge of your lane, and slow down or stop out of the traffic line until your eyes recover.",
          "Horns and warning devices: only to warn of your vehicle's position or approach, to warn animals off the road, or as part of an anti-theft/alcohol-interlock device — never to scare or intimidate others, especially cyclists, pedestrians or horse riders."
        ]
      }
    ]
  },
  {
    "id": "vehicle-safety",
    "title": "Vehicle safety and compliance",
    "page": 185,
    "sections": [
      {
        "title": "Vehicle registration",
        "page": 185,
        "bullets": [
          "All vehicles must be registered to drive in NSW; all vehicles except trailers and caravans need CTP insurance (a green slip) to register.",
          "Driving unregistered or uninsured is illegal (fine plus demerit points); if you crash while unregistered you're not covered by CTP and face severe penalties. Parking an unregistered vehicle on a road also draws a penalty.",
          "You can only drive an unregistered vehicle while getting or renewing registration, or with an unregistered vehicle permit.",
          "Buying an already-registered vehicle: transfer registration into your name within 14 days to avoid a late surcharge.",
          "Renew registration by the due date; unpaid for 3+ months past due means automatic cancellation, requiring a fresh registration. Vehicles over 5 years old generally need a safety check to renew — a failed vehicle must not be driven except to/from repair or inspection, and not again until it passes and is registered."
        ]
      },
      {
        "title": "Number plates",
        "page": 187,
        "figures": [
          { "src": "images-handbook/number-plate-visibility-angle.jpg", "caption": "Number plates must be visible to 20m, within a 45-degree arc from the vehicle's centre on each side." },
          { "src": "images-handbook/number-plate-visibility-topdown.jpg", "caption": "Top-down view of the 45-degree number plate visibility arc on each side of the vehicle." }
        ],
        "bullets": [
          "Must be permanently fitted front and back (motorcycles: back only), issued by Transport for NSW, matching your Certificate of Registration — never fit your plates to another vehicle.",
          "Must not be altered, defaced or obscured (e.g. by L/P plates); any plate cover must be clear, clean, untinted, non-reflective and flat.",
          "Plates must be clean, undamaged and readable from at least 20m, from above, and within a 45-degree arc from the vehicle's centre on each side.",
          "All rear plates need a light for night visibility. A towed trailer needs its own rear plate. A bike rack or tow bar must not block the rear plate's visibility.",
          "You can buy a smaller auxiliary copy of your plate at a service centre; penalties apply for hiding any part of a plate."
        ]
      },
      {
        "title": "Roadworthiness",
        "page": 189,
        "bullets": [
          "To register, a vehicle must be roadworthy and meet legal standards.",
          "Police can inspect your vehicle anytime and issue a Defect Notice if it's unsafe — e.g. too noisy, leaking oil, excess smoke, a non-compliant or unsafe bull bar (pointed corners/sharp edges), or a badly fitted accessory (fishing rod holder, spotlight mount, winch).",
          "A Defect Notice must be repaired by its due date, sometimes needing clearance from an authorised inspector — registration can be suspended if you miss the deadline.",
          "Significant modifications need assessment and certification by a licensed certifier under the Vehicle Safety Compliance Certification Scheme (VSCCS) before registration — modifications can also affect insurance and warranty. P1/P2 drivers must not drive vehicles modified to increase engine performance.",
          "Regularly check wipers/washers, horn and seatbelts work; check all lights (headlights, brake lights, indicators) and don't drive at night with faulty lights. Tyres (incl. spare) must have at least 1.5mm tread, correct pressure, and no cracks, bumps or uneven wear."
        ]
      },
      {
        "title": "Vehicle safety features",
        "page": 190,
        "bullets": [
          "Modern safety tech (e.g. autonomous emergency braking, lane support) reduces crash risk; side curtain airbags reduce injury severity when a crash can't be avoided — check ANCAP or the Used Car Safety Ratings Buyer's Guide when choosing a car.",
          "Airbags are a supplementary restraint system working with seatbelts — for the driver's airbag to work best, keep the steering wheel low and facing your chest; a faulty airbag makes the vehicle unsafe.",
          "Electronic driver-assist systems help but don't prevent a crash if you drive dangerously: ESC keeps your intended direction by braking individual wheels or adjusting power; ABS prevents skidding under heavy braking (the pedal may pulse); TCS stops wheel spin for smooth acceleration on slippery surfaces; EBA/BAS boosts braking force on sudden braking to cut stopping distance; AEB warns of, and can auto-brake for, objects in your path; LSS alerts or steers you back from drifting over a lane line; RCA gives a camera/sensor view and alerts while reversing; BSM alerts you to vehicles in your blind spot when changing lanes."
        ]
      },
      {
        "title": "Towing",
        "page": 192,
        "figures": [
          { "src": "images-handbook/towing-restrictions.jpg", "caption": "Nobody may travel inside a towed trailer or caravan, and loads must not overhang." }
        ],
        "bullets": [
          "Towing needs extra skill and knowledge beyond normal driving.",
          "Rules: only one trailer at a time; nobody may travel inside a towed trailer or caravan; loads must be secured, covered, and not overhang.",
          "Learner and P1 drivers have towing restrictions; illegal towing risks a fine and demerit points."
        ]
      },
      {
        "title": "Driving posture",
        "page": 193,
        "figures": [
          { "src": "images-handbook/driving-posture-photo.jpg", "caption": "Good driving posture: seat upright, arms bent, seatbelt low and untwisted." },
          { "src": "images-handbook/left-foot-brace-photo.jpg", "caption": "Use your left foot to brace your body when driving." }
        ],
        "bullets": [
          "Good posture reduces fatigue and improves comfort, control and safety.",
          "Set up: seat gives a clear view and easy reach to controls; steering wheel low and facing your chest; head restraint matched to your height; seatbelt low on the hips with no twists; mirrors show the rear and sides clearly; sit upright for back/shoulder support; arms bent with thumbs on the wheel rim; knees slightly bent; sit back in the seat; brace with your left foot."
        ]
      }
    ]
  },
  {
    "id": "vehicle-environment",
    "title": "Your vehicle and the environment",
    "page": 194,
    "sections": [
      {
        "title": "Ecodriving",
        "page": 194,
        "bullets": [
          "Must not throw rubbish from your vehicle — you're responsible for anything thrown, dropped or that falls from your vehicle or a towed trailer; reported littering draws a heavy fine, and if the item could injure someone or damage a vehicle or the road, you must remove it as soon as it's safely possible or face a fine and demerit points.",
          "Never throw cigarette butts (lit ones are especially dangerous) — a heavy fine plus demerit points apply.",
          "Ecodriving tips to cut fuel use and emissions: don't overfill the tank; use air conditioning only when needed (most efficient above 60km/h); keep tyres correctly inflated (under-inflation raises fuel use); turn the engine off for long stops; remove unused roof/bike racks and unnecessary weight; service the vehicle regularly with the correct oil and coolant; shift gears at lower revs in a manual; avoid over-revving on take-off; maintain a steady speed."
        ]
      }
    ]
  },
  {
    "id": "penalties",
    "title": "Penalties",
    "page": 195,
    "sections": [
      {
        "title": "Fines",
        "page": 195,
        "bullets": [
          "Fines apply to most driving offences (illegal parking, speeding, no seatbelt, an unregistered vehicle, breaching licence restrictions) — issued on the spot or by post, due by a set date; serious offences may go to court. Pay via revenue.nsw.gov.au.",
          "Unpaid fines: your licence can be suspended and/or registration cancelled; a payment plan may be available at revenue.nsw.gov.au — paying, or arranging a plan, ends the suspension.",
          "Not paying or arranging a plan within 6 months of suspension can get your licence cancelled, requiring reissue once all fines are paid; demerit points carry over through a suspension or reissue."
        ]
      },
      {
        "title": "Demerit points",
        "page": 196,
        "bullets": [
          "All drivers start at zero; offences add points to your record; reaching your licence type's limit within a 3-year period triggers a suspension — see the table below.",
          "A demerit-point suspension applies on top of any other suspension you get for the offence itself.",
          "Double demerit points apply during holiday periods for: speeding, not wearing a seatbelt (you or your passengers), not using an approved child car seat, and illegal mobile phone use."
        ],
        "table": {
          "headers": ["Licence type", "Points in 3 years", "Suspension"],
          "rows": [
            ["Learner", "4", "3 months"],
            ["Provisional P1", "4", "3 months"],
            ["Provisional P2", "7", "3 months"],
            ["Full licence", "13–15", "3 months"],
            ["Full licence", "16–19", "4 months"],
            ["Full licence", "20 or more", "5 months"]
          ]
        }
      },
      {
        "title": "Loss of licence",
        "page": 197,
        "bullets": [
          "Two ways to lose your licence: suspension and disqualification — driving while either applies is a serious offence.",
          "Suspension (temporary) can result from exceeding your demerit limit within 3 years, driving 30km/h+ over the limit, a first under-0.08 alcohol offence, unpaid fines, or being medically unfit.",
          "Police can suspend and seize your licence on the spot for: a learner driving without a supervisor; a learner/P1/P2 driving 30km/h+ over the limit; anyone driving 45km/h+ over the limit; driving over the alcohol limit; or hooning/street racing.",
          "Once a suspension ends you can drive again — if police seized your licence, apply for a replacement at a service centre first; going to court can convert a suspension into a disqualification instead.",
          "Disqualification (via a court conviction) cancels your licence entirely. The court sets the period (offences often have minimum/maximum terms); once it ends, apply to reissue at a service centre — longer disqualifications may require re-sitting the DKT and/or Driving Test.",
          "Any driver, including learner/P1/P2, can be disqualified for: driving on a suspended licence; driving over the alcohol limit or under its influence; illegal drugs present or driving under drug/medicine influence; driving 30km/h+ over the limit; negligent or dangerous driving causing injury or death; hooning/street racing; or failing to stop after a crash causing injury or death."
        ]
      },
      {
        "title": "Alcohol interlocks",
        "page": 198,
        "bullets": [
          "A drink-driving conviction may require an alcohol interlock — an electronic breath-tester wired to the ignition that stops the vehicle starting if it detects alcohol.",
          "Can follow: a BAC of 0.08 or over, any repeat drink-driving offence, driving under the influence of alcohol, or refusing a blood/urine test."
        ]
      },
      {
        "title": "Driver education courses",
        "page": 199,
        "bullets": [
          "Exceeding your demerit limit twice within 5 years can mean a mandatory course, such as the Traffic Offender Intervention Program, to reinforce road rules and the risks of unsafe driving.",
          "A court conviction for over-limit driving that doesn't require an interlock may instead require the Sober Driver Program, aimed at changing drink-driving attitudes and behaviour."
        ]
      },
      {
        "title": "Vehicle impoundment",
        "page": 199,
        "bullets": [
          "Police can impound your vehicle or remove its plates for high-risk offences: driving 45km/h+ over the limit; a repeat 0.08+ BAC offence; hooning/street racing; unlicensed driving (2+ offences); driving while disqualified (2+ offences); or fleeing police.",
          "Combined with losing your licence, this aims to keep high-risk drivers off the road."
        ]
      },
      {
        "title": "Prison",
        "page": 200,
        "bullets": [
          "A court can jail you for high-risk offences: BAC 0.08 or over, driving under the influence of alcohol, driving under the influence of drugs or medicines, refusing a blood/urine test, negligent or dangerous driving causing injury or death, driving while suspended or disqualified, or hooning/street racing.",
          "Prison terms can increase for repeat offences."
        ]
      },
      {
        "title": "Toll notices",
        "page": 200,
        "bullets": [
          "Using a toll road without an electronic tag or pass means you must pay the toll fee within 3 days, or you'll receive a toll notice (toll plus an administration fee).",
          "Ignoring it brings a reminder notice with extra fees, then a final notice with overdue fees — not paying by the due date can lead to court."
        ]
      }
    ]
  }
];
