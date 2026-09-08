/*
  LexiTrek Vocabulary Bank
  Main source: LexiTrek Wordbank KP2027_Vocabulary.xlsx

  Structure:
  - 400 vocabulary items
  - 4 themes x 100 words
  - 280 Revised A2 + 120 A2 High
  - 3 generated question types per item: meaning, context, recognition

  Source integrity:
  - Science & Technology, Health & Environment, and Consumerism & Financial Awareness
    meanings/examples are taken from the uploaded workbook.
  - People and Culture source sheet contains only Word/POS/CEFR/Theme.
    Its meanings and Form 1 example sentences are supplementary generated fields
    so the app can function; these are explicitly marked by meaningOrigin/exampleOrigin.
  - CEFR labels are normalized to "Revised A2" and "A2 High"; sourceCefrLevel preserves
    the original workbook wording.
*/

window.lexitrekThemes = [
  { code: "PC", name: "People and Culture", total: 100, revisedA2: 70, a2High: 30 },
  { code: "ST", name: "Science & Technology", total: 100, revisedA2: 70, a2High: 30 },
  { code: "HE", name: "Health & Environment", total: 100, revisedA2: 70, a2High: 30 },
  { code: "CF", name: "Consumerism & Financial Awareness", total: 100, revisedA2: 70, a2High: 30 }
];

window.vocabularyBank = [
  {
    "id": "PC-RA2-001",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 1,
    "word": "appearance",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the way a person or thing looks",
    "example": "His neat appearance made a good first impression.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 5,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'appearance' mean?",
        "options": [
          "the way a person or thing looks",
          "to say hello or welcome someone",
          "a person or animal that is a boy or man",
          "giving attention so that you avoid mistakes or danger"
        ],
        "answer": "the way a person or thing looks",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "His neat ______ made a good first impression.",
        "options": [
          "appearance",
          "laughter",
          "drawing",
          "crowd"
        ],
        "answer": "appearance",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the way a person or thing looks",
        "options": [
          "appearance",
          "laughter",
          "drawing",
          "crowd"
        ],
        "answer": "appearance",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-002",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 2,
    "word": "behave",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to act in a particular way",
    "example": "Students should behave politely during the school event.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 6,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'behave' mean?",
        "options": [
          "to act in a particular way",
          "a place where works of art are shown",
          "a famous person, especially in entertainment or media",
          "a belief or custom passed from one generation to another"
        ],
        "answer": "to act in a particular way",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Students should ______ politely during the school event.",
        "options": [
          "behave",
          "greet",
          "invite",
          "belong"
        ],
        "answer": "behave",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to act in a particular way",
        "options": [
          "behave",
          "greet",
          "invite",
          "belong"
        ],
        "answer": "behave",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-003",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 3,
    "word": "behaviour",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the way a person acts",
    "example": "Her friendly behaviour made the new student feel welcome.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 7,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'behaviour' mean?",
        "options": [
          "the way a person acts",
          "an angry disagreement between people",
          "a person or animal that is a boy or man",
          "relating to a traditional style of music, art or literature"
        ],
        "answer": "the way a person acts",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Her friendly ______ made the new student feel welcome.",
        "options": [
          "behaviour",
          "relationship",
          "uniform",
          "painter"
        ],
        "answer": "behaviour",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the way a person acts",
        "options": [
          "behaviour",
          "relationship",
          "uniform",
          "painter"
        ],
        "answer": "behaviour",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-004",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 4,
    "word": "belong",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to be a member of a group or to be in the right place",
    "example": "I belong to the school music club.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 8,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'belong' mean?",
        "options": [
          "to be a member of a group or to be in the right place",
          "a person who travels from one place to another",
          "something said or done to make people laugh",
          "a building where Christians meet for worship"
        ],
        "answer": "to be a member of a group or to be in the right place",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ to the school music club.",
        "options": [
          "belong",
          "communicate",
          "argue",
          "greet"
        ],
        "answer": "belong",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to be a member of a group or to be in the right place",
        "options": [
          "belong",
          "communicate",
          "argue",
          "greet"
        ],
        "answer": "belong",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-005",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 5,
    "word": "care",
    "partOfSpeech": "n./v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "attention or help given to someone or something",
    "example": "We should care for older people in our community.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 9,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'care' mean?",
        "options": [
          "attention or help given to someone or something",
          "a person who guides or is in charge of a group",
          "a famous person, especially in entertainment or media",
          "the sound a person makes when speaking or singing"
        ],
        "answer": "attention or help given to someone or something",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We should ______ for older people in our community.",
        "options": [
          "care",
          "taste",
          "joke",
          "chat"
        ],
        "answer": "care",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: attention or help given to someone or something",
        "options": [
          "care",
          "taste",
          "joke",
          "chat"
        ],
        "answer": "care",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-006",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 6,
    "word": "careful",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "giving attention so that you avoid mistakes or danger",
    "example": "Be careful when carrying the traditional glass decoration.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 10,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'careful' mean?",
        "options": [
          "giving attention so that you avoid mistakes or danger",
          "decorative objects worn on the body, such as rings or necklaces",
          "a funny play, film or show",
          "a building where Christians meet for worship"
        ],
        "answer": "giving attention so that you avoid mistakes or danger",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Be ______ when carrying the traditional glass decoration.",
        "options": [
          "careful",
          "foreign",
          "social",
          "traditional"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: giving attention so that you avoid mistakes or danger",
        "options": [
          "careful",
          "foreign",
          "social",
          "traditional"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-007",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 7,
    "word": "character",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the qualities that make a person behave in a certain way",
    "example": "The story shows the hero's brave character.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 11,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'character' mean?",
        "options": [
          "the qualities that make a person behave in a certain way",
          "a place where works of art are shown",
          "the activity or business of people travelling for holidays",
          "an angry disagreement between people"
        ],
        "answer": "the qualities that make a person behave in a certain way",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The story shows the hero's brave ______.",
        "options": [
          "character",
          "jazz",
          "drama",
          "argument"
        ],
        "answer": "character",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the qualities that make a person behave in a certain way",
        "options": [
          "character",
          "jazz",
          "drama",
          "argument"
        ],
        "answer": "character",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-008",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 8,
    "word": "chat",
    "partOfSpeech": "v./n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to talk in a friendly and informal way",
    "example": "We chatted with our cousins after dinner.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 12,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'chat' mean?",
        "options": [
          "to talk in a friendly and informal way",
          "something that you say or write to give an opinion",
          "a famous person, especially in entertainment or media",
          "a belief or custom passed from one generation to another"
        ],
        "answer": "to talk in a friendly and informal way",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We ______ with our cousins after dinner.",
        "options": [
          "chat",
          "care",
          "taste",
          "reply"
        ],
        "answer": "chat",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to talk in a friendly and informal way",
        "options": [
          "chat",
          "care",
          "taste",
          "reply"
        ],
        "answer": "chat",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-009",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 9,
    "word": "colleague",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person you work with",
    "example": "My aunt introduced us to her colleague at the office.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 13,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'colleague' mean?",
        "options": [
          "a person you work with",
          "the sound a person makes when speaking or singing",
          "giving attention so that you avoid mistakes or danger",
          "an adult woman"
        ],
        "answer": "a person you work with",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My aunt introduced us to her ______ at the office.",
        "options": [
          "colleague",
          "argument",
          "personality",
          "invitation"
        ],
        "answer": "colleague",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person you work with",
        "options": [
          "colleague",
          "argument",
          "personality",
          "invitation"
        ],
        "answer": "colleague",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-010",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 10,
    "word": "communicate",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to share information, ideas or feelings with others",
    "example": "We communicate with our friends by speaking and messaging.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 14,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'communicate' mean?",
        "options": [
          "to share information, ideas or feelings with others",
          "an angry disagreement between people",
          "to have a different opinion from someone",
          "from or connected with another country"
        ],
        "answer": "to share information, ideas or feelings with others",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We ______ with our friends by speaking and messaging.",
        "options": [
          "communicate",
          "behave",
          "celebrate",
          "greet"
        ],
        "answer": "communicate",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to share information, ideas or feelings with others",
        "options": [
          "communicate",
          "behave",
          "celebrate",
          "greet"
        ],
        "answer": "communicate",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-011",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 11,
    "word": "community",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a group of people who live in the same area or share something in common",
    "example": "Our community organised a clean-up day.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 15,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'community' mean?",
        "options": [
          "a group of people who live in the same area or share something in common",
          "the group of people watching or listening to a performance",
          "relating to a traditional style of music, art or literature",
          "clothes in general"
        ],
        "answer": "a group of people who live in the same area or share something in common",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our ______ organised a clean-up day.",
        "options": [
          "community",
          "colleague",
          "human",
          "recipe"
        ],
        "answer": "community",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a group of people who live in the same area or share something in common",
        "options": [
          "community",
          "colleague",
          "human",
          "recipe"
        ],
        "answer": "community",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-012",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 12,
    "word": "couple",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "two people who are married or in a relationship",
    "example": "The couple thanked everyone for coming to their wedding.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 16,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'couple' mean?",
        "options": [
          "two people who are married or in a relationship",
          "an artist who creates pictures using paint",
          "popular styles of clothes, hair or appearance",
          "a play, film or story about serious or exciting events"
        ],
        "answer": "two people who are married or in a relationship",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ thanked everyone for coming to their wedding.",
        "options": [
          "couple",
          "recipe",
          "musician",
          "argument"
        ],
        "answer": "couple",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: two people who are married or in a relationship",
        "options": [
          "couple",
          "recipe",
          "musician",
          "argument"
        ],
        "answer": "couple",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-013",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 13,
    "word": "crowd",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a large group of people in one place",
    "example": "A crowd gathered to watch the cultural performance.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 17,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'crowd' mean?",
        "options": [
          "a large group of people in one place",
          "a written or spoken request asking someone to come to an event",
          "a belief or custom passed from one generation to another",
          "a person who listens"
        ],
        "answer": "a large group of people in one place",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A ______ gathered to watch the cultural performance.",
        "options": [
          "crowd",
          "jazz",
          "tourism",
          "lady"
        ],
        "answer": "crowd",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a large group of people in one place",
        "options": [
          "crowd",
          "jazz",
          "tourism",
          "lady"
        ],
        "answer": "crowd",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-014",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 14,
    "word": "crowded",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "full of many people",
    "example": "The night market was crowded during the festival.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 18,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'crowded' mean?",
        "options": [
          "full of many people",
          "to say hello or welcome someone",
          "the group of people watching or listening to a performance",
          "a person who listens"
        ],
        "answer": "full of many people",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The night market was ______ during the festival.",
        "options": [
          "crowded",
          "classical",
          "social",
          "national"
        ],
        "answer": "crowded",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: full of many people",
        "options": [
          "crowded",
          "classical",
          "social",
          "national"
        ],
        "answer": "crowded",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-015",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 15,
    "word": "female",
    "partOfSpeech": "adj./n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person or animal that is a girl or woman",
    "example": "The team has both male and female players.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 19,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'female' mean?",
        "options": [
          "a person or animal that is a girl or woman",
          "a conversation in which people share ideas or opinions",
          "something said or done to make people laugh",
          "a child or young person"
        ],
        "answer": "a person or animal that is a girl or woman",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The team has both male and ______ players.",
        "options": [
          "female",
          "author",
          "uniform",
          "listener"
        ],
        "answer": "female",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person or animal that is a girl or woman",
        "options": [
          "female",
          "author",
          "uniform",
          "listener"
        ],
        "answer": "female",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-016",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 16,
    "word": "male",
    "partOfSpeech": "adj./n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person or animal that is a boy or man",
    "example": "The male student welcomed the visitors.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 20,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'male' mean?",
        "options": [
          "a person or animal that is a boy or man",
          "the way a person acts",
          "relating to a whole country",
          "two people who are married or in a relationship"
        ],
        "answer": "a person or animal that is a boy or man",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ student welcomed the visitors.",
        "options": [
          "male",
          "female",
          "comedy",
          "speech"
        ],
        "answer": "male",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person or animal that is a boy or man",
        "options": [
          "male",
          "female",
          "comedy",
          "speech"
        ],
        "answer": "male",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-017",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 17,
    "word": "guest",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who is invited to visit a place or event",
    "example": "Each guest received a small gift at the wedding.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 21,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'guest' mean?",
        "options": [
          "a person who is invited to visit a place or event",
          "a picture made with a pen or pencil",
          "two people who are married or in a relationship",
          "attention or help given to someone or something"
        ],
        "answer": "a person who is invited to visit a place or event",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Each ______ received a small gift at the wedding.",
        "options": [
          "guest",
          "argument",
          "clothing",
          "jewellery"
        ],
        "answer": "guest",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who is invited to visit a place or event",
        "options": [
          "guest",
          "argument",
          "clothing",
          "jewellery"
        ],
        "answer": "guest",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-018",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 18,
    "word": "human",
    "partOfSpeech": "adj./n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person; relating to people",
    "example": "Every human needs food, water and care.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 22,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'human' mean?",
        "options": [
          "a person; relating to people",
          "the qualities that make a person behave in a certain way",
          "a large strong building where kings or important people once lived",
          "to talk in a friendly and informal way"
        ],
        "answer": "a person; relating to people",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Every ______ needs food, water and care.",
        "options": [
          "human",
          "gallery",
          "comment",
          "discussion"
        ],
        "answer": "human",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person; relating to people",
        "options": [
          "human",
          "gallery",
          "comment",
          "discussion"
        ],
        "answer": "human",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-019",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 19,
    "word": "kid",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a child or young person",
    "example": "The kids played traditional games together.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 23,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'kid' mean?",
        "options": [
          "a child or young person",
          "giving attention so that you avoid mistakes or danger",
          "the flavour of food or drink; to try food or drink",
          "to say hello or welcome someone"
        ],
        "answer": "a child or young person",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ played traditional games together.",
        "options": [
          "kid",
          "gallery",
          "voice",
          "audience"
        ],
        "answer": "kid",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a child or young person",
        "options": [
          "kid",
          "gallery",
          "voice",
          "audience"
        ],
        "answer": "kid",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-020",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 20,
    "word": "lady",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "an adult woman",
    "example": "The lady at the counter greeted us politely.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 24,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'lady' mean?",
        "options": [
          "an adult woman",
          "a person you work with",
          "a person who writes books or other texts",
          "a person or animal that is a girl or woman"
        ],
        "answer": "an adult woman",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ at the counter greeted us politely.",
        "options": [
          "lady",
          "discussion",
          "crowd",
          "laughter"
        ],
        "answer": "lady",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: an adult woman",
        "options": [
          "lady",
          "discussion",
          "crowd",
          "laughter"
        ],
        "answer": "lady",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-021",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 21,
    "word": "leader",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who guides or is in charge of a group",
    "example": "Our class leader explained the activity to everyone.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 25,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'leader' mean?",
        "options": [
          "a person who guides or is in charge of a group",
          "a large group of people in one place",
          "decorative objects worn on the body, such as rings or necklaces",
          "from or connected with another country"
        ],
        "answer": "a person who guides or is in charge of a group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our class ______ explained the activity to everyone.",
        "options": [
          "leader",
          "male",
          "tradition",
          "community"
        ],
        "answer": "leader",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who guides or is in charge of a group",
        "options": [
          "leader",
          "male",
          "tradition",
          "community"
        ],
        "answer": "leader",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-022",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 22,
    "word": "listener",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who listens",
    "example": "A good listener pays attention when others speak.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 26,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'listener' mean?",
        "options": [
          "a person who listens",
          "to be a member of a group or to be in the right place",
          "a conversation in which people share ideas or opinions",
          "a person or animal that is a boy or man"
        ],
        "answer": "a person who listens",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A good ______ pays attention when others speak.",
        "options": [
          "listener",
          "gallery",
          "colleague",
          "couple"
        ],
        "answer": "listener",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who listens",
        "options": [
          "listener",
          "gallery",
          "colleague",
          "couple"
        ],
        "answer": "listener",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-023",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 23,
    "word": "personality",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the qualities and behaviour that make a person different from others",
    "example": "Her cheerful personality makes her easy to talk to.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 27,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'personality' mean?",
        "options": [
          "the qualities and behaviour that make a person different from others",
          "the sound or act of laughing",
          "a person who plays or creates music",
          "to share information, ideas or feelings with others"
        ],
        "answer": "the qualities and behaviour that make a person different from others",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Her cheerful ______ makes her easy to talk to.",
        "options": [
          "personality",
          "tradition",
          "colleague",
          "recipe"
        ],
        "answer": "personality",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the qualities and behaviour that make a person different from others",
        "options": [
          "personality",
          "tradition",
          "colleague",
          "recipe"
        ],
        "answer": "personality",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-024",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 24,
    "word": "relationship",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the way two or more people are connected",
    "example": "Good communication can strengthen a friendship and relationship.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 28,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'relationship' mean?",
        "options": [
          "the way two or more people are connected",
          "the qualities that make a person behave in a certain way",
          "to say hello or welcome someone",
          "a formal talk given to a group of people"
        ],
        "answer": "the way two or more people are connected",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Good communication can strengthen a friendship and ______.",
        "options": [
          "relationship",
          "comment",
          "male",
          "appearance"
        ],
        "answer": "relationship",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the way two or more people are connected",
        "options": [
          "relationship",
          "comment",
          "male",
          "appearance"
        ],
        "answer": "relationship",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-025",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 25,
    "word": "social",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "relating to people meeting and spending time together",
    "example": "The school organised a social event for students and parents.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 29,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'social' mean?",
        "options": [
          "relating to people meeting and spending time together",
          "the qualities and behaviour that make a person different from others",
          "the flavour of food or drink; to try food or drink",
          "the way two or more people are connected"
        ],
        "answer": "relating to people meeting and spending time together",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The school organised a ______ event for students and parents.",
        "options": [
          "social",
          "classical",
          "careful",
          "crowded"
        ],
        "answer": "social",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: relating to people meeting and spending time together",
        "options": [
          "social",
          "classical",
          "careful",
          "crowded"
        ],
        "answer": "social",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-026",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 26,
    "word": "wedding",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a ceremony in which two people get married",
    "example": "We wore traditional clothes to my cousin's wedding.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 30,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wedding' mean?",
        "options": [
          "a ceremony in which two people get married",
          "a person who travels from one place to another",
          "a person whose job is to cook food professionally",
          "a person who plays or creates music"
        ],
        "answer": "a ceremony in which two people get married",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We wore traditional clothes to my cousin's ______.",
        "options": [
          "wedding",
          "tourism",
          "invitation",
          "female"
        ],
        "answer": "wedding",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a ceremony in which two people get married",
        "options": [
          "wedding",
          "tourism",
          "invitation",
          "female"
        ],
        "answer": "wedding",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-027",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 27,
    "word": "greet",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to say hello or welcome someone",
    "example": "We greeted our guests at the door.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 31,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'greet' mean?",
        "options": [
          "to say hello or welcome someone",
          "a journey to visit several places for interest or learning",
          "the way two or more people are connected",
          "a person admired for courage or good actions"
        ],
        "answer": "to say hello or welcome someone",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We ______ our guests at the door.",
        "options": [
          "greet",
          "invite",
          "communicate",
          "celebrate"
        ],
        "answer": "greet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to say hello or welcome someone",
        "options": [
          "greet",
          "invite",
          "communicate",
          "celebrate"
        ],
        "answer": "greet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-028",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 28,
    "word": "invitation",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a written or spoken request asking someone to come to an event",
    "example": "I received an invitation to my friend's birthday party.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 32,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'invitation' mean?",
        "options": [
          "a written or spoken request asking someone to come to an event",
          "the qualities and behaviour that make a person different from others",
          "the activity or business of people travelling for holidays",
          "a person you work with"
        ],
        "answer": "a written or spoken request asking someone to come to an event",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I received an ______ to my friend's birthday party.",
        "options": [
          "invitation",
          "laughter",
          "wedding",
          "colleague"
        ],
        "answer": "invitation",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a written or spoken request asking someone to come to an event",
        "options": [
          "invitation",
          "laughter",
          "wedding",
          "colleague"
        ],
        "answer": "invitation",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-029",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 29,
    "word": "invite",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to ask someone to come to an event or place",
    "example": "We invited our neighbours to the celebration.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 33,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'invite' mean?",
        "options": [
          "to ask someone to come to an event or place",
          "the way a person or thing looks",
          "a person or animal that is a boy or man",
          "a building where Christians meet for worship"
        ],
        "answer": "to ask someone to come to an event or place",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We ______ our neighbours to the celebration.",
        "options": [
          "invite",
          "belong",
          "greet",
          "behave"
        ],
        "answer": "invite",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to ask someone to come to an event or place",
        "options": [
          "invite",
          "belong",
          "greet",
          "behave"
        ],
        "answer": "invite",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-030",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 30,
    "word": "joke",
    "partOfSpeech": "n./v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "something said or done to make people laugh",
    "example": "Amir told a joke that made everyone laugh.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 34,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'joke' mean?",
        "options": [
          "something said or done to make people laugh",
          "a picture made with a pen or pencil",
          "a large group of people in one place",
          "from or connected with another country"
        ],
        "answer": "something said or done to make people laugh",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Amir told a ______ that made everyone laugh.",
        "options": [
          "joke",
          "taste",
          "chat",
          "care"
        ],
        "answer": "joke",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: something said or done to make people laugh",
        "options": [
          "joke",
          "taste",
          "chat",
          "care"
        ],
        "answer": "joke",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-031",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 31,
    "word": "laughter",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the sound or act of laughing",
    "example": "The room was full of laughter during the comedy show.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 35,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'laughter' mean?",
        "options": [
          "the sound or act of laughing",
          "something said or done to make people laugh",
          "to say hello or welcome someone",
          "the activity or business of people travelling for holidays"
        ],
        "answer": "the sound or act of laughing",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The room was full of ______ during the comedy show.",
        "options": [
          "laughter",
          "behaviour",
          "gallery",
          "church"
        ],
        "answer": "laughter",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the sound or act of laughing",
        "options": [
          "laughter",
          "behaviour",
          "gallery",
          "church"
        ],
        "answer": "laughter",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-032",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 32,
    "word": "comment",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "something that you say or write to give an opinion",
    "example": "She made a positive comment about the performance.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 36,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'comment' mean?",
        "options": [
          "something that you say or write to give an opinion",
          "a play, film or story about serious or exciting events",
          "a belief or custom passed from one generation to another",
          "a formal talk given to a group of people"
        ],
        "answer": "something that you say or write to give an opinion",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She made a positive ______ about the performance.",
        "options": [
          "comment",
          "wedding",
          "colleague",
          "tradition"
        ],
        "answer": "comment",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: something that you say or write to give an opinion",
        "options": [
          "comment",
          "wedding",
          "colleague",
          "tradition"
        ],
        "answer": "comment",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-033",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 33,
    "word": "argue",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to speak angrily because you disagree",
    "example": "The two friends argued about which song to choose.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 37,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'argue' mean?",
        "options": [
          "to speak angrily because you disagree",
          "a person you work with",
          "popular styles of clothes, hair or appearance",
          "decorative objects worn on the body, such as rings or necklaces"
        ],
        "answer": "to speak angrily because you disagree",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The two friends ______ about which song to choose.",
        "options": [
          "argue",
          "greet",
          "celebrate",
          "disagree"
        ],
        "answer": "argue",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to speak angrily because you disagree",
        "options": [
          "argue",
          "greet",
          "celebrate",
          "disagree"
        ],
        "answer": "argue",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-034",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 34,
    "word": "argument",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "an angry disagreement between people",
    "example": "They solved their argument by talking calmly.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 38,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'argument' mean?",
        "options": [
          "an angry disagreement between people",
          "a picture made with a pen or pencil",
          "a place where works of art are shown",
          "something said or done to make people laugh"
        ],
        "answer": "an angry disagreement between people",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "They solved their ______ by talking calmly.",
        "options": [
          "argument",
          "tour",
          "recipe",
          "clothing"
        ],
        "answer": "argument",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: an angry disagreement between people",
        "options": [
          "argument",
          "tour",
          "recipe",
          "clothing"
        ],
        "answer": "argument",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-035",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 35,
    "word": "disagree",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to have a different opinion from someone",
    "example": "I disagree with that idea, but I respect your opinion.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 39,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'disagree' mean?",
        "options": [
          "to have a different opinion from someone",
          "something that you say or write to give an opinion",
          "something said or done to make people laugh",
          "full of many people"
        ],
        "answer": "to have a different opinion from someone",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ with that idea, but I respect your opinion.",
        "options": [
          "disagree",
          "belong",
          "celebrate",
          "greet"
        ],
        "answer": "disagree",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to have a different opinion from someone",
        "options": [
          "disagree",
          "belong",
          "celebrate",
          "greet"
        ],
        "answer": "disagree",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-036",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 36,
    "word": "discussion",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a conversation in which people share ideas or opinions",
    "example": "Our group had a discussion about local traditions.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 40,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'discussion' mean?",
        "options": [
          "a conversation in which people share ideas or opinions",
          "instructions for preparing and cooking food",
          "the activity or business of people travelling for holidays",
          "a person who writes books or other texts"
        ],
        "answer": "a conversation in which people share ideas or opinions",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our group had a ______ about local traditions.",
        "options": [
          "discussion",
          "celebrity",
          "listener",
          "speech"
        ],
        "answer": "discussion",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a conversation in which people share ideas or opinions",
        "options": [
          "discussion",
          "celebrity",
          "listener",
          "speech"
        ],
        "answer": "discussion",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-037",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 37,
    "word": "reply",
    "partOfSpeech": "v./n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to answer someone in speech or writing",
    "example": "He replied to the message after school.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 41,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'reply' mean?",
        "options": [
          "to answer someone in speech or writing",
          "a famous person, especially in entertainment or media",
          "something said or done to make people laugh",
          "an artist who creates pictures using paint"
        ],
        "answer": "to answer someone in speech or writing",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He ______ to the message after school.",
        "options": [
          "reply",
          "chat",
          "joke",
          "care"
        ],
        "answer": "reply",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to answer someone in speech or writing",
        "options": [
          "reply",
          "chat",
          "joke",
          "care"
        ],
        "answer": "reply",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-038",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 38,
    "word": "speech",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a formal talk given to a group of people",
    "example": "The head prefect gave a short speech during assembly.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 42,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'speech' mean?",
        "options": [
          "a formal talk given to a group of people",
          "to act in a particular way",
          "a place where works of art are shown",
          "an artist who creates pictures using paint"
        ],
        "answer": "a formal talk given to a group of people",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The head prefect gave a short ______ during assembly.",
        "options": [
          "speech",
          "laughter",
          "uniform",
          "voice"
        ],
        "answer": "speech",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a formal talk given to a group of people",
        "options": [
          "speech",
          "laughter",
          "uniform",
          "voice"
        ],
        "answer": "speech",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-039",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 39,
    "word": "voice",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the sound a person makes when speaking or singing",
    "example": "The singer has a clear and powerful voice.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 43,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'voice' mean?",
        "options": [
          "the sound a person makes when speaking or singing",
          "the way a person or thing looks",
          "following customs or ways that have existed for a long time",
          "a ceremony in which two people get married"
        ],
        "answer": "the sound a person makes when speaking or singing",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The singer has a clear and powerful ______.",
        "options": [
          "voice",
          "wedding",
          "community",
          "human"
        ],
        "answer": "voice",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the sound a person makes when speaking or singing",
        "options": [
          "voice",
          "wedding",
          "community",
          "human"
        ],
        "answer": "voice",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-040",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 40,
    "word": "celebrate",
    "partOfSpeech": "v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "to do something special for an important event or occasion",
    "example": "Families celebrate Hari Raya in different ways.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 44,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'celebrate' mean?",
        "options": [
          "to do something special for an important event or occasion",
          "popular styles of clothes, hair or appearance",
          "the qualities and behaviour that make a person different from others",
          "something that you say or write to give an opinion"
        ],
        "answer": "to do something special for an important event or occasion",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Families ______ Hari Raya in different ways.",
        "options": [
          "celebrate",
          "behave",
          "disagree",
          "greet"
        ],
        "answer": "celebrate",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: to do something special for an important event or occasion",
        "options": [
          "celebrate",
          "behave",
          "disagree",
          "greet"
        ],
        "answer": "celebrate",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-041",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 41,
    "word": "fashion",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "popular styles of clothes, hair or appearance",
    "example": "Traditional patterns can also influence modern fashion.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 45,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fashion' mean?",
        "options": [
          "popular styles of clothes, hair or appearance",
          "a formal talk given to a group of people",
          "attention or help given to someone or something",
          "an angry disagreement between people"
        ],
        "answer": "popular styles of clothes, hair or appearance",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Traditional patterns can also influence modern ______.",
        "options": [
          "fashion",
          "audience",
          "chef",
          "painter"
        ],
        "answer": "fashion",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: popular styles of clothes, hair or appearance",
        "options": [
          "fashion",
          "audience",
          "chef",
          "painter"
        ],
        "answer": "fashion",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-042",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 42,
    "word": "clothing",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "clothes in general",
    "example": "The museum displays traditional clothing from Sabah.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 46,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'clothing' mean?",
        "options": [
          "clothes in general",
          "an artist who creates pictures using paint",
          "to share information, ideas or feelings with others",
          "a large strong building where kings or important people once lived"
        ],
        "answer": "clothes in general",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The museum displays traditional ______ from Sabah.",
        "options": [
          "clothing",
          "laughter",
          "drama",
          "tour"
        ],
        "answer": "clothing",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: clothes in general",
        "options": [
          "clothing",
          "laughter",
          "drama",
          "tour"
        ],
        "answer": "clothing",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-043",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 43,
    "word": "uniform",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "special clothes worn by members of a school or group",
    "example": "Students wear their school uniform on weekdays.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 47,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'uniform' mean?",
        "options": [
          "special clothes worn by members of a school or group",
          "the activity or business of people travelling for holidays",
          "clothes in general",
          "to say hello or welcome someone"
        ],
        "answer": "special clothes worn by members of a school or group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Students wear their school ______ on weekdays.",
        "options": [
          "uniform",
          "female",
          "chef",
          "couple"
        ],
        "answer": "uniform",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: special clothes worn by members of a school or group",
        "options": [
          "uniform",
          "female",
          "chef",
          "couple"
        ],
        "answer": "uniform",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-044",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 44,
    "word": "jewellery",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "decorative objects worn on the body, such as rings or necklaces",
    "example": "She wore traditional jewellery with her costume.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 48,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'jewellery' mean?",
        "options": [
          "decorative objects worn on the body, such as rings or necklaces",
          "a person who plays or creates music",
          "the way two or more people are connected",
          "an adult woman"
        ],
        "answer": "decorative objects worn on the body, such as rings or necklaces",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She wore traditional ______ with her costume.",
        "options": [
          "jewellery",
          "personality",
          "traveller",
          "audience"
        ],
        "answer": "jewellery",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: decorative objects worn on the body, such as rings or necklaces",
        "options": [
          "jewellery",
          "personality",
          "traveller",
          "audience"
        ],
        "answer": "jewellery",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-045",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 45,
    "word": "gift",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "something given to another person without payment",
    "example": "We bought a small gift for our teacher.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 49,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'gift' mean?",
        "options": [
          "something given to another person without payment",
          "a person who travels from one place to another",
          "a child or young person",
          "a person who is invited to visit a place or event"
        ],
        "answer": "something given to another person without payment",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We bought a small ______ for our teacher.",
        "options": [
          "gift",
          "tourism",
          "clothing",
          "relationship"
        ],
        "answer": "gift",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: something given to another person without payment",
        "options": [
          "gift",
          "tourism",
          "clothing",
          "relationship"
        ],
        "answer": "gift",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-046",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 46,
    "word": "chef",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person whose job is to cook food professionally",
    "example": "The chef prepared a local dish for the visitors.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 50,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'chef' mean?",
        "options": [
          "a person whose job is to cook food professionally",
          "a famous person, especially in entertainment or media",
          "to ask someone to come to an event or place",
          "instructions for preparing and cooking food"
        ],
        "answer": "a person whose job is to cook food professionally",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ prepared a local dish for the visitors.",
        "options": [
          "chef",
          "painter",
          "castle",
          "speech"
        ],
        "answer": "chef",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person whose job is to cook food professionally",
        "options": [
          "chef",
          "painter",
          "castle",
          "speech"
        ],
        "answer": "chef",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-047",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 47,
    "word": "recipe",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "instructions for preparing and cooking food",
    "example": "My grandmother taught me her recipe for chicken soup.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 51,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'recipe' mean?",
        "options": [
          "instructions for preparing and cooking food",
          "a person who travels from one place to another",
          "relating to a traditional style of music, art or literature",
          "to do something special for an important event or occasion"
        ],
        "answer": "instructions for preparing and cooking food",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My grandmother taught me her ______ for chicken soup.",
        "options": [
          "recipe",
          "speech",
          "colleague",
          "female"
        ],
        "answer": "recipe",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: instructions for preparing and cooking food",
        "options": [
          "recipe",
          "speech",
          "colleague",
          "female"
        ],
        "answer": "recipe",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-048",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 48,
    "word": "taste",
    "partOfSpeech": "n./v.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the flavour of food or drink; to try food or drink",
    "example": "The soup has a spicy taste.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 52,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'taste' mean?",
        "options": [
          "the flavour of food or drink; to try food or drink",
          "something that you say or write to give an opinion",
          "giving attention so that you avoid mistakes or danger",
          "a ceremony in which two people get married"
        ],
        "answer": "the flavour of food or drink; to try food or drink",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The soup has a spicy ______.",
        "options": [
          "taste",
          "joke",
          "chat",
          "reply"
        ],
        "answer": "taste",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the flavour of food or drink; to try food or drink",
        "options": [
          "taste",
          "joke",
          "chat",
          "reply"
        ],
        "answer": "taste",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-049",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 49,
    "word": "tradition",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a belief or custom passed from one generation to another",
    "example": "Visiting relatives during festivals is an important family tradition.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 53,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'tradition' mean?",
        "options": [
          "a belief or custom passed from one generation to another",
          "the way a person or thing looks",
          "a person who guides or is in charge of a group",
          "to have a different opinion from someone"
        ],
        "answer": "a belief or custom passed from one generation to another",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Visiting relatives during festivals is an important family ______.",
        "options": [
          "tradition",
          "guest",
          "tour",
          "couple"
        ],
        "answer": "tradition",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a belief or custom passed from one generation to another",
        "options": [
          "tradition",
          "guest",
          "tour",
          "couple"
        ],
        "answer": "tradition",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-050",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 50,
    "word": "traditional",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "following customs or ways that have existed for a long time",
    "example": "The dancers wore traditional costumes.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 54,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'traditional' mean?",
        "options": [
          "following customs or ways that have existed for a long time",
          "to ask someone to come to an event or place",
          "relating to people meeting and spending time together",
          "a group of people who live in the same area or share something in common"
        ],
        "answer": "following customs or ways that have existed for a long time",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The dancers wore ______ costumes.",
        "options": [
          "traditional",
          "crowded",
          "classical",
          "foreign"
        ],
        "answer": "traditional",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: following customs or ways that have existed for a long time",
        "options": [
          "traditional",
          "crowded",
          "classical",
          "foreign"
        ],
        "answer": "traditional",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-051",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 51,
    "word": "classical",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "relating to a traditional style of music, art or literature",
    "example": "We listened to classical music during the lesson.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 55,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'classical' mean?",
        "options": [
          "relating to a traditional style of music, art or literature",
          "a large strong building where kings or important people once lived",
          "the way a person acts",
          "clothes in general"
        ],
        "answer": "relating to a traditional style of music, art or literature",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We listened to ______ music during the lesson.",
        "options": [
          "classical",
          "national",
          "careful",
          "social"
        ],
        "answer": "classical",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: relating to a traditional style of music, art or literature",
        "options": [
          "classical",
          "national",
          "careful",
          "social"
        ],
        "answer": "classical",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-052",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 52,
    "word": "jazz",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a style of music with a strong rhythm and improvisation",
    "example": "My brother enjoys listening to jazz music.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 56,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'jazz' mean?",
        "options": [
          "a style of music with a strong rhythm and improvisation",
          "full of many people",
          "from or connected with another country",
          "the group of people watching or listening to a performance"
        ],
        "answer": "a style of music with a strong rhythm and improvisation",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My brother enjoys listening to ______ music.",
        "options": [
          "jazz",
          "human",
          "voice",
          "jewellery"
        ],
        "answer": "jazz",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a style of music with a strong rhythm and improvisation",
        "options": [
          "jazz",
          "human",
          "voice",
          "jewellery"
        ],
        "answer": "jazz",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-053",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 53,
    "word": "gallery",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a place where works of art are shown",
    "example": "The class visited an art gallery in the city.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 57,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'gallery' mean?",
        "options": [
          "a place where works of art are shown",
          "full of many people",
          "the way a person acts",
          "a drawing or animated programme, often made for entertainment"
        ],
        "answer": "a place where works of art are shown",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The class visited an art ______ in the city.",
        "options": [
          "gallery",
          "tour",
          "kid",
          "jewellery"
        ],
        "answer": "gallery",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a place where works of art are shown",
        "options": [
          "gallery",
          "tour",
          "kid",
          "jewellery"
        ],
        "answer": "gallery",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-054",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 54,
    "word": "audience",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the group of people watching or listening to a performance",
    "example": "The audience clapped at the end of the dance.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 58,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'audience' mean?",
        "options": [
          "the group of people watching or listening to a performance",
          "a person who listens",
          "a person who guides or is in charge of a group",
          "a person admired for courage or good actions"
        ],
        "answer": "the group of people watching or listening to a performance",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ clapped at the end of the dance.",
        "options": [
          "audience",
          "appearance",
          "gift",
          "comment"
        ],
        "answer": "audience",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the group of people watching or listening to a performance",
        "options": [
          "audience",
          "appearance",
          "gift",
          "comment"
        ],
        "answer": "audience",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-055",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 55,
    "word": "author",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who writes books or other texts",
    "example": "The author visited our school to talk about her new book.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 59,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'author' mean?",
        "options": [
          "a person who writes books or other texts",
          "following customs or ways that have existed for a long time",
          "an artist who creates pictures using paint",
          "a conversation in which people share ideas or opinions"
        ],
        "answer": "a person who writes books or other texts",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ visited our school to talk about her new book.",
        "options": [
          "author",
          "fashion",
          "guest",
          "invitation"
        ],
        "answer": "author",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who writes books or other texts",
        "options": [
          "author",
          "fashion",
          "guest",
          "invitation"
        ],
        "answer": "author",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-056",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 56,
    "word": "celebrity",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a famous person, especially in entertainment or media",
    "example": "The young actor became a local celebrity.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 60,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'celebrity' mean?",
        "options": [
          "a famous person, especially in entertainment or media",
          "something that you say or write to give an opinion",
          "special clothes worn by members of a school or group",
          "to ask someone to come to an event or place"
        ],
        "answer": "a famous person, especially in entertainment or media",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The young actor became a local ______.",
        "options": [
          "celebrity",
          "behaviour",
          "tourism",
          "couple"
        ],
        "answer": "celebrity",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a famous person, especially in entertainment or media",
        "options": [
          "celebrity",
          "behaviour",
          "tourism",
          "couple"
        ],
        "answer": "celebrity",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-057",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 57,
    "word": "comedy",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a funny play, film or show",
    "example": "We watched a comedy and laughed a lot.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 61,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'comedy' mean?",
        "options": [
          "a funny play, film or show",
          "an artist who creates pictures using paint",
          "something that you say or write to give an opinion",
          "a formal talk given to a group of people"
        ],
        "answer": "a funny play, film or show",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We watched a ______ and laughed a lot.",
        "options": [
          "comedy",
          "speech",
          "cartoon",
          "drama"
        ],
        "answer": "comedy",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a funny play, film or show",
        "options": [
          "comedy",
          "speech",
          "cartoon",
          "drama"
        ],
        "answer": "comedy",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-058",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 58,
    "word": "cartoon",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a drawing or animated programme, often made for entertainment",
    "example": "The children watched a cartoon after dinner.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 62,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cartoon' mean?",
        "options": [
          "a drawing or animated programme, often made for entertainment",
          "a person or animal that is a boy or man",
          "a person who travels from one place to another",
          "to be a member of a group or to be in the right place"
        ],
        "answer": "a drawing or animated programme, often made for entertainment",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The children watched a ______ after dinner.",
        "options": [
          "cartoon",
          "argument",
          "speech",
          "male"
        ],
        "answer": "cartoon",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a drawing or animated programme, often made for entertainment",
        "options": [
          "cartoon",
          "argument",
          "speech",
          "male"
        ],
        "answer": "cartoon",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-059",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 59,
    "word": "drama",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a play, film or story about serious or exciting events",
    "example": "Our class performed a short drama for Language Week.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 63,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'drama' mean?",
        "options": [
          "a play, film or story about serious or exciting events",
          "to speak angrily because you disagree",
          "the way a person or thing looks",
          "from or connected with another country"
        ],
        "answer": "a play, film or story about serious or exciting events",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our class performed a short ______ for Language Week.",
        "options": [
          "drama",
          "female",
          "church",
          "traveller"
        ],
        "answer": "drama",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a play, film or story about serious or exciting events",
        "options": [
          "drama",
          "female",
          "church",
          "traveller"
        ],
        "answer": "drama",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-060",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 60,
    "word": "drawing",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a picture made with a pen or pencil",
    "example": "Her drawing of a traditional house won a prize.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 64,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'drawing' mean?",
        "options": [
          "a picture made with a pen or pencil",
          "a person who travels from one place to another",
          "a person you work with",
          "following customs or ways that have existed for a long time"
        ],
        "answer": "a picture made with a pen or pencil",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Her ______ of a traditional house won a prize.",
        "options": [
          "drawing",
          "uniform",
          "painter",
          "tradition"
        ],
        "answer": "drawing",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a picture made with a pen or pencil",
        "options": [
          "drawing",
          "uniform",
          "painter",
          "tradition"
        ],
        "answer": "drawing",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-061",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 61,
    "word": "musician",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who plays or creates music",
    "example": "The musician played the guitar on stage.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 65,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'musician' mean?",
        "options": [
          "a person who plays or creates music",
          "an adult woman",
          "the way a person acts",
          "a person who guides or is in charge of a group"
        ],
        "answer": "a person who plays or creates music",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ played the guitar on stage.",
        "options": [
          "musician",
          "audience",
          "kid",
          "recipe"
        ],
        "answer": "musician",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who plays or creates music",
        "options": [
          "musician",
          "audience",
          "kid",
          "recipe"
        ],
        "answer": "musician",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-062",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 62,
    "word": "painter",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "an artist who creates pictures using paint",
    "example": "The painter showed us how to mix colours.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 66,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'painter' mean?",
        "options": [
          "an artist who creates pictures using paint",
          "a person who writes books or other texts",
          "popular styles of clothes, hair or appearance",
          "a person who listens"
        ],
        "answer": "an artist who creates pictures using paint",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ showed us how to mix colours.",
        "options": [
          "painter",
          "relationship",
          "fashion",
          "gallery"
        ],
        "answer": "painter",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: an artist who creates pictures using paint",
        "options": [
          "painter",
          "relationship",
          "fashion",
          "gallery"
        ],
        "answer": "painter",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-063",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 63,
    "word": "national",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "relating to a whole country",
    "example": "The national flag was raised during the ceremony.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 67,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'national' mean?",
        "options": [
          "relating to a whole country",
          "the qualities and behaviour that make a person different from others",
          "a large strong building where kings or important people once lived",
          "to speak angrily because you disagree"
        ],
        "answer": "relating to a whole country",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ flag was raised during the ceremony.",
        "options": [
          "national",
          "traditional",
          "careful",
          "classical"
        ],
        "answer": "national",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: relating to a whole country",
        "options": [
          "national",
          "traditional",
          "careful",
          "classical"
        ],
        "answer": "national",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-064",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 64,
    "word": "foreign",
    "partOfSpeech": "adj.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "from or connected with another country",
    "example": "We welcomed foreign visitors to our cultural centre.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 68,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'foreign' mean?",
        "options": [
          "from or connected with another country",
          "to say hello or welcome someone",
          "a person admired for courage or good actions",
          "to speak angrily because you disagree"
        ],
        "answer": "from or connected with another country",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We welcomed ______ visitors to our cultural centre.",
        "options": [
          "foreign",
          "classical",
          "careful",
          "crowded"
        ],
        "answer": "foreign",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: from or connected with another country",
        "options": [
          "foreign",
          "classical",
          "careful",
          "crowded"
        ],
        "answer": "foreign",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-065",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 65,
    "word": "tour",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a journey to visit several places for interest or learning",
    "example": "We joined a tour of the historical town.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 69,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'tour' mean?",
        "options": [
          "a journey to visit several places for interest or learning",
          "from or connected with another country",
          "a style of music with a strong rhythm and improvisation",
          "a written or spoken request asking someone to come to an event"
        ],
        "answer": "a journey to visit several places for interest or learning",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We joined a ______ of the historical town.",
        "options": [
          "tour",
          "leader",
          "appearance",
          "wedding"
        ],
        "answer": "tour",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a journey to visit several places for interest or learning",
        "options": [
          "tour",
          "leader",
          "appearance",
          "wedding"
        ],
        "answer": "tour",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-066",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 66,
    "word": "tourism",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "the activity or business of people travelling for holidays",
    "example": "Tourism provides jobs for many local people.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 70,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'tourism' mean?",
        "options": [
          "the activity or business of people travelling for holidays",
          "something said or done to make people laugh",
          "relating to a whole country",
          "to act in a particular way"
        ],
        "answer": "the activity or business of people travelling for holidays",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ provides jobs for many local people.",
        "options": [
          "tourism",
          "fashion",
          "guest",
          "recipe"
        ],
        "answer": "tourism",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the activity or business of people travelling for holidays",
        "options": [
          "tourism",
          "fashion",
          "guest",
          "recipe"
        ],
        "answer": "tourism",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-067",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 67,
    "word": "traveller",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person who travels from one place to another",
    "example": "The traveller asked us about local food.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 71,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'traveller' mean?",
        "options": [
          "a person who travels from one place to another",
          "a play, film or story about serious or exciting events",
          "the group of people watching or listening to a performance",
          "the activity or business of people travelling for holidays"
        ],
        "answer": "a person who travels from one place to another",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ asked us about local food.",
        "options": [
          "traveller",
          "discussion",
          "tourism",
          "uniform"
        ],
        "answer": "traveller",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person who travels from one place to another",
        "options": [
          "traveller",
          "discussion",
          "tourism",
          "uniform"
        ],
        "answer": "traveller",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-068",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 68,
    "word": "castle",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a large strong building where kings or important people once lived",
    "example": "We learned about an old castle in Europe.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 72,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'castle' mean?",
        "options": [
          "a large strong building where kings or important people once lived",
          "a place where works of art are shown",
          "a style of music with a strong rhythm and improvisation",
          "a belief or custom passed from one generation to another"
        ],
        "answer": "a large strong building where kings or important people once lived",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We learned about an old ______ in Europe.",
        "options": [
          "castle",
          "fashion",
          "speech",
          "audience"
        ],
        "answer": "castle",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a large strong building where kings or important people once lived",
        "options": [
          "castle",
          "fashion",
          "speech",
          "audience"
        ],
        "answer": "castle",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-069",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 69,
    "word": "church",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a building where Christians meet for worship",
    "example": "The old church is an important historical building.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 73,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'church' mean?",
        "options": [
          "a building where Christians meet for worship",
          "popular styles of clothes, hair or appearance",
          "a drawing or animated programme, often made for entertainment",
          "a large group of people in one place"
        ],
        "answer": "a building where Christians meet for worship",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The old ______ is an important historical building.",
        "options": [
          "church",
          "discussion",
          "tradition",
          "castle"
        ],
        "answer": "church",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a building where Christians meet for worship",
        "options": [
          "church",
          "discussion",
          "tradition",
          "castle"
        ],
        "answer": "church",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-RA2-070",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 70,
    "word": "hero",
    "partOfSpeech": "n.",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revised A2",
    "meaning": "a person admired for courage or good actions",
    "example": "The firefighter was treated as a hero after saving the child.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 74,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'hero' mean?",
        "options": [
          "a person admired for courage or good actions",
          "a play, film or story about serious or exciting events",
          "a style of music with a strong rhythm and improvisation",
          "a conversation in which people share ideas or opinions"
        ],
        "answer": "a person admired for courage or good actions",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The firefighter was treated as a ______ after saving the child.",
        "options": [
          "hero",
          "leader",
          "male",
          "celebrity"
        ],
        "answer": "hero",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person admired for courage or good actions",
        "options": [
          "hero",
          "leader",
          "male",
          "celebrity"
        ],
        "answer": "hero",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-071",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 71,
    "word": "architecture",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "the design and style of buildings",
    "example": "Sabah has interesting traditional architecture.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 75,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'architecture' mean?",
        "options": [
          "the design and style of buildings",
          "new and different, not copied from something else",
          "all the people who live in a particular area",
          "treating people equally and in a reasonable way"
        ],
        "answer": "the design and style of buildings",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Sabah has interesting traditional ______.",
        "options": [
          "architecture",
          "role",
          "peace",
          "variety"
        ],
        "answer": "architecture",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the design and style of buildings",
        "options": [
          "architecture",
          "role",
          "peace",
          "variety"
        ],
        "answer": "architecture",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-072",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 72,
    "word": "background",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a person's family, education or past experience; the area behind something",
    "example": "Students from different backgrounds joined the programme.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 76,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'background' mean?",
        "options": [
          "a person's family, education or past experience; the area behind something",
          "the process of teaching and learning",
          "television, radio, newspapers and online services that share information",
          "an organisation or activity that helps people in need"
        ],
        "answer": "a person's family, education or past experience; the area behind something",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Students from different ______ joined the programme.",
        "options": [
          "background",
          "knowledge",
          "experience",
          "peace"
        ],
        "answer": "background",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a person's family, education or past experience; the area behind something",
        "options": [
          "background",
          "knowledge",
          "experience",
          "peace"
        ],
        "answer": "background",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-073",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 73,
    "word": "charity",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "an organisation or activity that helps people in need",
    "example": "Our class collected books for a local charity.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 77,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'charity' mean?",
        "options": [
          "an organisation or activity that helps people in need",
          "the position or purpose that someone has in a situation or group",
          "suitable for an official or important situation",
          "having the usual qualities of a particular type or group"
        ],
        "answer": "an organisation or activity that helps people in need",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our class collected books for a local ______.",
        "options": [
          "charity",
          "manner",
          "law",
          "society"
        ],
        "answer": "charity",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: an organisation or activity that helps people in need",
        "options": [
          "charity",
          "manner",
          "law",
          "society"
        ],
        "answer": "charity",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-074",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 74,
    "word": "creative",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "good at producing new and interesting ideas",
    "example": "The students were creative when designing their cultural posters.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 78,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'creative' mean?",
        "options": [
          "good at producing new and interesting ideas",
          "relaxed and not official",
          "knowledge or skill gained by doing or seeing something",
          "an official rule made by a government"
        ],
        "answer": "good at producing new and interesting ideas",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The students were ______ when designing their cultural posters.",
        "options": [
          "creative",
          "informal",
          "typical",
          "original"
        ],
        "answer": "creative",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: good at producing new and interesting ideas",
        "options": [
          "creative",
          "informal",
          "typical",
          "original"
        ],
        "answer": "creative",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-075",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 75,
    "word": "fair",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "treating people equally and in a reasonable way",
    "example": "A good leader should be fair to everyone.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 79,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fair' mean?",
        "options": [
          "treating people equally and in a reasonable way",
          "relaxed and not official",
          "all the people who live in a particular area",
          "having the usual qualities of a particular type or group"
        ],
        "answer": "treating people equally and in a reasonable way",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A good leader should be ______ to everyone.",
        "options": [
          "fair",
          "informal",
          "formal",
          "typical"
        ],
        "answer": "fair",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: treating people equally and in a reasonable way",
        "options": [
          "fair",
          "informal",
          "formal",
          "typical"
        ],
        "answer": "fair",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-076",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 76,
    "word": "formal",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "suitable for an official or important situation",
    "example": "He wore formal clothes to the school ceremony.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 80,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'formal' mean?",
        "options": [
          "suitable for an official or important situation",
          "an organisation or activity that helps people in need",
          "having the usual qualities of a particular type or group",
          "different from what is normal or expected"
        ],
        "answer": "suitable for an official or important situation",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He wore ______ clothes to the school ceremony.",
        "options": [
          "formal",
          "international",
          "united",
          "fair"
        ],
        "answer": "formal",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: suitable for an official or important situation",
        "options": [
          "formal",
          "international",
          "united",
          "fair"
        ],
        "answer": "formal",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-077",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 77,
    "word": "informal",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "relaxed and not official",
    "example": "We had an informal chat with the visiting teacher.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 81,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'informal' mean?",
        "options": [
          "relaxed and not official",
          "an organisation or activity that helps people in need",
          "new and different, not copied from something else",
          "different from what is normal or expected"
        ],
        "answer": "relaxed and not official",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We had an ______ chat with the visiting teacher.",
        "options": [
          "informal",
          "formal",
          "creative",
          "typical"
        ],
        "answer": "informal",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: relaxed and not official",
        "options": [
          "informal",
          "formal",
          "creative",
          "typical"
        ],
        "answer": "informal",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-078",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 78,
    "word": "individual",
    "partOfSpeech": "n./adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "one person considered separately from a group",
    "example": "Each individual has different strengths and interests.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 82,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'individual' mean?",
        "options": [
          "one person considered separately from a group",
          "a number of different types of something",
          "a person's family, education or past experience; the area behind something",
          "information and understanding gained through learning or experience"
        ],
        "answer": "one person considered separately from a group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Each ______ has different strengths and interests.",
        "options": [
          "individual",
          "education",
          "manner",
          "role"
        ],
        "answer": "individual",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: one person considered separately from a group",
        "options": [
          "individual",
          "education",
          "manner",
          "role"
        ],
        "answer": "individual",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-079",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 79,
    "word": "international",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "involving or relating to more than one country",
    "example": "Our school joined an international cultural exchange.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 83,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'international' mean?",
        "options": [
          "involving or relating to more than one country",
          "television, radio, newspapers and online services that share information",
          "a person's family, education or past experience; the area behind something",
          "an official rule made by a government"
        ],
        "answer": "involving or relating to more than one country",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our school joined an ______ cultural exchange.",
        "options": [
          "international",
          "informal",
          "formal",
          "original"
        ],
        "answer": "international",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: involving or relating to more than one country",
        "options": [
          "international",
          "informal",
          "formal",
          "original"
        ],
        "answer": "international",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-080",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 80,
    "word": "media",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "television, radio, newspapers and online services that share information",
    "example": "Social media can spread news very quickly.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 84,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'media' mean?",
        "options": [
          "television, radio, newspapers and online services that share information",
          "help or encouragement given to someone; to help or encourage",
          "knowledge or skill gained by doing or seeing something",
          "information and understanding gained through learning or experience"
        ],
        "answer": "television, radio, newspapers and online services that share information",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Social ______ can spread news very quickly.",
        "options": [
          "media",
          "charity",
          "education",
          "law"
        ],
        "answer": "media",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: television, radio, newspapers and online services that share information",
        "options": [
          "media",
          "charity",
          "education",
          "law"
        ],
        "answer": "media",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-081",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 81,
    "word": "original",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "new and different, not copied from something else",
    "example": "Her design was simple but original.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 85,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'original' mean?",
        "options": [
          "new and different, not copied from something else",
          "knowledge or skill gained by doing or seeing something",
          "information and understanding gained through learning or experience",
          "a main administrative area of a country"
        ],
        "answer": "new and different, not copied from something else",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Her design was simple but ______.",
        "options": [
          "original",
          "creative",
          "unusual",
          "formal"
        ],
        "answer": "original",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: new and different, not copied from something else",
        "options": [
          "original",
          "creative",
          "unusual",
          "formal"
        ],
        "answer": "original",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-082",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 82,
    "word": "public",
    "partOfSpeech": "adj./n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "relating to or available for everyone",
    "example": "The public library is open to all members of the community.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 86,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'public' mean?",
        "options": [
          "relating to or available for everyone",
          "good at producing new and interesting ideas",
          "a situation in which people are not fighting or at war",
          "the group of people who officially control and manage a country or state"
        ],
        "answer": "relating to or available for everyone",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ library is open to all members of the community.",
        "options": [
          "public",
          "experience",
          "media",
          "background"
        ],
        "answer": "public",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: relating to or available for everyone",
        "options": [
          "public",
          "experience",
          "media",
          "background"
        ],
        "answer": "public",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-083",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 83,
    "word": "population",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "all the people who live in a particular area",
    "example": "The town has a growing population.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 87,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'population' mean?",
        "options": [
          "all the people who live in a particular area",
          "information and understanding gained through learning or experience",
          "the design and style of buildings",
          "relaxed and not official"
        ],
        "answer": "all the people who live in a particular area",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The town has a growing ______.",
        "options": [
          "population",
          "education",
          "government",
          "charity"
        ],
        "answer": "population",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: all the people who live in a particular area",
        "options": [
          "population",
          "education",
          "government",
          "charity"
        ],
        "answer": "population",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-084",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 84,
    "word": "region",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a particular area of a country or the world",
    "example": "This region is famous for its traditional food.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 88,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'region' mean?",
        "options": [
          "a particular area of a country or the world",
          "a number of different types of something",
          "a sign, object or image that represents an idea or group",
          "people living together in an organised community"
        ],
        "answer": "a particular area of a country or the world",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This ______ is famous for its traditional food.",
        "options": [
          "region",
          "symbol",
          "charity",
          "role"
        ],
        "answer": "region",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a particular area of a country or the world",
        "options": [
          "region",
          "symbol",
          "charity",
          "role"
        ],
        "answer": "region",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-085",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 85,
    "word": "role",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "the position or purpose that someone has in a situation or group",
    "example": "Parents play an important role in a child's education.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 89,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'role' mean?",
        "options": [
          "the position or purpose that someone has in a situation or group",
          "information and understanding gained through learning or experience",
          "relaxed and not official",
          "involving or relating to more than one country"
        ],
        "answer": "the position or purpose that someone has in a situation or group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Parents play an important ______ in a child's education.",
        "options": [
          "role",
          "education",
          "media",
          "architecture"
        ],
        "answer": "role",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the position or purpose that someone has in a situation or group",
        "options": [
          "role",
          "education",
          "media",
          "architecture"
        ],
        "answer": "role",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-086",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 86,
    "word": "society",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "people living together in an organised community",
    "example": "Respect and cooperation are important in society.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 90,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'society' mean?",
        "options": [
          "people living together in an organised community",
          "information and understanding gained through learning or experience",
          "joined together and working as one group",
          "suitable for an official or important situation"
        ],
        "answer": "people living together in an organised community",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Respect and cooperation are important in ______.",
        "options": [
          "society",
          "background",
          "education",
          "knowledge"
        ],
        "answer": "society",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: people living together in an organised community",
        "options": [
          "society",
          "background",
          "education",
          "knowledge"
        ],
        "answer": "society",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-087",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 87,
    "word": "state",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a main administrative area of a country",
    "example": "Sabah is a state in Malaysia.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 91,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'state' mean?",
        "options": [
          "a main administrative area of a country",
          "different from what is normal or expected",
          "one person considered separately from a group",
          "a sign, object or image that represents an idea or group"
        ],
        "answer": "a main administrative area of a country",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Sabah is a ______ in Malaysia.",
        "options": [
          "state",
          "population",
          "education",
          "charity"
        ],
        "answer": "state",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a main administrative area of a country",
        "options": [
          "state",
          "population",
          "education",
          "charity"
        ],
        "answer": "state",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-088",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 88,
    "word": "symbol",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a sign, object or image that represents an idea or group",
    "example": "The hibiscus is a national symbol of Malaysia.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 92,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'symbol' mean?",
        "options": [
          "a sign, object or image that represents an idea or group",
          "a number of different types of something",
          "good at producing new and interesting ideas",
          "information and understanding gained through learning or experience"
        ],
        "answer": "a sign, object or image that represents an idea or group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The hibiscus is a national ______ of Malaysia.",
        "options": [
          "symbol",
          "education",
          "public",
          "architecture"
        ],
        "answer": "symbol",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a sign, object or image that represents an idea or group",
        "options": [
          "symbol",
          "education",
          "public",
          "architecture"
        ],
        "answer": "symbol",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-089",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 89,
    "word": "united",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "joined together and working as one group",
    "example": "The community stayed united during the difficult time.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 93,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'united' mean?",
        "options": [
          "joined together and working as one group",
          "an organisation or activity that helps people in need",
          "suitable for an official or important situation",
          "all the people who live in a particular area"
        ],
        "answer": "joined together and working as one group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The community stayed ______ during the difficult time.",
        "options": [
          "united",
          "informal",
          "unusual",
          "creative"
        ],
        "answer": "united",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: joined together and working as one group",
        "options": [
          "united",
          "informal",
          "unusual",
          "creative"
        ],
        "answer": "united",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-090",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 90,
    "word": "unusual",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "different from what is normal or expected",
    "example": "The artist used unusual materials in the sculpture.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 94,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'unusual' mean?",
        "options": [
          "different from what is normal or expected",
          "help or encouragement given to someone; to help or encourage",
          "a number of different types of something",
          "the design and style of buildings"
        ],
        "answer": "different from what is normal or expected",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The artist used ______ materials in the sculpture.",
        "options": [
          "unusual",
          "international",
          "united",
          "creative"
        ],
        "answer": "unusual",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: different from what is normal or expected",
        "options": [
          "unusual",
          "international",
          "united",
          "creative"
        ],
        "answer": "unusual",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-091",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 91,
    "word": "variety",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a number of different types of something",
    "example": "Malaysia has a variety of cultures and traditions.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 95,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'variety' mean?",
        "options": [
          "a number of different types of something",
          "the design and style of buildings",
          "a sign, object or image that represents an idea or group",
          "good at producing new and interesting ideas"
        ],
        "answer": "a number of different types of something",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Malaysia has a ______ of cultures and traditions.",
        "options": [
          "variety",
          "knowledge",
          "peace",
          "region"
        ],
        "answer": "variety",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a number of different types of something",
        "options": [
          "variety",
          "knowledge",
          "peace",
          "region"
        ],
        "answer": "variety",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-092",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 92,
    "word": "typical",
    "partOfSpeech": "adj.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "having the usual qualities of a particular type or group",
    "example": "Rice is a typical part of many Malaysian meals.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 96,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'typical' mean?",
        "options": [
          "having the usual qualities of a particular type or group",
          "help or encouragement given to someone; to help or encourage",
          "an organisation or activity that helps people in need",
          "relaxed and not official"
        ],
        "answer": "having the usual qualities of a particular type or group",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Rice is a ______ part of many Malaysian meals.",
        "options": [
          "typical",
          "informal",
          "united",
          "formal"
        ],
        "answer": "typical",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: having the usual qualities of a particular type or group",
        "options": [
          "typical",
          "informal",
          "united",
          "formal"
        ],
        "answer": "typical",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-093",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 93,
    "word": "government",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "the group of people who officially control and manage a country or state",
    "example": "The government provides many public services.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 97,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'government' mean?",
        "options": [
          "the group of people who officially control and manage a country or state",
          "a way of doing something or behaving",
          "different from what is normal or expected",
          "involving or relating to more than one country"
        ],
        "answer": "the group of people who officially control and manage a country or state",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ provides many public services.",
        "options": [
          "government",
          "individual",
          "population",
          "symbol"
        ],
        "answer": "government",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the group of people who officially control and manage a country or state",
        "options": [
          "government",
          "individual",
          "population",
          "symbol"
        ],
        "answer": "government",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-094",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 94,
    "word": "law",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "an official rule made by a government",
    "example": "Everyone must follow the law.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 98,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'law' mean?",
        "options": [
          "an official rule made by a government",
          "the design and style of buildings",
          "relating to or available for everyone",
          "one person considered separately from a group"
        ],
        "answer": "an official rule made by a government",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Everyone must follow the ______.",
        "options": [
          "law",
          "charity",
          "variety",
          "manner"
        ],
        "answer": "law",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: an official rule made by a government",
        "options": [
          "law",
          "charity",
          "variety",
          "manner"
        ],
        "answer": "law",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-095",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 95,
    "word": "peace",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a situation in which people are not fighting or at war",
    "example": "The students made posters about peace and friendship.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 99,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'peace' mean?",
        "options": [
          "a situation in which people are not fighting or at war",
          "the group of people who officially control and manage a country or state",
          "the process of teaching and learning",
          "relaxed and not official"
        ],
        "answer": "a situation in which people are not fighting or at war",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The students made posters about ______ and friendship.",
        "options": [
          "peace",
          "role",
          "charity",
          "individual"
        ],
        "answer": "peace",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a situation in which people are not fighting or at war",
        "options": [
          "peace",
          "role",
          "charity",
          "individual"
        ],
        "answer": "peace",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-096",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 96,
    "word": "support",
    "partOfSpeech": "n./v.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "help or encouragement given to someone; to help or encourage",
    "example": "Friends can support each other during difficult times.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 100,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'support' mean?",
        "options": [
          "help or encouragement given to someone; to help or encourage",
          "good at producing new and interesting ideas",
          "relaxed and not official",
          "all the people who live in a particular area"
        ],
        "answer": "help or encouragement given to someone; to help or encourage",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Friends can ______ each other during difficult times.",
        "options": [
          "support",
          "symbol",
          "united",
          "variety"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: help or encouragement given to someone; to help or encourage",
        "options": [
          "support",
          "symbol",
          "united",
          "variety"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-097",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 97,
    "word": "knowledge",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "information and understanding gained through learning or experience",
    "example": "Reading helps us increase our knowledge.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 101,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'knowledge' mean?",
        "options": [
          "information and understanding gained through learning or experience",
          "a number of different types of something",
          "the design and style of buildings",
          "all the people who live in a particular area"
        ],
        "answer": "information and understanding gained through learning or experience",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Reading helps us increase our ______.",
        "options": [
          "knowledge",
          "law",
          "public",
          "charity"
        ],
        "answer": "knowledge",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: information and understanding gained through learning or experience",
        "options": [
          "knowledge",
          "law",
          "public",
          "charity"
        ],
        "answer": "knowledge",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-098",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 98,
    "word": "manner",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "a way of doing something or behaving",
    "example": "She spoke to the visitors in a polite manner.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 102,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'manner' mean?",
        "options": [
          "a way of doing something or behaving",
          "treating people equally and in a reasonable way",
          "knowledge or skill gained by doing or seeing something",
          "joined together and working as one group"
        ],
        "answer": "a way of doing something or behaving",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She spoke to the visitors in a polite ______.",
        "options": [
          "manner",
          "region",
          "state",
          "role"
        ],
        "answer": "manner",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: a way of doing something or behaving",
        "options": [
          "manner",
          "region",
          "state",
          "role"
        ],
        "answer": "manner",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-099",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 99,
    "word": "education",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "the process of teaching and learning",
    "example": "Education helps young people prepare for the future.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 103,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'education' mean?",
        "options": [
          "the process of teaching and learning",
          "a main administrative area of a country",
          "a sign, object or image that represents an idea or group",
          "new and different, not copied from something else"
        ],
        "answer": "the process of teaching and learning",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ helps young people prepare for the future.",
        "options": [
          "education",
          "region",
          "variety",
          "individual"
        ],
        "answer": "education",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: the process of teaching and learning",
        "options": [
          "education",
          "region",
          "variety",
          "individual"
        ],
        "answer": "education",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "PC-A2H-100",
    "themeCode": "PC",
    "theme": "People and Culture",
    "themeCategory": "People and Culture",
    "number": 100,
    "word": "experience",
    "partOfSpeech": "n.",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "knowledge or skill gained by doing or seeing something",
    "example": "The cultural camp was a valuable experience for the students.",
    "bm": "",
    "sourceSheet": "People and Culture",
    "sourceRow": 104,
    "meaningOrigin": "generated_supplement",
    "exampleOrigin": "generated_supplement",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'experience' mean?",
        "options": [
          "knowledge or skill gained by doing or seeing something",
          "a main administrative area of a country",
          "good at producing new and interesting ideas",
          "all the people who live in a particular area"
        ],
        "answer": "knowledge or skill gained by doing or seeing something",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cultural camp was a valuable ______ for the students.",
        "options": [
          "experience",
          "manner",
          "law",
          "peace"
        ],
        "answer": "experience",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: knowledge or skill gained by doing or seeing something",
        "options": [
          "experience",
          "manner",
          "law",
          "peace"
        ],
        "answer": "experience",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-001",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 1,
    "word": "computer",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An electronic machine that stores and processes data.",
    "example": "I use my computer to do my homework.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 7,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'computer' mean?",
        "options": [
          "An electronic machine that stores and processes data.",
          "A connection between documents on the internet.",
          "A device shaped like a box with a screen that receives moving images and sound.",
          "The state of burning that produces flames, heat, and light."
        ],
        "answer": "An electronic machine that stores and processes data.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I use my ______ to do my homework.",
        "options": [
          "computer",
          "fire",
          "air",
          "sun"
        ],
        "answer": "computer",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An electronic machine that stores and processes data.",
        "options": [
          "computer",
          "fire",
          "air",
          "sun"
        ],
        "answer": "computer",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-002",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 2,
    "word": "laptop",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small computer that you can carry with you.",
    "example": "She brought her laptop to the library.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 8,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'laptop' mean?",
        "options": [
          "A small computer that you can carry with you.",
          "To store data on a computer.",
          "A short piece of information that you send to someone.",
          "A clear liquid without colour or taste, essential for life."
        ],
        "answer": "A small computer that you can carry with you.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She brought her ______ to the library.",
        "options": [
          "laptop",
          "printer",
          "game",
          "folder"
        ],
        "answer": "laptop",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small computer that you can carry with you.",
        "options": [
          "laptop",
          "printer",
          "game",
          "folder"
        ],
        "answer": "laptop",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-003",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 3,
    "word": "screen",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The flat part of a television or computer where you see pictures or text.",
    "example": "The phone screen is cracked.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 9,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'screen' mean?",
        "options": [
          "The flat part of a television or computer where you see pictures or text.",
          "To store data on a computer.",
          "To make something go from one place to another.",
          "The space over the Earth where the sun, moon, and clouds appear."
        ],
        "answer": "The flat part of a television or computer where you see pictures or text.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The phone ______ is cracked.",
        "options": [
          "screen",
          "computer",
          "planet",
          "mouse"
        ],
        "answer": "screen",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The flat part of a television or computer where you see pictures or text.",
        "options": [
          "screen",
          "computer",
          "planet",
          "mouse"
        ],
        "answer": "screen",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-004",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 4,
    "word": "keyboard",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A set of keys used to type on a computer.",
    "example": "He typed the message quickly on his keyboard.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 10,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'keyboard' mean?",
        "options": [
          "A set of keys used to type on a computer.",
          "An electronic machine that stores and processes data.",
          "To look for something on the internet.",
          "The mixture of gases that surrounds the Earth."
        ],
        "answer": "A set of keys used to type on a computer.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He typed the message quickly on his ______.",
        "options": [
          "keyboard",
          "water",
          "moon",
          "battery"
        ],
        "answer": "keyboard",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A set of keys used to type on a computer.",
        "options": [
          "keyboard",
          "water",
          "moon",
          "battery"
        ],
        "answer": "keyboard",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-005",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 5,
    "word": "mouse",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small device used to move the cursor on a computer screen.",
    "example": "Click the left button on the mouse.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 11,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'mouse' mean?",
        "options": [
          "A small device used to move the cursor on a computer screen.",
          "A white or grey mass in the sky made of drops of water.",
          "Water that falls from the clouds in drops.",
          "A device shaped like a box with a screen that receives moving images and sound."
        ],
        "answer": "A small device used to move the cursor on a computer screen.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Click the left button on the ______.",
        "options": [
          "mouse",
          "sun",
          "space",
          "cloud"
        ],
        "answer": "mouse",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small device used to move the cursor on a computer screen.",
        "options": [
          "mouse",
          "sun",
          "space",
          "cloud"
        ],
        "answer": "mouse",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-006",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 6,
    "word": "tablet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small, flat computer controlled by touching the screen.",
    "example": "My brother plays educational games on his tablet.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 12,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'tablet' mean?",
        "options": [
          "A small, flat computer controlled by touching the screen.",
          "To talk with someone in a friendly way, often online.",
          "A device that sound comes out of.",
          "A device shaped like a box with a screen that receives moving images and sound."
        ],
        "answer": "A small, flat computer controlled by touching the screen.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My brother plays educational games on his ______.",
        "options": [
          "tablet",
          "smartphone",
          "game",
          "file"
        ],
        "answer": "tablet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small, flat computer controlled by touching the screen.",
        "options": [
          "tablet",
          "smartphone",
          "game",
          "file"
        ],
        "answer": "tablet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-007",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 7,
    "word": "smartphone",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A mobile phone that can connect to the internet.",
    "example": "Almost every student has a smartphone today.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 13,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'smartphone' mean?",
        "options": [
          "A mobile phone that can connect to the internet.",
          "Moving air, especially when it moves strongly.",
          "A machine that prints text or pictures on paper.",
          "To talk with someone in a friendly way, often online."
        ],
        "answer": "A mobile phone that can connect to the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Almost every student has a ______ today.",
        "options": [
          "smartphone",
          "smart watch",
          "sun",
          "screen"
        ],
        "answer": "smartphone",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A mobile phone that can connect to the internet.",
        "options": [
          "smartphone",
          "smart watch",
          "sun",
          "screen"
        ],
        "answer": "smartphone",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-008",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 8,
    "word": "camera",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A device used for taking photographs or making videos.",
    "example": "She used her digital camera to take pictures of the stars.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 14,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'camera' mean?",
        "options": [
          "A device used for taking photographs or making videos.",
          "A piece of software you can download to a phone or tablet.",
          "The planet on which we live.",
          "A white or grey mass in the sky made of drops of water."
        ],
        "answer": "A device used for taking photographs or making videos.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She used her digital ______ to take pictures of the stars.",
        "options": [
          "camera",
          "tree",
          "screen",
          "planet"
        ],
        "answer": "camera",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A device used for taking photographs or making videos.",
        "options": [
          "camera",
          "tree",
          "screen",
          "planet"
        ],
        "answer": "camera",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-009",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 9,
    "word": "printer",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A machine that prints text or pictures on paper.",
    "example": "We need to buy more ink for the printer.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 15,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'printer' mean?",
        "options": [
          "A machine that prints text or pictures on paper.",
          "A place on a computer where you can store and organize files.",
          "A living creature that is not a plant or human.",
          "A regular record of your thoughts or opinions on the internet."
        ],
        "answer": "A machine that prints text or pictures on paper.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We need to buy more ink for the ______.",
        "options": [
          "printer",
          "smartphone",
          "tree",
          "game"
        ],
        "answer": "printer",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A machine that prints text or pictures on paper.",
        "options": [
          "printer",
          "smartphone",
          "tree",
          "game"
        ],
        "answer": "printer",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-010",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 10,
    "word": "speaker",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A device that sound comes out of.",
    "example": "The music from the speaker is very loud.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 16,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'speaker' mean?",
        "options": [
          "A device that sound comes out of.",
          "A small computer that you can carry with you.",
          "A piece of equipment used to listen to broadcasts.",
          "A wearable device that tells time and connects to a phone."
        ],
        "answer": "A device that sound comes out of.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The music from the ______ is very loud.",
        "options": [
          "speaker",
          "app",
          "headphones",
          "moon"
        ],
        "answer": "speaker",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A device that sound comes out of.",
        "options": [
          "speaker",
          "app",
          "headphones",
          "moon"
        ],
        "answer": "speaker",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-011",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 11,
    "word": "headphones",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A device you wear over your ears to listen to music privately.",
    "example": "He wore headphones so he wouldn't disturb anyone.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 17,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'headphones' mean?",
        "options": [
          "A device you wear over your ears to listen to music privately.",
          "To begin doing something.",
          "Having a high temperature.",
          "To press a button on a computer mouse."
        ],
        "answer": "A device you wear over your ears to listen to music privately.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He wore ______ so he wouldn't disturb anyone.",
        "options": [
          "headphones",
          "speaker",
          "printer",
          "internet"
        ],
        "answer": "headphones",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A device you wear over your ears to listen to music privately.",
        "options": [
          "headphones",
          "speaker",
          "printer",
          "internet"
        ],
        "answer": "headphones",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-012",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 12,
    "word": "television",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A device shaped like a box with a screen that receives moving images and sound.",
    "example": "We watched a science documentary on television.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 18,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'television' mean?",
        "options": [
          "A device shaped like a box with a screen that receives moving images and sound.",
          "A short piece of information that you send to someone.",
          "A substance used to treat an illness.",
          "A very large, hot ball of gas that shines in the night sky."
        ],
        "answer": "A device shaped like a box with a screen that receives moving images and sound.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We watched a science documentary on ______.",
        "options": [
          "television",
          "rain",
          "email",
          "sky"
        ],
        "answer": "television",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A device shaped like a box with a screen that receives moving images and sound.",
        "options": [
          "television",
          "rain",
          "email",
          "sky"
        ],
        "answer": "television",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-013",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 13,
    "word": "radio",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A piece of equipment used to listen to broadcasts.",
    "example": "My grandfather listens to the news on the radio.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 19,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'radio' mean?",
        "options": [
          "A piece of equipment used to listen to broadcasts.",
          "To make something by putting pieces together.",
          "A system for sending messages electronically.",
          "Connected to the internet."
        ],
        "answer": "A piece of equipment used to listen to broadcasts.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My grandfather listens to the news on the ______.",
        "options": [
          "radio",
          "blog",
          "tree",
          "smart watch"
        ],
        "answer": "radio",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A piece of equipment used to listen to broadcasts.",
        "options": [
          "radio",
          "blog",
          "tree",
          "smart watch"
        ],
        "answer": "radio",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-014",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 14,
    "word": "smart watch",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A wearable device that tells time and connects to a phone.",
    "example": "Her smart watch counts how many steps she takes.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 20,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'smart watch' mean?",
        "options": [
          "A wearable device that tells time and connects to a phone.",
          "To put something damaged back into good condition.",
          "To repair something that is broken.",
          "To use force to move something away from you."
        ],
        "answer": "A wearable device that tells time and connects to a phone.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Her ______ counts how many steps she takes.",
        "options": [
          "smart watch",
          "link",
          "email",
          "air"
        ],
        "answer": "smart watch",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A wearable device that tells time and connects to a phone.",
        "options": [
          "smart watch",
          "link",
          "email",
          "air"
        ],
        "answer": "smart watch",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-015",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Devices & Hardware",
    "number": 15,
    "word": "battery",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An object that provides electricity for things like radios or toys.",
    "example": "My phone is dead; it needs a new battery.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 21,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'battery' mean?",
        "options": [
          "An object that provides electricity for things like radios or toys.",
          "Something that you can hear.",
          "To press a button on a computer mouse.",
          "To store data on a computer."
        ],
        "answer": "An object that provides electricity for things like radios or toys.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My phone is dead; it needs a new ______.",
        "options": [
          "battery",
          "ice",
          "moon",
          "message"
        ],
        "answer": "battery",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An object that provides electricity for things like radios or toys.",
        "options": [
          "battery",
          "ice",
          "moon",
          "message"
        ],
        "answer": "battery",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-016",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 16,
    "word": "internet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The global network connecting millions of computers.",
    "example": "You can find information about the solar system on the internet.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 22,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'internet' mean?",
        "options": [
          "The global network connecting millions of computers.",
          "Water that falls from the clouds in drops.",
          "A wearable device that tells time and connects to a phone.",
          "A small computer that you can carry with you."
        ],
        "answer": "The global network connecting millions of computers.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You can find information about the solar system on the ______.",
        "options": [
          "internet",
          "laptop",
          "smartphone",
          "moon"
        ],
        "answer": "internet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The global network connecting millions of computers.",
        "options": [
          "internet",
          "laptop",
          "smartphone",
          "moon"
        ],
        "answer": "internet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-017",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 17,
    "word": "website",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A place on the internet with information about a person, organization, etc.",
    "example": "The school's website has the new timetable.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 23,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'website' mean?",
        "options": [
          "A place on the internet with information about a person, organization, etc.",
          "To put something damaged back into good condition.",
          "A mobile phone that can connect to the internet.",
          "A connection between documents on the internet."
        ],
        "answer": "A place on the internet with information about a person, organization, etc.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The school's ______ has the new timetable.",
        "options": [
          "website",
          "animal",
          "body",
          "laptop"
        ],
        "answer": "website",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A place on the internet with information about a person, organization, etc.",
        "options": [
          "website",
          "animal",
          "body",
          "laptop"
        ],
        "answer": "website",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-018",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 18,
    "word": "email",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A system for sending messages electronically.",
    "example": "Our teacher sent an email about the science project.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 24,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'email' mean?",
        "options": [
          "A system for sending messages electronically.",
          "A white or grey mass in the sky made of drops of water.",
          "To make something by putting pieces together.",
          "The energy that makes it possible to see things."
        ],
        "answer": "A system for sending messages electronically.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our teacher sent an ______ about the science project.",
        "options": [
          "email",
          "medicine",
          "mouse",
          "game"
        ],
        "answer": "email",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A system for sending messages electronically.",
        "options": [
          "email",
          "medicine",
          "mouse",
          "game"
        ],
        "answer": "email",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-019",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 19,
    "word": "message",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A short piece of information that you send to someone.",
    "example": "I sent him a text message about the experiment.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 25,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'message' mean?",
        "options": [
          "A short piece of information that you send to someone.",
          "The planet on which we live.",
          "A small, flat computer controlled by touching the screen.",
          "A very large, hot ball of gas that shines in the night sky."
        ],
        "answer": "A short piece of information that you send to someone.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I sent him a text ______ about the experiment.",
        "options": [
          "message",
          "wind",
          "star",
          "sun"
        ],
        "answer": "message",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A short piece of information that you send to someone.",
        "options": [
          "message",
          "wind",
          "star",
          "sun"
        ],
        "answer": "message",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-020",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 20,
    "word": "text",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Written words on a screen or page.",
    "example": "Read the text carefully before answering the questions.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 26,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'text' mean?",
        "options": [
          "Written words on a screen or page.",
          "The flat part of a television or computer where you see pictures or text.",
          "To use force to move something away from you.",
          "To put something damaged back into good condition."
        ],
        "answer": "Written words on a screen or page.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Read the ______ carefully before answering the questions.",
        "options": [
          "text",
          "laptop",
          "fire",
          "blog"
        ],
        "answer": "text",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Written words on a screen or page.",
        "options": [
          "text",
          "laptop",
          "fire",
          "blog"
        ],
        "answer": "text",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-021",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 21,
    "word": "video",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A recording of moving pictures and sound.",
    "example": "We watched a video about how plants grow.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 27,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'video' mean?",
        "options": [
          "A recording of moving pictures and sound.",
          "A device you wear over your ears to listen to music privately.",
          "A short piece of information that you send to someone.",
          "Information stored on a computer under a specific name."
        ],
        "answer": "A recording of moving pictures and sound.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We watched a ______ about how plants grow.",
        "options": [
          "video",
          "light",
          "battery",
          "sun"
        ],
        "answer": "video",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A recording of moving pictures and sound.",
        "options": [
          "video",
          "light",
          "battery",
          "sun"
        ],
        "answer": "video",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-022",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 22,
    "word": "online",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Connected to the internet.",
    "example": "Many students prefer playing online games.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 28,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'online' mean?",
        "options": [
          "Connected to the internet.",
          "An entertaining activity played on a computer or console.",
          "A substance used to treat an illness.",
          "A device used for taking photographs or making videos."
        ],
        "answer": "Connected to the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Many students prefer playing ______ games.",
        "options": [
          "online",
          "slow",
          "cold",
          "hot"
        ],
        "answer": "online",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Connected to the internet.",
        "options": [
          "online",
          "slow",
          "cold",
          "hot"
        ],
        "answer": "online",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-023",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 23,
    "word": "offline",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not connected to the internet.",
    "example": "You can play this game even when you are offline.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 29,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'offline' mean?",
        "options": [
          "Not connected to the internet.",
          "The flat part of a television or computer where you see pictures or text.",
          "Moving, happening, or doing something without much speed.",
          "The mixture of gases that surrounds the Earth."
        ],
        "answer": "Not connected to the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You can play this game even when you are ______.",
        "options": [
          "offline",
          "slow",
          "hot",
          "cold"
        ],
        "answer": "offline",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not connected to the internet.",
        "options": [
          "offline",
          "slow",
          "hot",
          "cold"
        ],
        "answer": "offline",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-024",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 24,
    "word": "game",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An entertaining activity played on a computer or console.",
    "example": "He loves playing a new racing game.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 30,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'game' mean?",
        "options": [
          "An entertaining activity played on a computer or console.",
          "A wearable device that tells time and connects to a phone.",
          "A piece of software you can download to a phone or tablet.",
          "To talk with someone in a friendly way, often online."
        ],
        "answer": "An entertaining activity played on a computer or console.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He loves playing a new racing ______.",
        "options": [
          "game",
          "planet",
          "battery",
          "computer"
        ],
        "answer": "game",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An entertaining activity played on a computer or console.",
        "options": [
          "game",
          "planet",
          "battery",
          "computer"
        ],
        "answer": "game",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-025",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 25,
    "word": "app",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A piece of software you can download to a phone or tablet.",
    "example": "I downloaded a new app to learn English.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 31,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'app' mean?",
        "options": [
          "A piece of software you can download to a phone or tablet.",
          "To use force to move something towards you.",
          "The whole physical structure of a person or animal.",
          "A device you wear over your ears to listen to music privately."
        ],
        "answer": "A piece of software you can download to a phone or tablet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I downloaded a new ______ to learn English.",
        "options": [
          "app",
          "keyboard",
          "plant",
          "battery"
        ],
        "answer": "app",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A piece of software you can download to a phone or tablet.",
        "options": [
          "app",
          "keyboard",
          "plant",
          "battery"
        ],
        "answer": "app",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-026",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 26,
    "word": "file",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Information stored on a computer under a specific name.",
    "example": "Please save your file before turning off the computer.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 32,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'file' mean?",
        "options": [
          "Information stored on a computer under a specific name.",
          "To stop a machine or device by pressing a switch.",
          "The planet on which we live.",
          "Connected to the internet."
        ],
        "answer": "Information stored on a computer under a specific name.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Please save your ______ before turning off the computer.",
        "options": [
          "file",
          "sound",
          "smartphone",
          "wind"
        ],
        "answer": "file",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Information stored on a computer under a specific name.",
        "options": [
          "file",
          "sound",
          "smartphone",
          "wind"
        ],
        "answer": "file",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-027",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 27,
    "word": "folder",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A place on a computer where you can store and organize files.",
    "example": "Put all your science notes in one folder.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 33,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'folder' mean?",
        "options": [
          "A place on a computer where you can store and organize files.",
          "Moving or happening quickly.",
          "To use force to move something towards you.",
          "A set of keys used to type on a computer."
        ],
        "answer": "A place on a computer where you can store and organize files.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Put all your science notes in one ______.",
        "options": [
          "folder",
          "printer",
          "cloud",
          "sky"
        ],
        "answer": "folder",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A place on a computer where you can store and organize files.",
        "options": [
          "folder",
          "printer",
          "cloud",
          "sky"
        ],
        "answer": "folder",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-028",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 28,
    "word": "link",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A connection between documents on the internet.",
    "example": "Click this link to watch the science experiment.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 34,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'link' mean?",
        "options": [
          "A connection between documents on the internet.",
          "The whole physical structure of a person or animal.",
          "A small computer that you can carry with you.",
          "A very large, hot ball of gas that shines in the night sky."
        ],
        "answer": "A connection between documents on the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Click this ______ to watch the science experiment.",
        "options": [
          "link",
          "laptop",
          "ice",
          "screen"
        ],
        "answer": "link",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A connection between documents on the internet.",
        "options": [
          "link",
          "laptop",
          "ice",
          "screen"
        ],
        "answer": "link",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-029",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 29,
    "word": "chat",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To talk with someone in a friendly way, often online.",
    "example": "I often chat with my friends on WhatsApp after school.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 35,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'chat' mean?",
        "options": [
          "To talk with someone in a friendly way, often online.",
          "Having a low temperature.",
          "To finish doing something or halt a machine.",
          "Water that has frozen and become solid."
        ],
        "answer": "To talk with someone in a friendly way, often online.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I often ______ with my friends on WhatsApp after school.",
        "options": [
          "chat",
          "search",
          "send",
          "start"
        ],
        "answer": "chat",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To talk with someone in a friendly way, often online.",
        "options": [
          "chat",
          "search",
          "send",
          "start"
        ],
        "answer": "chat",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-030",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Internet & Digital",
    "number": 30,
    "word": "blog",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A regular record of your thoughts or opinions on the internet.",
    "example": "She writes a blog about her favorite animals.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 36,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'blog' mean?",
        "options": [
          "A regular record of your thoughts or opinions on the internet.",
          "To push something firmly.",
          "Something that you can hear.",
          "To make something by putting pieces together."
        ],
        "answer": "A regular record of your thoughts or opinions on the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She writes a ______ about her favorite animals.",
        "options": [
          "blog",
          "computer",
          "wind",
          "app"
        ],
        "answer": "blog",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A regular record of your thoughts or opinions on the internet.",
        "options": [
          "blog",
          "computer",
          "wind",
          "app"
        ],
        "answer": "blog",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-031",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 31,
    "word": "click",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To press a button on a computer mouse.",
    "example": "Click the image to make it larger.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 37,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'click' mean?",
        "options": [
          "To press a button on a computer mouse.",
          "A living creature that is not a plant or human.",
          "A short piece of information that you send to someone.",
          "The round object that circles the Earth and shines at night."
        ],
        "answer": "To press a button on a computer mouse.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the image to make it larger.",
        "options": [
          "click",
          "save",
          "type",
          "search"
        ],
        "answer": "click",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To press a button on a computer mouse.",
        "options": [
          "click",
          "save",
          "type",
          "search"
        ],
        "answer": "click",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-032",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 32,
    "word": "type",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To write using a keyboard.",
    "example": "Can you type your name here?",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 38,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'type' mean?",
        "options": [
          "To write using a keyboard.",
          "To talk with someone in a friendly way, often online.",
          "A connection between documents on the internet.",
          "A short piece of information that you send to someone."
        ],
        "answer": "To write using a keyboard.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Can you ______ your name here?",
        "options": [
          "type",
          "click",
          "stop",
          "search"
        ],
        "answer": "type",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To write using a keyboard.",
        "options": [
          "type",
          "click",
          "stop",
          "search"
        ],
        "answer": "type",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-033",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 33,
    "word": "press",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To push something firmly.",
    "example": "Press the red button to start the machine.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 39,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'press' mean?",
        "options": [
          "To push something firmly.",
          "To use force to move something towards you.",
          "Moving or happening quickly.",
          "A connection between documents on the internet."
        ],
        "answer": "To push something firmly.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the red button to start the machine.",
        "options": [
          "press",
          "chat",
          "stop",
          "push"
        ],
        "answer": "press",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To push something firmly.",
        "options": [
          "press",
          "chat",
          "stop",
          "push"
        ],
        "answer": "press",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-034",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 34,
    "word": "push",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To use force to move something away from you.",
    "example": "Push the door to enter the science lab.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 40,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'push' mean?",
        "options": [
          "To use force to move something away from you.",
          "Water that has frozen and become solid.",
          "Water that falls from the clouds in drops.",
          "To begin doing something."
        ],
        "answer": "To use force to move something away from you.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the door to enter the science lab.",
        "options": [
          "push",
          "press",
          "chat",
          "click"
        ],
        "answer": "push",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To use force to move something away from you.",
        "options": [
          "push",
          "press",
          "chat",
          "click"
        ],
        "answer": "push",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-035",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 35,
    "word": "pull",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To use force to move something towards you.",
    "example": "Pull the lever down to stop the water.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 41,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pull' mean?",
        "options": [
          "To use force to move something towards you.",
          "A device you wear over your ears to listen to music privately.",
          "A machine that prints text or pictures on paper.",
          "A place on the internet with information about a person, organization, etc."
        ],
        "answer": "To use force to move something towards you.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the lever down to stop the water.",
        "options": [
          "pull",
          "push",
          "start",
          "turn off"
        ],
        "answer": "pull",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To use force to move something towards you.",
        "options": [
          "pull",
          "push",
          "start",
          "turn off"
        ],
        "answer": "pull",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-036",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 36,
    "word": "start",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To begin doing something.",
    "example": "Let's start the experiment now.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 42,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'start' mean?",
        "options": [
          "To begin doing something.",
          "A place on a computer where you can store and organize files.",
          "A small computer that you can carry with you.",
          "The state of burning that produces flames, heat, and light."
        ],
        "answer": "To begin doing something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Let's ______ the experiment now.",
        "options": [
          "start",
          "pull",
          "press",
          "turn on"
        ],
        "answer": "start",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To begin doing something.",
        "options": [
          "start",
          "pull",
          "press",
          "turn on"
        ],
        "answer": "start",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-037",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 37,
    "word": "stop",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To finish doing something or halt a machine.",
    "example": "Stop the machine if it gets too hot.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 43,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'stop' mean?",
        "options": [
          "To finish doing something or halt a machine.",
          "A piece of software you can download to a phone or tablet.",
          "To talk with someone in a friendly way, often online.",
          "A device shaped like a box with a screen that receives moving images and sound."
        ],
        "answer": "To finish doing something or halt a machine.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the machine if it gets too hot.",
        "options": [
          "stop",
          "press",
          "turn off",
          "build"
        ],
        "answer": "stop",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To finish doing something or halt a machine.",
        "options": [
          "stop",
          "press",
          "turn off",
          "build"
        ],
        "answer": "stop",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-038",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 38,
    "word": "save",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To store data on a computer.",
    "example": "Always save your work every ten minutes.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 44,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'save' mean?",
        "options": [
          "To store data on a computer.",
          "Something that you can hear.",
          "Having a high temperature.",
          "To talk with someone in a friendly way, often online."
        ],
        "answer": "To store data on a computer.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Always ______ your work every ten minutes.",
        "options": [
          "save",
          "push",
          "type",
          "send"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To store data on a computer.",
        "options": [
          "save",
          "push",
          "type",
          "send"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-039",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 39,
    "word": "send",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To make something go from one place to another.",
    "example": "Send the email to the teacher before Friday.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 45,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'send' mean?",
        "options": [
          "To make something go from one place to another.",
          "To press a button on a computer mouse.",
          "A system for sending messages electronically.",
          "A clear liquid without colour or taste, essential for life."
        ],
        "answer": "To make something go from one place to another.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the email to the teacher before Friday.",
        "options": [
          "send",
          "click",
          "fix",
          "save"
        ],
        "answer": "send",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To make something go from one place to another.",
        "options": [
          "send",
          "click",
          "fix",
          "save"
        ],
        "answer": "send",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-040",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 40,
    "word": "search",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To look for something on the internet.",
    "example": "I will search for the meaning of this word.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 46,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'search' mean?",
        "options": [
          "To look for something on the internet.",
          "To stop a machine or device by pressing a switch.",
          "An object that provides electricity for things like radios or toys.",
          "A large, round object in space that moves around a star."
        ],
        "answer": "To look for something on the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I will ______ for the meaning of this word.",
        "options": [
          "search",
          "press",
          "start",
          "save"
        ],
        "answer": "search",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To look for something on the internet.",
        "options": [
          "search",
          "press",
          "start",
          "save"
        ],
        "answer": "search",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-041",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 41,
    "word": "turn on",
    "partOfSpeech": "phrasal verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To start a machine or device by pressing a switch.",
    "example": "Turn on the light so we can see better.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 47,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'turn on' mean?",
        "options": [
          "To start a machine or device by pressing a switch.",
          "The planet on which we live.",
          "A living thing that grows in earth, in water, or on other plants.",
          "A small computer that you can carry with you."
        ],
        "answer": "To start a machine or device by pressing a switch.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the light so we can see better.",
        "options": [
          "turn on",
          "type",
          "stop",
          "fix"
        ],
        "answer": "turn on",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To start a machine or device by pressing a switch.",
        "options": [
          "turn on",
          "type",
          "stop",
          "fix"
        ],
        "answer": "turn on",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-042",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 42,
    "word": "turn off",
    "partOfSpeech": "phrasal verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To stop a machine or device by pressing a switch.",
    "example": "Please turn off the fan when you leave the room.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 48,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'turn off' mean?",
        "options": [
          "To stop a machine or device by pressing a switch.",
          "To finish doing something or halt a machine.",
          "To store data on a computer.",
          "A recording of moving pictures and sound."
        ],
        "answer": "To stop a machine or device by pressing a switch.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Please ______ the fan when you leave the room.",
        "options": [
          "turn off",
          "send",
          "start",
          "chat"
        ],
        "answer": "turn off",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To stop a machine or device by pressing a switch.",
        "options": [
          "turn off",
          "send",
          "start",
          "chat"
        ],
        "answer": "turn off",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-043",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 43,
    "word": "fix",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To repair something that is broken.",
    "example": "My dad can fix the broken radio.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 49,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fix' mean?",
        "options": [
          "To repair something that is broken.",
          "The space over the Earth where the sun, moon, and clouds appear.",
          "To push something firmly.",
          "Information stored on a computer under a specific name."
        ],
        "answer": "To repair something that is broken.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My dad can ______ the broken radio.",
        "options": [
          "fix",
          "chat",
          "save",
          "send"
        ],
        "answer": "fix",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To repair something that is broken.",
        "options": [
          "fix",
          "chat",
          "save",
          "send"
        ],
        "answer": "fix",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-044",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 44,
    "word": "repair",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To put something damaged back into good condition.",
    "example": "The mechanic is going to repair the engine.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 50,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'repair' mean?",
        "options": [
          "To put something damaged back into good condition.",
          "A very large, hot ball of gas that shines in the night sky.",
          "To use force to move something away from you.",
          "Not connected to the internet."
        ],
        "answer": "To put something damaged back into good condition.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The mechanic is going to ______ the engine.",
        "options": [
          "repair",
          "start",
          "turn on",
          "fix"
        ],
        "answer": "repair",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To put something damaged back into good condition.",
        "options": [
          "repair",
          "start",
          "turn on",
          "fix"
        ],
        "answer": "repair",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-045",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Actions & Verbs",
    "number": 45,
    "word": "build",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To make something by putting pieces together.",
    "example": "They want to build a small robot for the science fair.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 51,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'build' mean?",
        "options": [
          "To make something by putting pieces together.",
          "An object that provides electricity for things like radios or toys.",
          "The round object that circles the Earth and shines at night.",
          "To make something go from one place to another."
        ],
        "answer": "To make something by putting pieces together.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "They want to ______ a small robot for the science fair.",
        "options": [
          "build",
          "turn off",
          "type",
          "stop"
        ],
        "answer": "build",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To make something by putting pieces together.",
        "options": [
          "build",
          "turn off",
          "type",
          "stop"
        ],
        "answer": "build",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-046",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 46,
    "word": "space",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The empty area outside Earth's atmosphere.",
    "example": "Astronauts travel to space in a rocket.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 52,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'space' mean?",
        "options": [
          "The empty area outside Earth's atmosphere.",
          "A machine that prints text or pictures on paper.",
          "A small computer that you can carry with you.",
          "Having a high temperature."
        ],
        "answer": "The empty area outside Earth's atmosphere.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Astronauts travel to ______ in a rocket.",
        "options": [
          "space",
          "tree",
          "mouse",
          "smartphone"
        ],
        "answer": "space",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The empty area outside Earth's atmosphere.",
        "options": [
          "space",
          "tree",
          "mouse",
          "smartphone"
        ],
        "answer": "space",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-047",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 47,
    "word": "star",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A very large, hot ball of gas that shines in the night sky.",
    "example": "The sun is actually a star.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 53,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'star' mean?",
        "options": [
          "A very large, hot ball of gas that shines in the night sky.",
          "A small computer that you can carry with you.",
          "A regular record of your thoughts or opinions on the internet.",
          "To start a machine or device by pressing a switch."
        ],
        "answer": "A very large, hot ball of gas that shines in the night sky.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The sun is actually a ______.",
        "options": [
          "star",
          "sky",
          "rain",
          "game"
        ],
        "answer": "star",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A very large, hot ball of gas that shines in the night sky.",
        "options": [
          "star",
          "sky",
          "rain",
          "game"
        ],
        "answer": "star",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-048",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 48,
    "word": "moon",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The round object that circles the Earth and shines at night.",
    "example": "Neil Armstrong was the first person to walk on the moon.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 54,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'moon' mean?",
        "options": [
          "The round object that circles the Earth and shines at night.",
          "Water that has frozen and become solid.",
          "A large, round object in space that moves around a star.",
          "A substance used to treat an illness."
        ],
        "answer": "The round object that circles the Earth and shines at night.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Neil Armstrong was the first person to walk on the ______.",
        "options": [
          "moon",
          "earth",
          "internet",
          "water"
        ],
        "answer": "moon",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The round object that circles the Earth and shines at night.",
        "options": [
          "moon",
          "earth",
          "internet",
          "water"
        ],
        "answer": "moon",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-049",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 49,
    "word": "sun",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The star around which the earth orbits, giving light and heat.",
    "example": "The sun is essential for plants to grow.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 55,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sun' mean?",
        "options": [
          "The star around which the earth orbits, giving light and heat.",
          "The energy that makes it possible to see things.",
          "A living creature that is not a plant or human.",
          "An object that provides electricity for things like radios or toys."
        ],
        "answer": "The star around which the earth orbits, giving light and heat.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ is essential for plants to grow.",
        "options": [
          "sun",
          "tree",
          "laptop",
          "link"
        ],
        "answer": "sun",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The star around which the earth orbits, giving light and heat.",
        "options": [
          "sun",
          "tree",
          "laptop",
          "link"
        ],
        "answer": "sun",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-050",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 50,
    "word": "planet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A large, round object in space that moves around a star.",
    "example": "Mars is the fourth planet from the sun.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 56,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'planet' mean?",
        "options": [
          "A large, round object in space that moves around a star.",
          "To look for something on the internet.",
          "Water that has frozen and become solid.",
          "Connected to the internet."
        ],
        "answer": "A large, round object in space that moves around a star.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Mars is the fourth ______ from the sun.",
        "options": [
          "planet",
          "animal",
          "text",
          "light"
        ],
        "answer": "planet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A large, round object in space that moves around a star.",
        "options": [
          "planet",
          "animal",
          "text",
          "light"
        ],
        "answer": "planet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-051",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 51,
    "word": "earth",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The planet on which we live.",
    "example": "Earth is the only planet we know that has life.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 57,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'earth' mean?",
        "options": [
          "The planet on which we live.",
          "The state of burning that produces flames, heat, and light.",
          "To store data on a computer.",
          "A living creature that is not a plant or human."
        ],
        "answer": "The planet on which we live.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ is the only planet we know that has life.",
        "options": [
          "earth",
          "computer",
          "space",
          "sky"
        ],
        "answer": "earth",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The planet on which we live.",
        "options": [
          "earth",
          "computer",
          "space",
          "sky"
        ],
        "answer": "earth",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-052",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 52,
    "word": "sky",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The space over the Earth where the sun, moon, and clouds appear.",
    "example": "The sky is blue today without any clouds.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 58,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sky' mean?",
        "options": [
          "The space over the Earth where the sun, moon, and clouds appear.",
          "A small device used to move the cursor on a computer screen.",
          "The planet on which we live.",
          "Something that you can hear."
        ],
        "answer": "The space over the Earth where the sun, moon, and clouds appear.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ is blue today without any clouds.",
        "options": [
          "sky",
          "link",
          "earth",
          "blog"
        ],
        "answer": "sky",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The space over the Earth where the sun, moon, and clouds appear.",
        "options": [
          "sky",
          "link",
          "earth",
          "blog"
        ],
        "answer": "sky",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-053",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 53,
    "word": "cloud",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A white or grey mass in the sky made of drops of water.",
    "example": "Dark clouds usually mean it is going to rain.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 59,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cloud' mean?",
        "options": [
          "A white or grey mass in the sky made of drops of water.",
          "To finish doing something or halt a machine.",
          "A place on a computer where you can store and organize files.",
          "A device that sound comes out of."
        ],
        "answer": "A white or grey mass in the sky made of drops of water.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Dark ______ usually mean it is going to rain.",
        "options": [
          "cloud",
          "rain",
          "sky",
          "television"
        ],
        "answer": "cloud",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A white or grey mass in the sky made of drops of water.",
        "options": [
          "cloud",
          "rain",
          "sky",
          "television"
        ],
        "answer": "cloud",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-054",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 54,
    "word": "rain",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Water that falls from the clouds in drops.",
    "example": "The rain helps the crops in the farm grow.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 60,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'rain' mean?",
        "options": [
          "Water that falls from the clouds in drops.",
          "To make something go from one place to another.",
          "The whole physical structure of a person or animal.",
          "To repair something that is broken."
        ],
        "answer": "Water that falls from the clouds in drops.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ helps the crops in the farm grow.",
        "options": [
          "rain",
          "battery",
          "television",
          "body"
        ],
        "answer": "rain",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Water that falls from the clouds in drops.",
        "options": [
          "rain",
          "battery",
          "television",
          "body"
        ],
        "answer": "rain",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-055",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Space & Nature",
    "number": 55,
    "word": "wind",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Moving air, especially when it moves strongly.",
    "example": "The wind blew the leaves off the trees.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 61,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wind' mean?",
        "options": [
          "Moving air, especially when it moves strongly.",
          "To talk with someone in a friendly way, often online.",
          "A tall plant with a wooden trunk and branches.",
          "A mobile phone that can connect to the internet."
        ],
        "answer": "Moving air, especially when it moves strongly.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ blew the leaves off the trees.",
        "options": [
          "wind",
          "rain",
          "message",
          "email"
        ],
        "answer": "wind",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Moving air, especially when it moves strongly.",
        "options": [
          "wind",
          "rain",
          "message",
          "email"
        ],
        "answer": "wind",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-056",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 56,
    "word": "plant",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A living thing that grows in earth, in water, or on other plants.",
    "example": "We need to water the plant every day.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 62,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'plant' mean?",
        "options": [
          "A living thing that grows in earth, in water, or on other plants.",
          "The energy that makes it possible to see things.",
          "An object that provides electricity for things like radios or toys.",
          "The flat part of a television or computer where you see pictures or text."
        ],
        "answer": "A living thing that grows in earth, in water, or on other plants.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We need to water the ______ every day.",
        "options": [
          "plant",
          "internet",
          "email",
          "website"
        ],
        "answer": "plant",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A living thing that grows in earth, in water, or on other plants.",
        "options": [
          "plant",
          "internet",
          "email",
          "website"
        ],
        "answer": "plant",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-057",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 57,
    "word": "tree",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A tall plant with a wooden trunk and branches.",
    "example": "That old tree produces a lot of oxygen.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 63,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'tree' mean?",
        "options": [
          "A tall plant with a wooden trunk and branches.",
          "A living creature that is not a plant or human.",
          "The planet on which we live.",
          "To begin doing something."
        ],
        "answer": "A tall plant with a wooden trunk and branches.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "That old ______ produces a lot of oxygen.",
        "options": [
          "tree",
          "blog",
          "earth",
          "wind"
        ],
        "answer": "tree",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A tall plant with a wooden trunk and branches.",
        "options": [
          "tree",
          "blog",
          "earth",
          "wind"
        ],
        "answer": "tree",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-058",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 58,
    "word": "animal",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A living creature that is not a plant or human.",
    "example": "We studied different animal habitats in biology class.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 64,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'animal' mean?",
        "options": [
          "A living creature that is not a plant or human.",
          "A large, round object in space that moves around a star.",
          "To make something go from one place to another.",
          "The whole physical structure of a person or animal."
        ],
        "answer": "A living creature that is not a plant or human.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We studied different ______ habitats in biology class.",
        "options": [
          "animal",
          "game",
          "medicine",
          "blog"
        ],
        "answer": "animal",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A living creature that is not a plant or human.",
        "options": [
          "animal",
          "game",
          "medicine",
          "blog"
        ],
        "answer": "animal",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-059",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 59,
    "word": "body",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The whole physical structure of a person or animal.",
    "example": "The heart pumps blood around the body.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 65,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'body' mean?",
        "options": [
          "The whole physical structure of a person or animal.",
          "A substance used to treat an illness.",
          "The space over the Earth where the sun, moon, and clouds appear.",
          "A large, round object in space that moves around a star."
        ],
        "answer": "The whole physical structure of a person or animal.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The heart pumps blood around the ______.",
        "options": [
          "body",
          "app",
          "website",
          "screen"
        ],
        "answer": "body",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The whole physical structure of a person or animal.",
        "options": [
          "body",
          "app",
          "website",
          "screen"
        ],
        "answer": "body",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-060",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 60,
    "word": "medicine",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A substance used to treat an illness.",
    "example": "The doctor gave me some medicine for my cold.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 66,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'medicine' mean?",
        "options": [
          "A substance used to treat an illness.",
          "A living thing that grows in earth, in water, or on other plants.",
          "To press a button on a computer mouse.",
          "A connection between documents on the internet."
        ],
        "answer": "A substance used to treat an illness.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The doctor gave me some ______ for my cold.",
        "options": [
          "medicine",
          "smart watch",
          "blog",
          "message"
        ],
        "answer": "medicine",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A substance used to treat an illness.",
        "options": [
          "medicine",
          "smart watch",
          "blog",
          "message"
        ],
        "answer": "medicine",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-061",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 61,
    "word": "light",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The energy that makes it possible to see things.",
    "example": "Plants need sunlight to make their food.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 67,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'light' mean?",
        "options": [
          "The energy that makes it possible to see things.",
          "Water that has frozen and become solid.",
          "Moving, happening, or doing something without much speed.",
          "A device used for taking photographs or making videos."
        ],
        "answer": "The energy that makes it possible to see things.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The room was filled with bright ______.",
        "options": [
          "light",
          "folder",
          "medicine",
          "printer"
        ],
        "answer": "light",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The energy that makes it possible to see things.",
        "options": [
          "light",
          "folder",
          "medicine",
          "printer"
        ],
        "answer": "light",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-062",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 62,
    "word": "sound",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Something that you can hear.",
    "example": "Sound travels slower than light.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 68,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sound' mean?",
        "options": [
          "Something that you can hear.",
          "To use force to move something towards you.",
          "To repair something that is broken.",
          "A place on the internet with information about a person, organization, etc."
        ],
        "answer": "Something that you can hear.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ travels slower than light.",
        "options": [
          "sound",
          "light",
          "tree",
          "laptop"
        ],
        "answer": "sound",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something that you can hear.",
        "options": [
          "sound",
          "light",
          "tree",
          "laptop"
        ],
        "answer": "sound",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-063",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 63,
    "word": "fast",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Moving or happening quickly.",
    "example": "Light travels very fast.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 69,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fast' mean?",
        "options": [
          "Moving or happening quickly.",
          "A large, round object in space that moves around a star.",
          "The space over the Earth where the sun, moon, and clouds appear.",
          "A recording of moving pictures and sound."
        ],
        "answer": "Moving or happening quickly.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Light travels very ______.",
        "options": [
          "fast",
          "slow",
          "offline",
          "hot"
        ],
        "answer": "fast",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Moving or happening quickly.",
        "options": [
          "fast",
          "slow",
          "offline",
          "hot"
        ],
        "answer": "fast",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-064",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 64,
    "word": "slow",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Moving, happening, or doing something without much speed.",
    "example": "A snail is a very slow animal.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 70,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'slow' mean?",
        "options": [
          "Moving, happening, or doing something without much speed.",
          "A device used for taking photographs or making videos.",
          "The empty area outside Earth's atmosphere.",
          "A very large, hot ball of gas that shines in the night sky."
        ],
        "answer": "Moving, happening, or doing something without much speed.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A snail is a very ______ animal.",
        "options": [
          "slow",
          "hot",
          "offline",
          "fast"
        ],
        "answer": "slow",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Moving, happening, or doing something without much speed.",
        "options": [
          "slow",
          "hot",
          "offline",
          "fast"
        ],
        "answer": "slow",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-065",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 65,
    "word": "hot",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Having a high temperature.",
    "example": "Be careful, the water in the beaker is very hot.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 71,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'hot' mean?",
        "options": [
          "Having a high temperature.",
          "To push something firmly.",
          "An object that provides electricity for things like radios or toys.",
          "Water that has frozen and become solid."
        ],
        "answer": "Having a high temperature.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Be careful, the water in the beaker is very ______.",
        "options": [
          "hot",
          "offline",
          "slow",
          "fast"
        ],
        "answer": "hot",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Having a high temperature.",
        "options": [
          "hot",
          "offline",
          "slow",
          "fast"
        ],
        "answer": "hot",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-066",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 66,
    "word": "cold",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Having a low temperature.",
    "example": "Ice is cold and solid.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 72,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cold' mean?",
        "options": [
          "Having a low temperature.",
          "A short piece of information that you send to someone.",
          "The planet on which we live.",
          "A recording of moving pictures and sound."
        ],
        "answer": "Having a low temperature.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Ice is ______ and solid.",
        "options": [
          "cold",
          "offline",
          "online",
          "slow"
        ],
        "answer": "cold",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Having a low temperature.",
        "options": [
          "cold",
          "offline",
          "online",
          "slow"
        ],
        "answer": "cold",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-067",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 67,
    "word": "water",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A clear liquid without colour or taste, essential for life.",
    "example": "Water freezes at 0 degrees Celsius.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 73,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'water' mean?",
        "options": [
          "A clear liquid without colour or taste, essential for life.",
          "A white or grey mass in the sky made of drops of water.",
          "An object that provides electricity for things like radios or toys.",
          "To make something go from one place to another."
        ],
        "answer": "A clear liquid without colour or taste, essential for life.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ freezes at 0 degrees Celsius.",
        "options": [
          "water",
          "game",
          "screen",
          "laptop"
        ],
        "answer": "water",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A clear liquid without colour or taste, essential for life.",
        "options": [
          "water",
          "game",
          "screen",
          "laptop"
        ],
        "answer": "water",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-068",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 68,
    "word": "ice",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Water that has frozen and become solid.",
    "example": "When you put water in the freezer, it becomes ice.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 74,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'ice' mean?",
        "options": [
          "Water that has frozen and become solid.",
          "A tall plant with a wooden trunk and branches.",
          "Connected to the internet.",
          "The global network connecting millions of computers."
        ],
        "answer": "Water that has frozen and become solid.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "When you put water in the freezer, it becomes ______.",
        "options": [
          "ice",
          "laptop",
          "light",
          "link"
        ],
        "answer": "ice",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Water that has frozen and become solid.",
        "options": [
          "ice",
          "laptop",
          "light",
          "link"
        ],
        "answer": "ice",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-069",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 69,
    "word": "fire",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The state of burning that produces flames, heat, and light.",
    "example": "Fire needs oxygen to burn.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 75,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fire' mean?",
        "options": [
          "The state of burning that produces flames, heat, and light.",
          "A large, round object in space that moves around a star.",
          "To put something damaged back into good condition.",
          "The energy that makes it possible to see things."
        ],
        "answer": "The state of burning that produces flames, heat, and light.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ needs oxygen to burn.",
        "options": [
          "fire",
          "water",
          "text",
          "camera"
        ],
        "answer": "fire",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The state of burning that produces flames, heat, and light.",
        "options": [
          "fire",
          "water",
          "text",
          "camera"
        ],
        "answer": "fire",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-RA2-070",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Life & Physical Science",
    "number": 70,
    "word": "air",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The mixture of gases that surrounds the Earth.",
    "example": "We breathe in air to get oxygen.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 76,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'air' mean?",
        "options": [
          "The mixture of gases that surrounds the Earth.",
          "To look for something on the internet.",
          "A place on a computer where you can store and organize files.",
          "Moving air, especially when it moves strongly."
        ],
        "answer": "The mixture of gases that surrounds the Earth.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We breathe in ______ to get oxygen.",
        "options": [
          "air",
          "folder",
          "moon",
          "plant"
        ],
        "answer": "air",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The mixture of gases that surrounds the Earth.",
        "options": [
          "air",
          "folder",
          "moon",
          "plant"
        ],
        "answer": "air",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-071",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 71,
    "word": "gadget",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A small device or machine with a particular purpose.",
    "example": "This new kitchen gadget peels apples very quickly.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 77,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'gadget' mean?",
        "options": [
          "A small device or machine with a particular purpose.",
          "A device sent up into space to travel around the Earth, used for collecting information or communicating.",
          "The set of necessary tools, clothing, etc. for a particular purpose.",
          "To design or create something that has never existed before."
        ],
        "answer": "A small device or machine with a particular purpose.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This new kitchen ______ peels apples very quickly.",
        "options": [
          "gadget",
          "laboratory",
          "power",
          "satellite"
        ],
        "answer": "gadget",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small device or machine with a particular purpose.",
        "options": [
          "gadget",
          "laboratory",
          "power",
          "satellite"
        ],
        "answer": "gadget",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-072",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 72,
    "word": "device",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "An object or machine that has been invented for a particular purpose.",
    "example": "A smartphone is a very useful communication device.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 78,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'device' mean?",
        "options": [
          "An object or machine that has been invented for a particular purpose.",
          "To join two or more things together.",
          "A room or building with scientific equipment for doing tests.",
          "A device sent up into space to travel around the Earth, used for collecting information or communicating."
        ],
        "answer": "An object or machine that has been invented for a particular purpose.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A smartphone is a very useful communication ______.",
        "options": [
          "device",
          "program",
          "invention",
          "discovery"
        ],
        "answer": "device",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An object or machine that has been invented for a particular purpose.",
        "options": [
          "device",
          "program",
          "invention",
          "discovery"
        ],
        "answer": "device",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-073",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 73,
    "word": "download",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To copy data from the internet to your computer.",
    "example": "I need to download the science worksheet from Google Classroom.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 79,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'download' mean?",
        "options": [
          "To copy data from the internet to your computer.",
          "The programs and other operating information used by a computer.",
          "To find information, a place, or an object, especially for the first time.",
          "A form of energy that provides power to machines and lights."
        ],
        "answer": "To copy data from the internet to your computer.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I need to ______ the science worksheet from Google Classroom.",
        "options": [
          "download",
          "connect",
          "invent",
          "delete"
        ],
        "answer": "download",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To copy data from the internet to your computer.",
        "options": [
          "download",
          "connect",
          "invent",
          "delete"
        ],
        "answer": "download",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-074",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 74,
    "word": "upload",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To copy or send data from your computer to the internet.",
    "example": "You must upload your homework before midnight.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 80,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'upload' mean?",
        "options": [
          "To copy or send data from your computer to the internet.",
          "The process of finding something for the first time.",
          "Something that has been designed or created for the first time.",
          "A screen which allows giving instructions to a computer by touching it."
        ],
        "answer": "To copy or send data from your computer to the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You must ______ your homework before midnight.",
        "options": [
          "upload",
          "download",
          "delete",
          "invent"
        ],
        "answer": "upload",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To copy or send data from your computer to the internet.",
        "options": [
          "upload",
          "download",
          "delete",
          "invent"
        ],
        "answer": "upload",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-075",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 75,
    "word": "password",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A secret word or combination of letters and numbers used to access a system.",
    "example": "Do not share your password with anyone.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 81,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'password' mean?",
        "options": [
          "A secret word or combination of letters and numbers used to access a system.",
          "To join two or more things together.",
          "To design or create something that has never existed before.",
          "To copy or send data from your computer to the internet."
        ],
        "answer": "A secret word or combination of letters and numbers used to access a system.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Do not share your ______ with anyone.",
        "options": [
          "password",
          "device",
          "software",
          "discovery"
        ],
        "answer": "password",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A secret word or combination of letters and numbers used to access a system.",
        "options": [
          "password",
          "device",
          "software",
          "discovery"
        ],
        "answer": "password",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-076",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 76,
    "word": "software",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The programs and other operating information used by a computer.",
    "example": "You need to update the software on your tablet.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 82,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'software' mean?",
        "options": [
          "The programs and other operating information used by a computer.",
          "To copy data from the internet to your computer.",
          "Something that has been designed or created for the first time.",
          "The process of finding something for the first time."
        ],
        "answer": "The programs and other operating information used by a computer.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You need to update the ______ on your tablet.",
        "options": [
          "software",
          "power",
          "laboratory",
          "virus"
        ],
        "answer": "software",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The programs and other operating information used by a computer.",
        "options": [
          "software",
          "power",
          "laboratory",
          "virus"
        ],
        "answer": "software",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-077",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 77,
    "word": "digital",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Using or relating to electronic signals and computer technology.",
    "example": "Digital cameras do not use film.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 83,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'digital' mean?",
        "options": [
          "Using or relating to electronic signals and computer technology.",
          "A small device or machine with a particular purpose.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "A machine that uses energy to produce movement."
        ],
        "answer": "Using or relating to electronic signals and computer technology.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ cameras do not use film.",
        "options": [
          "digital",
          "invent",
          "discover",
          "touchscreen"
        ],
        "answer": "digital",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Using or relating to electronic signals and computer technology.",
        "options": [
          "digital",
          "invent",
          "discover",
          "touchscreen"
        ],
        "answer": "digital",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-078",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 78,
    "word": "connect",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To join two or more things together.",
    "example": "Connect the wires to the battery to complete the circuit.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 84,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'connect' mean?",
        "options": [
          "To join two or more things together.",
          "An expert who studies or works in one of the sciences.",
          "An object or machine that has been invented for a particular purpose.",
          "The set of necessary tools, clothing, etc. for a particular purpose."
        ],
        "answer": "To join two or more things together.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ the wires to the battery to complete the circuit.",
        "options": [
          "connect",
          "download",
          "invent",
          "discover"
        ],
        "answer": "connect",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To join two or more things together.",
        "options": [
          "connect",
          "download",
          "invent",
          "discover"
        ],
        "answer": "connect",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-079",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 79,
    "word": "charger",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A piece of equipment used to put electricity into a battery.",
    "example": "I lost my phone charger, so my battery is empty.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 85,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'charger' mean?",
        "options": [
          "A piece of equipment used to put electricity into a battery.",
          "To design or create something that has never existed before.",
          "The part of a computer in which information or programs are stored.",
          "The programs and other operating information used by a computer."
        ],
        "answer": "A piece of equipment used to put electricity into a battery.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I lost my phone ______, so my battery is empty.",
        "options": [
          "charger",
          "engine",
          "machine",
          "scientist"
        ],
        "answer": "charger",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A piece of equipment used to put electricity into a battery.",
        "options": [
          "charger",
          "engine",
          "machine",
          "scientist"
        ],
        "answer": "charger",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-080",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 80,
    "word": "invent",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To design or create something that has never existed before.",
    "example": "Alexander Graham Bell helped to invent the telephone.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 86,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'invent' mean?",
        "options": [
          "To design or create something that has never existed before.",
          "A series of instructions that makes a computer perform a task.",
          "The set of necessary tools, clothing, etc. for a particular purpose.",
          "The part of a computer in which information or programs are stored."
        ],
        "answer": "To design or create something that has never existed before.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Alexander Graham Bell helped to ______ the telephone.",
        "options": [
          "invent",
          "connect",
          "discover",
          "download"
        ],
        "answer": "invent",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To design or create something that has never existed before.",
        "options": [
          "invent",
          "connect",
          "discover",
          "download"
        ],
        "answer": "invent",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-081",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 81,
    "word": "invention",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Something that has been designed or created for the first time.",
    "example": "The internet is a very important modern invention.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 87,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'invention' mean?",
        "options": [
          "Something that has been designed or created for the first time.",
          "An object or machine that has been invented for a particular purpose.",
          "The programs and other operating information used by a computer.",
          "The power from something such as electricity or oil that can do work."
        ],
        "answer": "Something that has been designed or created for the first time.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The internet is a very important modern ______.",
        "options": [
          "invention",
          "electricity",
          "engine",
          "charger"
        ],
        "answer": "invention",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something that has been designed or created for the first time.",
        "options": [
          "invention",
          "electricity",
          "engine",
          "charger"
        ],
        "answer": "invention",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-082",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 82,
    "word": "discover",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To find information, a place, or an object, especially for the first time.",
    "example": "Scientists hope to discover new medicines in the rainforest.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 88,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'discover' mean?",
        "options": [
          "To find information, a place, or an object, especially for the first time.",
          "The part of a computer in which information or programs are stored.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "To remove something, especially from a computer's memory."
        ],
        "answer": "To find information, a place, or an object, especially for the first time.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Scientists hope to ______ new medicines in the rainforest.",
        "options": [
          "discover",
          "delete",
          "connect",
          "download"
        ],
        "answer": "discover",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To find information, a place, or an object, especially for the first time.",
        "options": [
          "discover",
          "delete",
          "connect",
          "download"
        ],
        "answer": "discover",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-083",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 83,
    "word": "discovery",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The process of finding something for the first time.",
    "example": "The discovery of electricity changed the world.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 89,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'discovery' mean?",
        "options": [
          "The process of finding something for the first time.",
          "An object or machine that has been invented for a particular purpose.",
          "To join two or more things together.",
          "A test done in order to learn something or to discover if something works."
        ],
        "answer": "The process of finding something for the first time.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ of electricity changed the world.",
        "options": [
          "discovery",
          "robot",
          "charger",
          "electricity"
        ],
        "answer": "discovery",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The process of finding something for the first time.",
        "options": [
          "discovery",
          "robot",
          "charger",
          "electricity"
        ],
        "answer": "discovery",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-084",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 84,
    "word": "scientist",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "An expert who studies or works in one of the sciences.",
    "example": "The scientist is doing research in the lab.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 90,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'scientist' mean?",
        "options": [
          "An expert who studies or works in one of the sciences.",
          "A small device or machine with a particular purpose.",
          "To copy data from the internet to your computer.",
          "A secret word or combination of letters and numbers used to access a system."
        ],
        "answer": "An expert who studies or works in one of the sciences.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ is doing research in the lab.",
        "options": [
          "scientist",
          "laboratory",
          "satellite",
          "password"
        ],
        "answer": "scientist",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An expert who studies or works in one of the sciences.",
        "options": [
          "scientist",
          "laboratory",
          "satellite",
          "password"
        ],
        "answer": "scientist",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-085",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 85,
    "word": "experiment",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A test done in order to learn something or to discover if something works.",
    "example": "We did a chemistry experiment with baking soda and vinegar.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 91,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'experiment' mean?",
        "options": [
          "A test done in order to learn something or to discover if something works.",
          "Using or relating to electronic signals and computer technology.",
          "A machine that uses energy to produce movement.",
          "The power from something such as electricity or oil that can do work."
        ],
        "answer": "A test done in order to learn something or to discover if something works.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We did a chemistry ______ with baking soda and vinegar.",
        "options": [
          "experiment",
          "electricity",
          "equipment",
          "touchscreen"
        ],
        "answer": "experiment",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A test done in order to learn something or to discover if something works.",
        "options": [
          "experiment",
          "electricity",
          "equipment",
          "touchscreen"
        ],
        "answer": "experiment",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-086",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 86,
    "word": "laboratory",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A room or building with scientific equipment for doing tests.",
    "example": "Students must wear safety goggles in the science laboratory.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 92,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'laboratory' mean?",
        "options": [
          "A room or building with scientific equipment for doing tests.",
          "A series of instructions that makes a computer perform a task.",
          "To remove something, especially from a computer's memory.",
          "A machine that uses energy to produce movement."
        ],
        "answer": "A room or building with scientific equipment for doing tests.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Students must wear safety goggles in the science ______.",
        "options": [
          "laboratory",
          "password",
          "scientist",
          "invention"
        ],
        "answer": "laboratory",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A room or building with scientific equipment for doing tests.",
        "options": [
          "laboratory",
          "password",
          "scientist",
          "invention"
        ],
        "answer": "laboratory",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-087",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Measurement & Physics",
    "number": 87,
    "word": "temperature",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The measured amount of heat in a place or in the body.",
    "example": "Use a thermometer to measure the temperature of the liquid.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 93,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'temperature' mean?",
        "options": [
          "The measured amount of heat in a place or in the body.",
          "A piece of equipment used to put electricity into a battery.",
          "To copy or send data from your computer to the internet.",
          "A series of instructions that makes a computer perform a task."
        ],
        "answer": "The measured amount of heat in a place or in the body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Use a thermometer to measure the ______ of the liquid.",
        "options": [
          "temperature",
          "experiment",
          "touchscreen",
          "memory"
        ],
        "answer": "temperature",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The measured amount of heat in a place or in the body.",
        "options": [
          "temperature",
          "experiment",
          "touchscreen",
          "memory"
        ],
        "answer": "temperature",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-088",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Measurement & Physics",
    "number": 88,
    "word": "energy",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The power from something such as electricity or oil that can do work.",
    "example": "Solar panels use energy from the sun.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 94,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'energy' mean?",
        "options": [
          "The power from something such as electricity or oil that can do work.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "A piece of equipment used to put electricity into a battery.",
          "A secret word or combination of letters and numbers used to access a system."
        ],
        "answer": "The power from something such as electricity or oil that can do work.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Solar panels use ______ from the sun.",
        "options": [
          "energy",
          "experiment",
          "charger",
          "laboratory"
        ],
        "answer": "energy",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The power from something such as electricity or oil that can do work.",
        "options": [
          "energy",
          "experiment",
          "charger",
          "laboratory"
        ],
        "answer": "energy",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-089",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Measurement & Physics",
    "number": 89,
    "word": "power",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
    "example": "Turn off the TV to save power.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 95,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'power' mean?",
        "options": [
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "A screen which allows giving instructions to a computer by touching it.",
          "A machine that uses energy to produce movement.",
          "A series of instructions that makes a computer perform a task."
        ],
        "answer": "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Turn off the TV to save ______.",
        "options": [
          "power",
          "virus",
          "charger",
          "invention"
        ],
        "answer": "power",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Energy, usually electricity, that is used to provide light, heat, or operate machines.",
        "options": [
          "power",
          "virus",
          "charger",
          "invention"
        ],
        "answer": "power",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-090",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Measurement & Physics",
    "number": 90,
    "word": "electricity",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A form of energy that provides power to machines and lights.",
    "example": "The storm cut off the electricity in our neighbourhood.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 96,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'electricity' mean?",
        "options": [
          "A form of energy that provides power to machines and lights.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "A secret word or combination of letters and numbers used to access a system.",
          "A piece of equipment with moving parts that does work when it is given power."
        ],
        "answer": "A form of energy that provides power to machines and lights.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The storm cut off the ______ in our neighbourhood.",
        "options": [
          "electricity",
          "energy",
          "temperature",
          "memory"
        ],
        "answer": "electricity",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A form of energy that provides power to machines and lights.",
        "options": [
          "electricity",
          "energy",
          "temperature",
          "memory"
        ],
        "answer": "electricity",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-091",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Engineering",
    "number": 91,
    "word": "engine",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A machine that uses energy to produce movement.",
    "example": "The car's engine is very loud.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 97,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'engine' mean?",
        "options": [
          "A machine that uses energy to produce movement.",
          "The power from something such as electricity or oil that can do work.",
          "To copy or send data from your computer to the internet.",
          "A test done in order to learn something or to discover if something works."
        ],
        "answer": "A machine that uses energy to produce movement.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The car's ______ is very loud.",
        "options": [
          "engine",
          "robot",
          "discovery",
          "equipment"
        ],
        "answer": "engine",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A machine that uses energy to produce movement.",
        "options": [
          "engine",
          "robot",
          "discovery",
          "equipment"
        ],
        "answer": "engine",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-092",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Engineering",
    "number": 92,
    "word": "machine",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A piece of equipment with moving parts that does work when it is given power.",
    "example": "A washing machine cleans clothes automatically.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 98,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'machine' mean?",
        "options": [
          "A piece of equipment with moving parts that does work when it is given power.",
          "A piece of equipment used to put electricity into a battery.",
          "A test done in order to learn something or to discover if something works.",
          "A screen which allows giving instructions to a computer by touching it."
        ],
        "answer": "A piece of equipment with moving parts that does work when it is given power.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A washing ______ cleans clothes automatically.",
        "options": [
          "machine",
          "temperature",
          "touchscreen",
          "engine"
        ],
        "answer": "machine",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A piece of equipment with moving parts that does work when it is given power.",
        "options": [
          "machine",
          "temperature",
          "touchscreen",
          "engine"
        ],
        "answer": "machine",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-093",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Engineering",
    "number": 93,
    "word": "robot",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A machine controlled by a computer that is used to perform jobs automatically.",
    "example": "The factory uses a robot to build cars.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 99,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'robot' mean?",
        "options": [
          "A machine controlled by a computer that is used to perform jobs automatically.",
          "The part of a computer in which information or programs are stored.",
          "The programs and other operating information used by a computer.",
          "The measured amount of heat in a place or in the body."
        ],
        "answer": "A machine controlled by a computer that is used to perform jobs automatically.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The factory uses a ______ to build cars.",
        "options": [
          "robot",
          "invention",
          "password",
          "equipment"
        ],
        "answer": "robot",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A machine controlled by a computer that is used to perform jobs automatically.",
        "options": [
          "robot",
          "invention",
          "password",
          "equipment"
        ],
        "answer": "robot",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-094",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 94,
    "word": "satellite",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A device sent up into space to travel around the Earth, used for collecting information or communicating.",
    "example": "Our GPS uses signals from a satellite in space.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 100,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'satellite' mean?",
        "options": [
          "A device sent up into space to travel around the Earth, used for collecting information or communicating.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "A form of energy that provides power to machines and lights.",
          "The power from something such as electricity or oil that can do work."
        ],
        "answer": "A device sent up into space to travel around the Earth, used for collecting information or communicating.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our GPS uses signals from a ______ in space.",
        "options": [
          "satellite",
          "laboratory",
          "electricity",
          "equipment"
        ],
        "answer": "satellite",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A device sent up into space to travel around the Earth, used for collecting information or communicating.",
        "options": [
          "satellite",
          "laboratory",
          "electricity",
          "equipment"
        ],
        "answer": "satellite",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-095",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Scientific Process",
    "number": 95,
    "word": "equipment",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The set of necessary tools, clothing, etc. for a particular purpose.",
    "example": "We have all the equipment we need for the camping trip.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 101,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'equipment' mean?",
        "options": [
          "The set of necessary tools, clothing, etc. for a particular purpose.",
          "To find information, a place, or an object, especially for the first time.",
          "A series of instructions that makes a computer perform a task.",
          "A room or building with scientific equipment for doing tests."
        ],
        "answer": "The set of necessary tools, clothing, etc. for a particular purpose.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We have all the ______ we need for the camping trip.",
        "options": [
          "equipment",
          "program",
          "device",
          "scientist"
        ],
        "answer": "equipment",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The set of necessary tools, clothing, etc. for a particular purpose.",
        "options": [
          "equipment",
          "program",
          "device",
          "scientist"
        ],
        "answer": "equipment",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-096",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 96,
    "word": "touchscreen",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A screen which allows giving instructions to a computer by touching it.",
    "example": "Most modern smartphones have a touchscreen.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 102,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'touchscreen' mean?",
        "options": [
          "A screen which allows giving instructions to a computer by touching it.",
          "A series of instructions that makes a computer perform a task.",
          "The measured amount of heat in a place or in the body.",
          "A room or building with scientific equipment for doing tests."
        ],
        "answer": "A screen which allows giving instructions to a computer by touching it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Most modern smartphones have a ______.",
        "options": [
          "touchscreen",
          "robot",
          "power",
          "device"
        ],
        "answer": "touchscreen",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A screen which allows giving instructions to a computer by touching it.",
        "options": [
          "touchscreen",
          "robot",
          "power",
          "device"
        ],
        "answer": "touchscreen",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-097",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 97,
    "word": "delete",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To remove something, especially from a computer's memory.",
    "example": "I accidentally deleted my essay file.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 103,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'delete' mean?",
        "options": [
          "To remove something, especially from a computer's memory.",
          "The process of finding something for the first time.",
          "A piece of equipment used to put electricity into a battery.",
          "To find information, a place, or an object, especially for the first time."
        ],
        "answer": "To remove something, especially from a computer's memory.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I accidentally ______ my essay file.",
        "options": [
          "delete",
          "connect",
          "invent",
          "download"
        ],
        "answer": "delete",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To remove something, especially from a computer's memory.",
        "options": [
          "delete",
          "connect",
          "invent",
          "download"
        ],
        "answer": "delete",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-098",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 98,
    "word": "virus",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A computer program designed to cause damage or steal data.",
    "example": "My laptop caught a virus from a dangerous website.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 104,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'virus' mean?",
        "options": [
          "A computer program designed to cause damage or steal data.",
          "A screen which allows giving instructions to a computer by touching it.",
          "A test done in order to learn something or to discover if something works.",
          "The process of finding something for the first time."
        ],
        "answer": "A computer program designed to cause damage or steal data.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My laptop caught a ______ from a dangerous website.",
        "options": [
          "virus",
          "experiment",
          "equipment",
          "invention"
        ],
        "answer": "virus",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A computer program designed to cause damage or steal data.",
        "options": [
          "virus",
          "experiment",
          "equipment",
          "invention"
        ],
        "answer": "virus",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-099",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 99,
    "word": "memory",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The part of a computer in which information or programs are stored.",
    "example": "This phone has 128 gigabytes of memory.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 105,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'memory' mean?",
        "options": [
          "The part of a computer in which information or programs are stored.",
          "Something that has been designed or created for the first time.",
          "The measured amount of heat in a place or in the body.",
          "A computer program designed to cause damage or steal data."
        ],
        "answer": "The part of a computer in which information or programs are stored.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This phone has 128 gigabytes of ______.",
        "options": [
          "memory",
          "engine",
          "software",
          "password"
        ],
        "answer": "memory",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The part of a computer in which information or programs are stored.",
        "options": [
          "memory",
          "engine",
          "software",
          "password"
        ],
        "answer": "memory",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "ST-A2H-100",
    "themeCode": "ST",
    "theme": "Science & Technology",
    "themeCategory": "Advanced Tech",
    "number": 100,
    "word": "program",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A series of instructions that makes a computer perform a task.",
    "example": "He is writing a computer program for his science project.",
    "bm": "",
    "sourceSheet": "Science & Technology",
    "sourceRow": 106,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'program' mean?",
        "options": [
          "A series of instructions that makes a computer perform a task.",
          "Energy, usually electricity, that is used to provide light, heat, or operate machines.",
          "To copy data from the internet to your computer.",
          "To find information, a place, or an object, especially for the first time."
        ],
        "answer": "A series of instructions that makes a computer perform a task.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He is writing a computer ______ for his science project.",
        "options": [
          "program",
          "invention",
          "engine",
          "temperature"
        ],
        "answer": "program",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A series of instructions that makes a computer perform a task.",
        "options": [
          "program",
          "invention",
          "engine",
          "temperature"
        ],
        "answer": "program",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-001",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Safety",
    "number": 1,
    "word": "accident",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An unexpected event that may cause injury or damage.",
    "example": "The cyclist had a small accident on the way to school.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 2,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'accident' mean?",
        "options": [
          "An unexpected event that may cause injury or damage.",
          "The surface of the earth that people walk on.",
          "The red liquid that flows around your body.",
          "A common illness that causes fever, tiredness and body pain."
        ],
        "answer": "An unexpected event that may cause injury or damage.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cyclist had a small ______ on the way to school.",
        "options": [
          "accident",
          "rock",
          "flu",
          "bin"
        ],
        "answer": "accident",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An unexpected event that may cause injury or damage.",
        "options": [
          "accident",
          "rock",
          "flu",
          "bin"
        ],
        "answer": "accident",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-002",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Healthy Lifestyle",
    "number": 2,
    "word": "active",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Doing many things and moving your body often.",
    "example": "I stay active by playing badminton after school.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 3,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'active' mean?",
        "options": [
          "Doing many things and moving your body often.",
          "A substance used to treat or prevent illness.",
          "An animal with fur, long arms and often a long tail.",
          "A hard natural material that forms part of the earth."
        ],
        "answer": "Doing many things and moving your body often.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I stay ______ by playing badminton after school.",
        "options": [
          "active",
          "fit",
          "careful",
          "fresh"
        ],
        "answer": "active",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Doing many things and moving your body often.",
        "options": [
          "active",
          "fit",
          "careful",
          "fresh"
        ],
        "answer": "active",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-003",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Body",
    "number": 3,
    "word": "alive",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Living and not dead.",
    "example": "The doctor checked that the injured bird was still alive.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 4,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'alive' mean?",
        "options": [
          "Living and not dead.",
          "An unexpected event that may cause injury or damage.",
          "A place where people stay in tents, or the activity of staying there.",
          "The part of the body between the head and shoulders."
        ],
        "answer": "Living and not dead.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The doctor checked that the injured bird was still ______.",
        "options": [
          "alive",
          "active",
          "ill",
          "wild"
        ],
        "answer": "alive",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Living and not dead.",
        "options": [
          "alive",
          "active",
          "ill",
          "wild"
        ],
        "answer": "alive",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-004",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 4,
    "word": "ankle",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The joint that connects your foot to your leg.",
    "example": "She hurt her ankle while running on the field.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 5,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'ankle' mean?",
        "options": [
          "The joint that connects your foot to your leg.",
          "The natural state of rest when your eyes are closed.",
          "Damage to the body caused by an accident or activity.",
          "A hard natural material that forms part of the earth."
        ],
        "answer": "The joint that connects your foot to your leg.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She hurt her ______ while running on the field.",
        "options": [
          "ankle",
          "accident",
          "valley",
          "heart"
        ],
        "answer": "ankle",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The joint that connects your foot to your leg.",
        "options": [
          "ankle",
          "accident",
          "valley",
          "heart"
        ],
        "answer": "ankle",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-005",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Rest & Sleep",
    "number": 5,
    "word": "asleep",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Sleeping and not awake.",
    "example": "My little brother was asleep by ten o'clock.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 6,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'asleep' mean?",
        "options": [
          "Sleeping and not awake.",
          "A large wild animal with thick fur and strong legs.",
          "A common illness that causes fever, tiredness and body pain.",
          "The activity of breathing in smoke from cigarettes."
        ],
        "answer": "Sleeping and not awake.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My little brother was ______ by ten o'clock.",
        "options": [
          "asleep",
          "wild",
          "active",
          "careful"
        ],
        "answer": "asleep",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Sleeping and not awake.",
        "options": [
          "asleep",
          "wild",
          "active",
          "careful"
        ],
        "answer": "asleep",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-006",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Fitness & Exercise",
    "number": 6,
    "word": "athlete",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A person who is trained to compete in sports.",
    "example": "The athlete trains every morning before school.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 7,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'athlete' mean?",
        "options": [
          "A person who is trained to compete in sports.",
          "The space above the earth that we see when we look up.",
          "Things that are no longer wanted and are thrown away.",
          "Attention and help given to keep someone healthy or safe."
        ],
        "answer": "A person who is trained to compete in sports.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ trains every morning before school.",
        "options": [
          "athlete",
          "heat",
          "fishing",
          "season"
        ],
        "answer": "athlete",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A person who is trained to compete in sports.",
        "options": [
          "athlete",
          "heat",
          "fishing",
          "season"
        ],
        "answer": "athlete",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-007",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 7,
    "word": "blood",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The red liquid that flows around your body.",
    "example": "The nurse cleaned the cut before checking the blood.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 8,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'blood' mean?",
        "options": [
          "The red liquid that flows around your body.",
          "A substance used with water for washing and cleaning.",
          "A health problem or disease that makes someone unwell.",
          "A common illness that causes fever, tiredness and body pain."
        ],
        "answer": "The red liquid that flows around your body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The nurse cleaned the cut before checking the ______.",
        "options": [
          "blood",
          "wind",
          "injury",
          "insect"
        ],
        "answer": "blood",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The red liquid that flows around your body.",
        "options": [
          "blood",
          "wind",
          "injury",
          "insect"
        ],
        "answer": "blood",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-008",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 8,
    "word": "bone",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "One of the hard parts that form the skeleton of a body.",
    "example": "Milk contains nutrients that help keep our bones strong.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 9,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bone' mean?",
        "options": [
          "One of the hard parts that form the skeleton of a body.",
          "The joint that connects your foot to your leg.",
          "A common illness that causes fever, tiredness and body pain.",
          "The organ in your chest that pumps blood around your body."
        ],
        "answer": "One of the hard parts that form the skeleton of a body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Milk contains nutrients that help keep our ______ strong.",
        "options": [
          "bone",
          "grass",
          "athlete",
          "pet"
        ],
        "answer": "bone",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: One of the hard parts that form the skeleton of a body.",
        "options": [
          "bone",
          "grass",
          "athlete",
          "pet"
        ],
        "answer": "bone",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-009",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 9,
    "word": "brain",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The organ in your head that controls thinking and movement.",
    "example": "Getting enough sleep helps your brain work well.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 10,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'brain' mean?",
        "options": [
          "The organ in your head that controls thinking and movement.",
          "Sleeping and not awake.",
          "Moving air, especially outside.",
          "A small animal with six legs, such as an ant or butterfly."
        ],
        "answer": "The organ in your head that controls thinking and movement.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Getting enough sleep helps your ______ work well.",
        "options": [
          "brain",
          "frog",
          "accident",
          "valley"
        ],
        "answer": "brain",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The organ in your head that controls thinking and movement.",
        "options": [
          "brain",
          "frog",
          "accident",
          "valley"
        ],
        "answer": "brain",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-010",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Personal Hygiene",
    "number": 10,
    "word": "brush",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To clean something by rubbing it with a brush.",
    "example": "I brush my teeth twice a day.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 11,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'brush' mean?",
        "options": [
          "To clean something by rubbing it with a brush.",
          "Doing many things and moving your body often.",
          "A raised movement of water on the surface of the sea.",
          "The amount of space between two places or things."
        ],
        "answer": "To clean something by rubbing it with a brush.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ my teeth twice a day.",
        "options": [
          "brush",
          "hurt",
          "burn",
          "cycle"
        ],
        "answer": "brush",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To clean something by rubbing it with a brush.",
        "options": [
          "brush",
          "hurt",
          "burn",
          "cycle"
        ],
        "answer": "brush",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-011",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Safety",
    "number": 11,
    "word": "burn",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To damage the skin with heat or fire.",
    "example": "Be careful not to burn your hand on the hot pan.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 12,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'burn' mean?",
        "options": [
          "To damage the skin with heat or fire.",
          "The space above the earth that we see when we look up.",
          "The organ in the body where food begins to be digested.",
          "To use less of something or prevent it from being wasted."
        ],
        "answer": "To damage the skin with heat or fire.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Be careful not to ______ your hand on the hot pan.",
        "options": [
          "burn",
          "cycle",
          "brush",
          "hurt"
        ],
        "answer": "burn",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To damage the skin with heat or fire.",
        "options": [
          "burn",
          "cycle",
          "brush",
          "hurt"
        ],
        "answer": "burn",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-012",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Well-being",
    "number": 12,
    "word": "care",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Attention and help given to keep someone healthy or safe.",
    "example": "Good health care is important for every community.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 13,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'care' mean?",
        "options": [
          "Attention and help given to keep someone healthy or safe.",
          "An animal kept at home for company.",
          "The surface of the earth that people walk on.",
          "An area of land that is higher than the land around it."
        ],
        "answer": "Attention and help given to keep someone healthy or safe.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Good health ______ is important for every community.",
        "options": [
          "care",
          "wave",
          "injury",
          "patient"
        ],
        "answer": "care",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Attention and help given to keep someone healthy or safe.",
        "options": [
          "care",
          "wave",
          "injury",
          "patient"
        ],
        "answer": "care",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-013",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Safety",
    "number": 13,
    "word": "careful",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Giving attention so that you avoid danger or mistakes.",
    "example": "Be careful when you cross a busy road.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 14,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'careful' mean?",
        "options": [
          "Giving attention so that you avoid danger or mistakes.",
          "An area of land used for growing crops or keeping animals.",
          "To travel by bicycle.",
          "A hard natural material that forms part of the earth."
        ],
        "answer": "Giving attention so that you avoid danger or mistakes.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Be ______ when you cross a busy road.",
        "options": [
          "careful",
          "wet",
          "asleep",
          "active"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Giving attention so that you avoid danger or mistakes.",
        "options": [
          "careful",
          "wet",
          "asleep",
          "active"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-014",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Fitness & Exercise",
    "number": 14,
    "word": "fit",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Healthy and strong because you exercise regularly.",
    "example": "Regular exercise can help us stay fit.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 15,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fit' mean?",
        "options": [
          "Healthy and strong because you exercise regularly.",
          "The activity of breathing in smoke from cigarettes.",
          "The activity of catching fish.",
          "To clean something by rubbing it with a brush."
        ],
        "answer": "Healthy and strong because you exercise regularly.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Regular exercise can help us stay ______.",
        "options": [
          "fit",
          "safe",
          "wooden",
          "alive"
        ],
        "answer": "fit",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Healthy and strong because you exercise regularly.",
        "options": [
          "fit",
          "safe",
          "wooden",
          "alive"
        ],
        "answer": "fit",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-015",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Illness",
    "number": 15,
    "word": "flu",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A common illness that causes fever, tiredness and body pain.",
    "example": "He stayed at home because he had the flu.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 16,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'flu' mean?",
        "options": [
          "A common illness that causes fever, tiredness and body pain.",
          "A large area of land covered with trees.",
          "Living or growing in nature without being controlled by people.",
          "A raised movement of water on the surface of the sea."
        ],
        "answer": "A common illness that causes fever, tiredness and body pain.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He stayed at home because he had the ______.",
        "options": [
          "flu",
          "heart",
          "storm",
          "medicine"
        ],
        "answer": "flu",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A common illness that causes fever, tiredness and body pain.",
        "options": [
          "flu",
          "heart",
          "storm",
          "medicine"
        ],
        "answer": "flu",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-016",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Illness",
    "number": 16,
    "word": "headache",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A pain in your head.",
    "example": "I had a headache after studying for too long.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 17,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'headache' mean?",
        "options": [
          "A pain in your head.",
          "The outer covering of a person's or animal's body.",
          "One of the hard parts that form the skeleton of a body.",
          "An unpleasant feeling in a part of the body."
        ],
        "answer": "A pain in your head.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I had a ______ after studying for too long.",
        "options": [
          "headache",
          "storm",
          "accident",
          "illness"
        ],
        "answer": "headache",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A pain in your head.",
        "options": [
          "headache",
          "storm",
          "accident",
          "illness"
        ],
        "answer": "headache",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-017",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 17,
    "word": "heart",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The organ in your chest that pumps blood around your body.",
    "example": "Walking every day is good for your heart.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 18,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'heart' mean?",
        "options": [
          "The organ in your chest that pumps blood around your body.",
          "The activity or sport of moving quickly on foot.",
          "A common illness that causes fever, tiredness and body pain.",
          "An animal kept at home for company."
        ],
        "answer": "The organ in your chest that pumps blood around your body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Walking every day is good for your ______.",
        "options": [
          "heart",
          "soap",
          "season",
          "pain"
        ],
        "answer": "heart",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The organ in your chest that pumps blood around your body.",
        "options": [
          "heart",
          "soap",
          "season",
          "pain"
        ],
        "answer": "heart",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-018",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body & Measurement",
    "number": 18,
    "word": "height",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "How tall a person or thing is.",
    "example": "The nurse measured my height during the health check.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 19,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'height' mean?",
        "options": [
          "How tall a person or thing is.",
          "An animal kept at home for company.",
          "The space above the earth that we see when we look up.",
          "The outer covering of a person's or animal's body."
        ],
        "answer": "How tall a person or thing is.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The nurse measured my ______ during the health check.",
        "options": [
          "height",
          "ankle",
          "wood",
          "wind"
        ],
        "answer": "height",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: How tall a person or thing is.",
        "options": [
          "height",
          "ankle",
          "wood",
          "wind"
        ],
        "answer": "height",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-019",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Injury & Pain",
    "number": 19,
    "word": "hurt",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To cause pain or to feel pain.",
    "example": "My knee hurts after the long hike.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 20,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'hurt' mean?",
        "options": [
          "To cause pain or to feel pain.",
          "A period of relaxing or stopping activity to regain energy.",
          "A substance used with water for washing and cleaning.",
          "Moving air, especially outside."
        ],
        "answer": "To cause pain or to feel pain.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My knee ______ after the long hike.",
        "options": [
          "hurt",
          "brush",
          "cycle",
          "save"
        ],
        "answer": "hurt",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To cause pain or to feel pain.",
        "options": [
          "hurt",
          "brush",
          "cycle",
          "save"
        ],
        "answer": "hurt",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-020",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Illness",
    "number": 20,
    "word": "ill",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not healthy; sick.",
    "example": "She felt ill and went to see a doctor.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 21,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'ill' mean?",
        "options": [
          "Not healthy; sick.",
          "The hard material that forms the trunk and branches of a tree.",
          "A raised movement of water on the surface of the sea.",
          "The activity or sport of moving quickly on foot."
        ],
        "answer": "Not healthy; sick.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "She felt ______ and went to see a doctor.",
        "options": [
          "ill",
          "active",
          "wooden",
          "fresh"
        ],
        "answer": "ill",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not healthy; sick.",
        "options": [
          "ill",
          "active",
          "wooden",
          "fresh"
        ],
        "answer": "ill",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-021",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Illness",
    "number": 21,
    "word": "illness",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A health problem or disease that makes someone unwell.",
    "example": "Rest is important when recovering from an illness.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 22,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'illness' mean?",
        "options": [
          "A health problem or disease that makes someone unwell.",
          "A small animal with six legs, such as an ant or butterfly.",
          "How tall a person or thing is.",
          "Moving air, especially outside."
        ],
        "answer": "A health problem or disease that makes someone unwell.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Rest is important when recovering from an ______.",
        "options": [
          "illness",
          "sleep",
          "forest",
          "bone"
        ],
        "answer": "illness",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A health problem or disease that makes someone unwell.",
        "options": [
          "illness",
          "sleep",
          "forest",
          "bone"
        ],
        "answer": "illness",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-022",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Injury & Pain",
    "number": 22,
    "word": "injury",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Damage to the body caused by an accident or activity.",
    "example": "He could not play football because of a leg injury.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 23,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'injury' mean?",
        "options": [
          "Damage to the body caused by an accident or activity.",
          "To damage the skin with heat or fire.",
          "An area of land that is higher than the land around it.",
          "The organ in your head that controls thinking and movement."
        ],
        "answer": "Damage to the body caused by an accident or activity.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "He could not play football because of a leg ______.",
        "options": [
          "injury",
          "athlete",
          "brain",
          "height"
        ],
        "answer": "injury",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Damage to the body caused by an accident or activity.",
        "options": [
          "injury",
          "athlete",
          "brain",
          "height"
        ],
        "answer": "injury",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-023",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Medical Care",
    "number": 23,
    "word": "medicine",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A substance used to treat or prevent illness.",
    "example": "The doctor told me to take the medicine after meals.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 24,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'medicine' mean?",
        "options": [
          "A substance used to treat or prevent illness.",
          "The quality of being hot or the energy that makes things hot.",
          "Living and not dead.",
          "The space above the earth that we see when we look up."
        ],
        "answer": "A substance used to treat or prevent illness.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The doctor told me to take the ______ after meals.",
        "options": [
          "medicine",
          "insect",
          "illness",
          "neck"
        ],
        "answer": "medicine",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A substance used to treat or prevent illness.",
        "options": [
          "medicine",
          "insect",
          "illness",
          "neck"
        ],
        "answer": "medicine",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-024",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 24,
    "word": "neck",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The part of the body between the head and shoulders.",
    "example": "My neck felt stiff after sitting for a long time.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 25,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'neck' mean?",
        "options": [
          "The part of the body between the head and shoulders.",
          "Worried or slightly afraid about something.",
          "A place where people stay in tents, or the activity of staying there.",
          "Clean, cool or recently produced."
        ],
        "answer": "The part of the body between the head and shoulders.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My ______ felt stiff after sitting for a long time.",
        "options": [
          "neck",
          "grass",
          "bone",
          "sleep"
        ],
        "answer": "neck",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The part of the body between the head and shoulders.",
        "options": [
          "neck",
          "grass",
          "bone",
          "sleep"
        ],
        "answer": "neck",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-025",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Mental Well-being",
    "number": 25,
    "word": "nervous",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Worried or slightly afraid about something.",
    "example": "I felt nervous before speaking in front of the class.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 26,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'nervous' mean?",
        "options": [
          "Worried or slightly afraid about something.",
          "One of the hard parts that form the skeleton of a body.",
          "A low area of land between hills or mountains.",
          "Healthy and strong because you exercise regularly."
        ],
        "answer": "Worried or slightly afraid about something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I felt ______ before speaking in front of the class.",
        "options": [
          "nervous",
          "wooden",
          "wild",
          "safe"
        ],
        "answer": "nervous",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Worried or slightly afraid about something.",
        "options": [
          "nervous",
          "wooden",
          "wild",
          "safe"
        ],
        "answer": "nervous",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-026",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Injury & Pain",
    "number": 26,
    "word": "pain",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An unpleasant feeling in a part of the body.",
    "example": "Tell the teacher if you feel pain after an injury.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 27,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pain' mean?",
        "options": [
          "An unpleasant feeling in a part of the body.",
          "To cause pain or to feel pain.",
          "A large wild animal with thick fur and strong legs.",
          "To damage the skin with heat or fire."
        ],
        "answer": "An unpleasant feeling in a part of the body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Tell the teacher if you feel ______ after an injury.",
        "options": [
          "pain",
          "bin",
          "rock",
          "pet"
        ],
        "answer": "pain",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An unpleasant feeling in a part of the body.",
        "options": [
          "pain",
          "bin",
          "rock",
          "pet"
        ],
        "answer": "pain",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-027",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Medical Care",
    "number": 27,
    "word": "patient",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A person who receives medical treatment.",
    "example": "The patient waited quietly to see the doctor.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 28,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'patient' mean?",
        "options": [
          "A person who receives medical treatment.",
          "An animal with fur, long arms and often a long tail.",
          "The amount of space between two places or things.",
          "The natural object that moves around the Earth and shines at night."
        ],
        "answer": "A person who receives medical treatment.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ waited quietly to see the doctor.",
        "options": [
          "patient",
          "monkey",
          "grass",
          "farm"
        ],
        "answer": "patient",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A person who receives medical treatment.",
        "options": [
          "patient",
          "monkey",
          "grass",
          "farm"
        ],
        "answer": "patient",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-028",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Rest & Sleep",
    "number": 28,
    "word": "rest",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A period of relaxing or stopping activity to regain energy.",
    "example": "You should rest after a long day of exercise.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 29,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'rest' mean?",
        "options": [
          "A period of relaxing or stopping activity to regain energy.",
          "A common green plant with narrow leaves that covers the ground.",
          "A person who receives medical treatment.",
          "A common illness that causes fever, tiredness and body pain."
        ],
        "answer": "A period of relaxing or stopping activity to regain energy.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You should ______ after a long day of exercise.",
        "options": [
          "rest",
          "cycle",
          "active",
          "brain"
        ],
        "answer": "rest",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A period of relaxing or stopping activity to regain energy.",
        "options": [
          "rest",
          "cycle",
          "active",
          "brain"
        ],
        "answer": "rest",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-029",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Fitness & Exercise",
    "number": 29,
    "word": "running",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The activity or sport of moving quickly on foot.",
    "example": "Running is a simple way to improve fitness.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 30,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'running' mean?",
        "options": [
          "The activity or sport of moving quickly on foot.",
          "Clean, cool or recently produced.",
          "A health problem or disease that makes someone unwell.",
          "Things that are no longer wanted and are thrown away."
        ],
        "answer": "The activity or sport of moving quickly on foot.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ is a simple way to improve fitness.",
        "options": [
          "running",
          "camping",
          "valley",
          "neck"
        ],
        "answer": "running",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity or sport of moving quickly on foot.",
        "options": [
          "running",
          "camping",
          "valley",
          "neck"
        ],
        "answer": "running",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-030",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 30,
    "word": "skin",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The outer covering of a person's or animal's body.",
    "example": "Wear sunscreen to protect your skin from the sun.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 31,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'skin' mean?",
        "options": [
          "The outer covering of a person's or animal's body.",
          "The hard material that forms the trunk and branches of a tree.",
          "To clean something by rubbing it with a brush.",
          "An animal kept at home for company."
        ],
        "answer": "The outer covering of a person's or animal's body.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Wear sunscreen to protect your ______ from the sun.",
        "options": [
          "skin",
          "forest",
          "farm",
          "frog"
        ],
        "answer": "skin",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The outer covering of a person's or animal's body.",
        "options": [
          "skin",
          "forest",
          "farm",
          "frog"
        ],
        "answer": "skin",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-031",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Rest & Sleep",
    "number": 31,
    "word": "sleep",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The natural state of rest when your eyes are closed.",
    "example": "Teenagers need enough sleep to stay healthy.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 32,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sleep' mean?",
        "options": [
          "The natural state of rest when your eyes are closed.",
          "Made of wood.",
          "A period of very bad weather with strong wind, rain or thunder.",
          "A small animal with smooth skin that can live on land and in water."
        ],
        "answer": "The natural state of rest when your eyes are closed.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Teenagers need enough ______ to stay healthy.",
        "options": [
          "sleep",
          "weight",
          "grass",
          "ground"
        ],
        "answer": "sleep",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The natural state of rest when your eyes are closed.",
        "options": [
          "sleep",
          "weight",
          "grass",
          "ground"
        ],
        "answer": "sleep",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-032",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health Risks",
    "number": 32,
    "word": "smoking",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The activity of breathing in smoke from cigarettes.",
    "example": "Smoking is harmful to the lungs.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 33,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'smoking' mean?",
        "options": [
          "The activity of breathing in smoke from cigarettes.",
          "A large area of land covered with trees.",
          "An area of land that is higher than the land around it.",
          "A small animal with six legs, such as an ant or butterfly."
        ],
        "answer": "The activity of breathing in smoke from cigarettes.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ is harmful to the lungs.",
        "options": [
          "smoking",
          "storm",
          "valley",
          "stomach"
        ],
        "answer": "smoking",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of breathing in smoke from cigarettes.",
        "options": [
          "smoking",
          "storm",
          "valley",
          "stomach"
        ],
        "answer": "smoking",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-033",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Personal Hygiene",
    "number": 33,
    "word": "soap",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A substance used with water for washing and cleaning.",
    "example": "Wash your hands with soap before eating.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 34,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'soap' mean?",
        "options": [
          "A substance used with water for washing and cleaning.",
          "Giving attention so that you avoid danger or mistakes.",
          "A common green plant with narrow leaves that covers the ground.",
          "The joint that connects your foot to your leg."
        ],
        "answer": "A substance used with water for washing and cleaning.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Wash your hands with ______ before eating.",
        "options": [
          "soap",
          "flu",
          "athlete",
          "grass"
        ],
        "answer": "soap",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A substance used with water for washing and cleaning.",
        "options": [
          "soap",
          "flu",
          "athlete",
          "grass"
        ],
        "answer": "soap",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-034",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body Parts",
    "number": 34,
    "word": "stomach",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The organ in the body where food begins to be digested.",
    "example": "My stomach felt uncomfortable after eating too quickly.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 35,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'stomach' mean?",
        "options": [
          "The organ in the body where food begins to be digested.",
          "A low area of land between hills or mountains.",
          "Things that are no longer wanted and are thrown away.",
          "A large wild animal with thick fur and strong legs."
        ],
        "answer": "The organ in the body where food begins to be digested.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My ______ felt uncomfortable after eating too quickly.",
        "options": [
          "stomach",
          "wood",
          "weight",
          "ankle"
        ],
        "answer": "stomach",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The organ in the body where food begins to be digested.",
        "options": [
          "stomach",
          "wood",
          "weight",
          "ankle"
        ],
        "answer": "stomach",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-035",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Body & Measurement",
    "number": 35,
    "word": "weight",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "How heavy a person or thing is.",
    "example": "A balanced diet can help us maintain a healthy weight.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 36,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'weight' mean?",
        "options": [
          "How heavy a person or thing is.",
          "Doing many things and moving your body often.",
          "The activity of staying outdoors in a tent.",
          "To clean something by rubbing it with a brush."
        ],
        "answer": "How heavy a person or thing is.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A balanced diet can help us maintain a healthy ______.",
        "options": [
          "weight",
          "valley",
          "bone",
          "stomach"
        ],
        "answer": "weight",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: How heavy a person or thing is.",
        "options": [
          "weight",
          "valley",
          "bone",
          "stomach"
        ],
        "answer": "weight",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-036",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Wildlife",
    "number": 36,
    "word": "bear",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A large wild animal with thick fur and strong legs.",
    "example": "A bear needs a safe natural habitat to survive.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 37,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bear' mean?",
        "options": [
          "A large wild animal with thick fur and strong legs.",
          "The red liquid that flows around your body.",
          "To use less of something or prevent it from being wasted.",
          "A period of relaxing or stopping activity to regain energy."
        ],
        "answer": "A large wild animal with thick fur and strong legs.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A ______ needs a safe natural habitat to survive.",
        "options": [
          "bear",
          "wind",
          "illness",
          "stomach"
        ],
        "answer": "bear",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A large wild animal with thick fur and strong legs.",
        "options": [
          "bear",
          "wind",
          "illness",
          "stomach"
        ],
        "answer": "bear",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-037",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Waste & Cleanliness",
    "number": 37,
    "word": "bin",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A container used for rubbish or waste.",
    "example": "Please put the empty bottle in the recycling bin.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 38,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bin' mean?",
        "options": [
          "A container used for rubbish or waste.",
          "Healthy and strong because you exercise regularly.",
          "One of the hard parts that form the skeleton of a body.",
          "A person who receives medical treatment."
        ],
        "answer": "A container used for rubbish or waste.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Please put the empty bottle in the recycling ______.",
        "options": [
          "bin",
          "frog",
          "medicine",
          "flu"
        ],
        "answer": "bin",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A container used for rubbish or waste.",
        "options": [
          "bin",
          "frog",
          "medicine",
          "flu"
        ],
        "answer": "bin",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-038",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Outdoor Environment",
    "number": 38,
    "word": "camp",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A place where people stay in tents, or the activity of staying there.",
    "example": "Our class will camp near the forest during the school trip.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 39,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'camp' mean?",
        "options": [
          "A place where people stay in tents, or the activity of staying there.",
          "A large area of land covered with trees.",
          "A person who is trained to compete in sports.",
          "The surface of the earth that people walk on."
        ],
        "answer": "A place where people stay in tents, or the activity of staying there.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our class will ______ near the forest during the school trip.",
        "options": [
          "camp",
          "burn",
          "heat",
          "wave"
        ],
        "answer": "camp",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A place where people stay in tents, or the activity of staying there.",
        "options": [
          "camp",
          "burn",
          "heat",
          "wave"
        ],
        "answer": "camp",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-039",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Outdoor Environment",
    "number": 39,
    "word": "camping",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The activity of staying outdoors in a tent.",
    "example": "Camping teaches us to respect nature.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 40,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'camping' mean?",
        "options": [
          "The activity of staying outdoors in a tent.",
          "A low area of land between hills or mountains.",
          "To clean something by rubbing it with a brush.",
          "The joint that connects your foot to your leg."
        ],
        "answer": "The activity of staying outdoors in a tent.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ teaches us to respect nature.",
        "options": [
          "camping",
          "hill",
          "height",
          "season"
        ],
        "answer": "camping",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of staying outdoors in a tent.",
        "options": [
          "camping",
          "hill",
          "height",
          "season"
        ],
        "answer": "camping",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-040",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Green Transport",
    "number": 40,
    "word": "cycle",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To travel by bicycle.",
    "example": "I cycle to the park instead of asking for a car ride.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 41,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cycle' mean?",
        "options": [
          "To travel by bicycle.",
          "To clean something by rubbing it with a brush.",
          "The organ in your chest that pumps blood around your body.",
          "The activity of breathing in smoke from cigarettes."
        ],
        "answer": "To travel by bicycle.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ to the park instead of asking for a car ride.",
        "options": [
          "cycle",
          "hurt",
          "save",
          "brush"
        ],
        "answer": "cycle",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To travel by bicycle.",
        "options": [
          "cycle",
          "hurt",
          "save",
          "brush"
        ],
        "answer": "cycle",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-041",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 41,
    "word": "desert",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A very dry area of land with little rain and few plants.",
    "example": "Very few plants can survive in a hot desert.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 42,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'desert' mean?",
        "options": [
          "A very dry area of land with little rain and few plants.",
          "A period of relaxing or stopping activity to regain energy.",
          "A raised movement of water on the surface of the sea.",
          "A liquid fuel used in many cars and motorcycles."
        ],
        "answer": "A very dry area of land with little rain and few plants.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Very few plants can survive in a hot ______.",
        "options": [
          "desert",
          "pain",
          "height",
          "neck"
        ],
        "answer": "desert",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A very dry area of land with little rain and few plants.",
        "options": [
          "desert",
          "pain",
          "height",
          "neck"
        ],
        "answer": "desert",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-042",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Places & Measurement",
    "number": 42,
    "word": "distance",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The amount of space between two places or things.",
    "example": "The distance from our school to the river is two kilometres.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 43,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'distance' mean?",
        "options": [
          "The amount of space between two places or things.",
          "The organ in your head that controls thinking and movement.",
          "Giving attention so that you avoid danger or mistakes.",
          "The activity of staying outdoors in a tent."
        ],
        "answer": "The amount of space between two places or things.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ from our school to the river is two kilometres.",
        "options": [
          "distance",
          "sky",
          "season",
          "sleep"
        ],
        "answer": "distance",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The amount of space between two places or things.",
        "options": [
          "distance",
          "sky",
          "season",
          "sleep"
        ],
        "answer": "distance",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-043",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Farming & Food",
    "number": 43,
    "word": "farm",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An area of land used for growing crops or keeping animals.",
    "example": "The farm grows vegetables without using too much water.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 44,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'farm' mean?",
        "options": [
          "An area of land used for growing crops or keeping animals.",
          "A period of very bad weather with strong wind, rain or thunder.",
          "The organ in your head that controls thinking and movement.",
          "Clean, cool or recently produced."
        ],
        "answer": "An area of land used for growing crops or keeping animals.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ grows vegetables without using too much water.",
        "options": [
          "farm",
          "heart",
          "fishing",
          "pain"
        ],
        "answer": "farm",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An area of land used for growing crops or keeping animals.",
        "options": [
          "farm",
          "heart",
          "fishing",
          "pain"
        ],
        "answer": "farm",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-044",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Resources",
    "number": 44,
    "word": "fishing",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The activity of catching fish.",
    "example": "Fishing should be controlled to protect fish populations.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 45,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fishing' mean?",
        "options": [
          "The activity of catching fish.",
          "To travel by bicycle.",
          "A common illness that causes fever, tiredness and body pain.",
          "The space above the earth that we see when we look up."
        ],
        "answer": "The activity of catching fish.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ should be controlled to protect fish populations.",
        "options": [
          "fishing",
          "brain",
          "medicine",
          "farm"
        ],
        "answer": "fishing",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of catching fish.",
        "options": [
          "fishing",
          "brain",
          "medicine",
          "farm"
        ],
        "answer": "fishing",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-045",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 45,
    "word": "forest",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A large area of land covered with trees.",
    "example": "Many wild animals live in the rainforest.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 46,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'forest' mean?",
        "options": [
          "A large area of land covered with trees.",
          "To clean something by rubbing it with a brush.",
          "A health problem or disease that makes someone unwell.",
          "The amount of space between two places or things."
        ],
        "answer": "A large area of land covered with trees.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Many wild animals live in the ______.",
        "options": [
          "forest",
          "season",
          "heart",
          "headache"
        ],
        "answer": "forest",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A large area of land covered with trees.",
        "options": [
          "forest",
          "season",
          "heart",
          "headache"
        ],
        "answer": "forest",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-046",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Air, Water & Food",
    "number": 46,
    "word": "fresh",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Clean, cool or recently produced.",
    "example": "We opened the windows to let fresh air into the room.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 47,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'fresh' mean?",
        "options": [
          "Clean, cool or recently produced.",
          "The part of the body between the head and shoulders.",
          "A period of very bad weather with strong wind, rain or thunder.",
          "A common illness that causes fever, tiredness and body pain."
        ],
        "answer": "Clean, cool or recently produced.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We opened the windows to let ______ air into the room.",
        "options": [
          "fresh",
          "nervous",
          "wild",
          "ill"
        ],
        "answer": "fresh",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Clean, cool or recently produced.",
        "options": [
          "fresh",
          "nervous",
          "wild",
          "ill"
        ],
        "answer": "fresh",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-047",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Wildlife",
    "number": 47,
    "word": "frog",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small animal with smooth skin that can live on land and in water.",
    "example": "The frog lives near the clean pond behind the school.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 48,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'frog' mean?",
        "options": [
          "A small animal with smooth skin that can live on land and in water.",
          "An area of land used for growing crops or keeping animals.",
          "The surface of the earth that people walk on.",
          "A small animal with six legs, such as an ant or butterfly."
        ],
        "answer": "A small animal with smooth skin that can live on land and in water.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ lives near the clean pond behind the school.",
        "options": [
          "frog",
          "insect",
          "desert",
          "petrol"
        ],
        "answer": "frog",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small animal with smooth skin that can live on land and in water.",
        "options": [
          "frog",
          "insect",
          "desert",
          "petrol"
        ],
        "answer": "frog",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-048",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Plants & Nature",
    "number": 48,
    "word": "grass",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A common green plant with narrow leaves that covers the ground.",
    "example": "The grass grows quickly during the rainy season.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 49,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'grass' mean?",
        "options": [
          "A common green plant with narrow leaves that covers the ground.",
          "Giving attention so that you avoid danger or mistakes.",
          "Sleeping and not awake.",
          "To use less of something or prevent it from being wasted."
        ],
        "answer": "A common green plant with narrow leaves that covers the ground.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ grows quickly during the rainy season.",
        "options": [
          "grass",
          "rubbish",
          "wave",
          "storm"
        ],
        "answer": "grass",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A common green plant with narrow leaves that covers the ground.",
        "options": [
          "grass",
          "rubbish",
          "wave",
          "storm"
        ],
        "answer": "grass",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-049",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 49,
    "word": "ground",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The surface of the earth that people walk on.",
    "example": "Do not throw rubbish on the ground.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 50,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'ground' mean?",
        "options": [
          "The surface of the earth that people walk on.",
          "A container used for rubbish or waste.",
          "An area of land that is higher than the land around it.",
          "The quality of being hot or the energy that makes things hot."
        ],
        "answer": "The surface of the earth that people walk on.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Do not throw rubbish on the ______.",
        "options": [
          "ground",
          "petrol",
          "ankle",
          "wood"
        ],
        "answer": "ground",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The surface of the earth that people walk on.",
        "options": [
          "ground",
          "petrol",
          "ankle",
          "wood"
        ],
        "answer": "ground",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-050",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 50,
    "word": "heat",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The quality of being hot or the energy that makes things hot.",
    "example": "The afternoon heat can be very strong during dry weather.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 51,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'heat' mean?",
        "options": [
          "The quality of being hot or the energy that makes things hot.",
          "To cause pain or to feel pain.",
          "Worried or slightly afraid about something.",
          "Doing many things and moving your body often."
        ],
        "answer": "The quality of being hot or the energy that makes things hot.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The afternoon ______ can be very strong during dry weather.",
        "options": [
          "heat",
          "soap",
          "monkey",
          "insect"
        ],
        "answer": "heat",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The quality of being hot or the energy that makes things hot.",
        "options": [
          "heat",
          "soap",
          "monkey",
          "insect"
        ],
        "answer": "heat",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-051",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 51,
    "word": "hill",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An area of land that is higher than the land around it.",
    "example": "We planted trees on the hill to protect the soil.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 52,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'hill' mean?",
        "options": [
          "An area of land that is higher than the land around it.",
          "The hard material that forms the trunk and branches of a tree.",
          "One of the hard parts that form the skeleton of a body.",
          "To clean something by rubbing it with a brush."
        ],
        "answer": "An area of land that is higher than the land around it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We planted trees on the ______ to protect the soil.",
        "options": [
          "hill",
          "weight",
          "pet",
          "accident"
        ],
        "answer": "hill",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An area of land that is higher than the land around it.",
        "options": [
          "hill",
          "weight",
          "pet",
          "accident"
        ],
        "answer": "hill",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-052",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Wildlife",
    "number": 52,
    "word": "insect",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small animal with six legs, such as an ant or butterfly.",
    "example": "The garden has many insects that help pollinate flowers.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 53,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'insect' mean?",
        "options": [
          "A small animal with six legs, such as an ant or butterfly.",
          "An unexpected event that may cause injury or damage.",
          "Doing many things and moving your body often.",
          "A liquid fuel used in many cars and motorcycles."
        ],
        "answer": "A small animal with six legs, such as an ant or butterfly.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The garden has many ______ that help pollinate flowers.",
        "options": [
          "insect",
          "wind",
          "season",
          "fishing"
        ],
        "answer": "insect",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small animal with six legs, such as an ant or butterfly.",
        "options": [
          "insect",
          "wind",
          "season",
          "fishing"
        ],
        "answer": "insect",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-053",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Wildlife",
    "number": 53,
    "word": "monkey",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An animal with fur, long arms and often a long tail.",
    "example": "The monkey lives in the trees near the forest.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 54,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'monkey' mean?",
        "options": [
          "An animal with fur, long arms and often a long tail.",
          "A very dry area of land with little rain and few plants.",
          "The organ in your chest that pumps blood around your body.",
          "An area of land that is higher than the land around it."
        ],
        "answer": "An animal with fur, long arms and often a long tail.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ lives in the trees near the forest.",
        "options": [
          "monkey",
          "illness",
          "pain",
          "patient"
        ],
        "answer": "monkey",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An animal with fur, long arms and often a long tail.",
        "options": [
          "monkey",
          "illness",
          "pain",
          "patient"
        ],
        "answer": "monkey",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-054",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Earth & Space",
    "number": 54,
    "word": "moon",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The natural object that moves around the Earth and shines at night.",
    "example": "The moon looked bright above the mountain.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 55,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'moon' mean?",
        "options": [
          "The natural object that moves around the Earth and shines at night.",
          "A substance used with water for washing and cleaning.",
          "Damage to the body caused by an accident or activity.",
          "A common green plant with narrow leaves that covers the ground."
        ],
        "answer": "The natural object that moves around the Earth and shines at night.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ looked bright above the mountain.",
        "options": [
          "moon",
          "rubbish",
          "pet",
          "forest"
        ],
        "answer": "moon",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The natural object that moves around the Earth and shines at night.",
        "options": [
          "moon",
          "rubbish",
          "pet",
          "forest"
        ],
        "answer": "moon",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-055",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Animals & Care",
    "number": 55,
    "word": "pet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An animal kept at home for company.",
    "example": "Pet owners should give their animals clean water every day.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 56,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pet' mean?",
        "options": [
          "An animal kept at home for company.",
          "The organ in your chest that pumps blood around your body.",
          "An area of land used for growing crops or keeping animals.",
          "A liquid fuel used in many cars and motorcycles."
        ],
        "answer": "An animal kept at home for company.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ owners should give their animals clean water every day.",
        "options": [
          "pet",
          "athlete",
          "patient",
          "bone"
        ],
        "answer": "pet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An animal kept at home for company.",
        "options": [
          "pet",
          "athlete",
          "patient",
          "bone"
        ],
        "answer": "pet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-056",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Transport & Pollution",
    "number": 56,
    "word": "petrol",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A liquid fuel used in many cars and motorcycles.",
    "example": "Using less petrol can help reduce air pollution.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 57,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'petrol' mean?",
        "options": [
          "A liquid fuel used in many cars and motorcycles.",
          "The organ in the body where food begins to be digested.",
          "Living and not dead.",
          "Clean, cool or recently produced."
        ],
        "answer": "A liquid fuel used in many cars and motorcycles.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Using less ______ can help reduce air pollution.",
        "options": [
          "petrol",
          "bear",
          "ground",
          "flu"
        ],
        "answer": "petrol",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A liquid fuel used in many cars and motorcycles.",
        "options": [
          "petrol",
          "bear",
          "ground",
          "flu"
        ],
        "answer": "petrol",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-057",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 57,
    "word": "rock",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A hard natural material that forms part of the earth.",
    "example": "We saw large rocks beside the waterfall.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 58,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'rock' mean?",
        "options": [
          "A hard natural material that forms part of the earth.",
          "A common green plant with narrow leaves that covers the ground.",
          "How heavy a person or thing is.",
          "An unpleasant feeling in a part of the body."
        ],
        "answer": "A hard natural material that forms part of the earth.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We saw large ______ beside the waterfall.",
        "options": [
          "rock",
          "storm",
          "valley",
          "weight"
        ],
        "answer": "rock",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A hard natural material that forms part of the earth.",
        "options": [
          "rock",
          "storm",
          "valley",
          "weight"
        ],
        "answer": "rock",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-058",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Waste & Cleanliness",
    "number": 58,
    "word": "rubbish",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Things that are no longer wanted and are thrown away.",
    "example": "Students collected rubbish around the school field.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 59,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'rubbish' mean?",
        "options": [
          "Things that are no longer wanted and are thrown away.",
          "Not healthy; sick.",
          "A period of relaxing or stopping activity to regain energy.",
          "One of the main periods of the year with particular weather conditions."
        ],
        "answer": "Things that are no longer wanted and are thrown away.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Students collected ______ around the school field.",
        "options": [
          "rubbish",
          "skin",
          "blood",
          "smoking"
        ],
        "answer": "rubbish",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Things that are no longer wanted and are thrown away.",
        "options": [
          "rubbish",
          "skin",
          "blood",
          "smoking"
        ],
        "answer": "rubbish",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-059",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Safety",
    "number": 59,
    "word": "safe",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Protected from danger or harm.",
    "example": "Clean drinking water must be safe for everyone.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 60,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'safe' mean?",
        "options": [
          "Protected from danger or harm.",
          "The organ in your head that controls thinking and movement.",
          "A pain in your head.",
          "The quality of being hot or the energy that makes things hot."
        ],
        "answer": "Protected from danger or harm.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Clean drinking water must be ______ for everyone.",
        "options": [
          "safe",
          "careful",
          "nervous",
          "alive"
        ],
        "answer": "safe",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Protected from danger or harm.",
        "options": [
          "safe",
          "careful",
          "nervous",
          "alive"
        ],
        "answer": "safe",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-060",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Action",
    "number": 60,
    "word": "save",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To use less of something or prevent it from being wasted.",
    "example": "We can save water by turning off the tap while brushing our teeth.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 61,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'save' mean?",
        "options": [
          "To use less of something or prevent it from being wasted.",
          "The organ in your head that controls thinking and movement.",
          "Damage to the body caused by an accident or activity.",
          "A place where people stay in tents, or the activity of staying there."
        ],
        "answer": "To use less of something or prevent it from being wasted.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We can ______ water by turning off the tap while brushing our teeth.",
        "options": [
          "save",
          "hurt",
          "brush",
          "cycle"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To use less of something or prevent it from being wasted.",
        "options": [
          "save",
          "hurt",
          "brush",
          "cycle"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-061",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 61,
    "word": "season",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "One of the main periods of the year with particular weather conditions.",
    "example": "The rainy season usually brings more water to the rivers.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 62,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'season' mean?",
        "options": [
          "One of the main periods of the year with particular weather conditions.",
          "Living and not dead.",
          "To travel by bicycle.",
          "The part of the body between the head and shoulders."
        ],
        "answer": "One of the main periods of the year with particular weather conditions.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The rainy ______ usually brings more water to the rivers.",
        "options": [
          "season",
          "pet",
          "flu",
          "desert"
        ],
        "answer": "season",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: One of the main periods of the year with particular weather conditions.",
        "options": [
          "season",
          "pet",
          "flu",
          "desert"
        ],
        "answer": "season",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-062",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Nature",
    "number": 62,
    "word": "sky",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The space above the earth that we see when we look up.",
    "example": "Dark clouds covered the sky before the storm.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 63,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sky' mean?",
        "options": [
          "The space above the earth that we see when we look up.",
          "The organ in your head that controls thinking and movement.",
          "To travel by bicycle.",
          "The quality of being hot or the energy that makes things hot."
        ],
        "answer": "The space above the earth that we see when we look up.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Dark clouds covered the ______ before the storm.",
        "options": [
          "sky",
          "ground",
          "rock",
          "valley"
        ],
        "answer": "sky",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The space above the earth that we see when we look up.",
        "options": [
          "sky",
          "ground",
          "rock",
          "valley"
        ],
        "answer": "sky",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-063",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 63,
    "word": "storm",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A period of very bad weather with strong wind, rain or thunder.",
    "example": "The storm damaged several trees near the village.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 64,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'storm' mean?",
        "options": [
          "A period of very bad weather with strong wind, rain or thunder.",
          "The natural object that moves around the Earth and shines at night.",
          "To damage the skin with heat or fire.",
          "Clean, cool or recently produced."
        ],
        "answer": "A period of very bad weather with strong wind, rain or thunder.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ damaged several trees near the village.",
        "options": [
          "storm",
          "height",
          "neck",
          "rock"
        ],
        "answer": "storm",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A period of very bad weather with strong wind, rain or thunder.",
        "options": [
          "storm",
          "height",
          "neck",
          "rock"
        ],
        "answer": "storm",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-064",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Places",
    "number": 64,
    "word": "valley",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A low area of land between hills or mountains.",
    "example": "A clear river flows through the green valley.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 65,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'valley' mean?",
        "options": [
          "A low area of land between hills or mountains.",
          "Worried or slightly afraid about something.",
          "A large wild animal with thick fur and strong legs.",
          "A substance used with water for washing and cleaning."
        ],
        "answer": "A low area of land between hills or mountains.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A clear river flows through the green ______.",
        "options": [
          "valley",
          "pain",
          "desert",
          "bin"
        ],
        "answer": "valley",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A low area of land between hills or mountains.",
        "options": [
          "valley",
          "pain",
          "desert",
          "bin"
        ],
        "answer": "valley",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-065",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Water & Nature",
    "number": 65,
    "word": "wave",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A raised movement of water on the surface of the sea.",
    "example": "Strong waves reached the beach during the storm.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 66,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wave' mean?",
        "options": [
          "A raised movement of water on the surface of the sea.",
          "A small animal with smooth skin that can live on land and in water.",
          "A hard natural material that forms part of the earth.",
          "An animal with fur, long arms and often a long tail."
        ],
        "answer": "A raised movement of water on the surface of the sea.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Strong ______ reached the beach during the storm.",
        "options": [
          "wave",
          "pain",
          "athlete",
          "hill"
        ],
        "answer": "wave",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A raised movement of water on the surface of the sea.",
        "options": [
          "wave",
          "pain",
          "athlete",
          "hill"
        ],
        "answer": "wave",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-066",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 66,
    "word": "wet",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Covered with or containing water.",
    "example": "The ground was wet after the heavy rain.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 67,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wet' mean?",
        "options": [
          "Covered with or containing water.",
          "A person who is trained to compete in sports.",
          "The natural state of rest when your eyes are closed.",
          "The surface of the earth that people walk on."
        ],
        "answer": "Covered with or containing water.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ground was ______ after the heavy rain.",
        "options": [
          "wet",
          "safe",
          "fresh",
          "active"
        ],
        "answer": "wet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Covered with or containing water.",
        "options": [
          "wet",
          "safe",
          "fresh",
          "active"
        ],
        "answer": "wet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-067",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Nature & Wildlife",
    "number": 67,
    "word": "wild",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Living or growing in nature without being controlled by people.",
    "example": "We should not feed wild animals in the forest.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 68,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wild' mean?",
        "options": [
          "Living or growing in nature without being controlled by people.",
          "The activity or sport of moving quickly on foot.",
          "Moving air, especially outside.",
          "A person who receives medical treatment."
        ],
        "answer": "Living or growing in nature without being controlled by people.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We should not feed ______ animals in the forest.",
        "options": [
          "wild",
          "careful",
          "active",
          "nervous"
        ],
        "answer": "wild",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Living or growing in nature without being controlled by people.",
        "options": [
          "wild",
          "careful",
          "active",
          "nervous"
        ],
        "answer": "wild",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-068",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 68,
    "word": "wind",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Moving air, especially outside.",
    "example": "The strong wind pushed the clouds across the sky.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 69,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wind' mean?",
        "options": [
          "Moving air, especially outside.",
          "A period of very bad weather with strong wind, rain or thunder.",
          "A person who is trained to compete in sports.",
          "Sleeping and not awake."
        ],
        "answer": "Moving air, especially outside.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The strong ______ pushed the clouds across the sky.",
        "options": [
          "wind",
          "storm",
          "season",
          "patient"
        ],
        "answer": "wind",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Moving air, especially outside.",
        "options": [
          "wind",
          "storm",
          "season",
          "patient"
        ],
        "answer": "wind",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-069",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Materials",
    "number": 69,
    "word": "wood",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The hard material that forms the trunk and branches of a tree.",
    "example": "This table is made from recycled wood.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 70,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wood' mean?",
        "options": [
          "The hard material that forms the trunk and branches of a tree.",
          "Protected from danger or harm.",
          "A liquid fuel used in many cars and motorcycles.",
          "An area of land used for growing crops or keeping animals."
        ],
        "answer": "The hard material that forms the trunk and branches of a tree.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This table is made from recycled ______.",
        "options": [
          "wood",
          "ground",
          "pet",
          "sleep"
        ],
        "answer": "wood",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The hard material that forms the trunk and branches of a tree.",
        "options": [
          "wood",
          "ground",
          "pet",
          "sleep"
        ],
        "answer": "wood",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-RA2-070",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Natural Materials",
    "number": 70,
    "word": "wooden",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Made of wood.",
    "example": "The park has a wooden bridge across the stream.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 71,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wooden' mean?",
        "options": [
          "Made of wood.",
          "The activity of breathing in smoke from cigarettes.",
          "Sleeping and not awake.",
          "A substance used with water for washing and cleaning."
        ],
        "answer": "Made of wood.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The park has a ______ bridge across the stream.",
        "options": [
          "wooden",
          "alive",
          "safe",
          "asleep"
        ],
        "answer": "wooden",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Made of wood.",
        "options": [
          "wooden",
          "alive",
          "safe",
          "asleep"
        ],
        "answer": "wooden",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-071",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Well-being",
    "number": 71,
    "word": "affect",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To cause a change in someone or something.",
    "example": "Too little sleep can affect your concentration in class.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 72,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'affect' mean?",
        "options": [
          "To cause a change in someone or something.",
          "The time when a baby is born.",
          "A measurement of how hot or cold something is.",
          "An illness that affects people, animals or plants."
        ],
        "answer": "To cause a change in someone or something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Too little sleep can ______ your concentration in class.",
        "options": [
          "affect",
          "recycle",
          "reduce",
          "prevent"
        ],
        "answer": "affect",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To cause a change in someone or something.",
        "options": [
          "affect",
          "recycle",
          "reduce",
          "prevent"
        ],
        "answer": "affect",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-072",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Healthy Lifestyle",
    "number": 72,
    "word": "benefit",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A helpful or positive effect.",
    "example": "One benefit of regular exercise is better fitness.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 73,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'benefit' mean?",
        "options": [
          "A helpful or positive effect.",
          "A particular state of health or a medical problem.",
          "A sudden serious problem or harmful action.",
          "A substance used to make something."
        ],
        "answer": "A helpful or positive effect.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "One ______ of regular exercise is better fitness.",
        "options": [
          "benefit",
          "environment",
          "nature",
          "pollution"
        ],
        "answer": "benefit",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A helpful or positive effect.",
        "options": [
          "benefit",
          "environment",
          "nature",
          "pollution"
        ],
        "answer": "benefit",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-073",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health Science",
    "number": 73,
    "word": "biology",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The study of living things and how they work.",
    "example": "In biology, we learn how the human body works.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 74,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'biology' mean?",
        "options": [
          "The study of living things and how they work.",
          "A sudden event that causes great damage or suffering.",
          "A particular state of health or a medical problem.",
          "To make something smaller or use less of it."
        ],
        "answer": "The study of living things and how they work.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "In ______, we learn how the human body works.",
        "options": [
          "biology",
          "benefit",
          "power",
          "environment"
        ],
        "answer": "biology",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The study of living things and how they work.",
        "options": [
          "biology",
          "benefit",
          "power",
          "environment"
        ],
        "answer": "biology",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-074",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health Causes & Effects",
    "number": 74,
    "word": "cause",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A reason why something happens, or to make something happen.",
    "example": "Lack of water can cause headaches and tiredness.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 75,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cause' mean?",
        "options": [
          "A reason why something happens, or to make something happen.",
          "An illness that affects people, animals or plants.",
          "A light man-made material used to make many everyday objects.",
          "A measurement of how hot or cold something is."
        ],
        "answer": "A reason why something happens, or to make something happen.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Lack of water can ______ headaches and tiredness.",
        "options": [
          "cause",
          "physical",
          "power",
          "pollution"
        ],
        "answer": "cause",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A reason why something happens, or to make something happen.",
        "options": [
          "cause",
          "physical",
          "power",
          "pollution"
        ],
        "answer": "cause",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-075",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Medical Care",
    "number": 75,
    "word": "condition",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A particular state of health or a medical problem.",
    "example": "The doctor checked the patient's condition carefully.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 76,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'condition' mean?",
        "options": [
          "A particular state of health or a medical problem.",
          "A reason why something happens, or to make something happen.",
          "The natural world and the surroundings in which people, animals and plants live.",
          "Energy used to provide electricity, heat or movement."
        ],
        "answer": "A particular state of health or a medical problem.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The doctor checked the patient's ______ carefully.",
        "options": [
          "condition",
          "biology",
          "nature",
          "stress"
        ],
        "answer": "condition",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A particular state of health or a medical problem.",
        "options": [
          "condition",
          "biology",
          "nature",
          "stress"
        ],
        "answer": "condition",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-076",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Illness",
    "number": 76,
    "word": "disease",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "An illness that affects people, animals or plants.",
    "example": "Healthy habits can lower the risk of some diseases.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 77,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'disease' mean?",
        "options": [
          "An illness that affects people, animals or plants.",
          "A sudden event that causes great damage or suffering.",
          "Careful study to discover new facts or information.",
          "A substance used to make something."
        ],
        "answer": "An illness that affects people, animals or plants.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Healthy habits can lower the risk of some ______.",
        "options": [
          "disease",
          "population",
          "research",
          "pollution"
        ],
        "answer": "disease",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An illness that affects people, animals or plants.",
        "options": [
          "disease",
          "population",
          "research",
          "pollution"
        ],
        "answer": "disease",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-077",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Medical Care",
    "number": 77,
    "word": "medical",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Connected with medicine, doctors or the treatment of illness.",
    "example": "The injured student received medical attention.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 78,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'medical' mean?",
        "options": [
          "Connected with medicine, doctors or the treatment of illness.",
          "One of several things that influences a result or situation.",
          "A particular state of health or a medical problem.",
          "All the plants, animals and features of the world not made by people."
        ],
        "answer": "Connected with medicine, doctors or the treatment of illness.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The injured student received ______ attention.",
        "options": [
          "medical",
          "research",
          "support",
          "recycle"
        ],
        "answer": "medical",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Connected with medicine, doctors or the treatment of illness.",
        "options": [
          "medical",
          "research",
          "support",
          "recycle"
        ],
        "answer": "medical",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-078",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Fitness & Exercise",
    "number": 78,
    "word": "physical",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Connected with the body rather than the mind.",
    "example": "Physical activity helps keep our bodies strong.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 79,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'physical' mean?",
        "options": [
          "Connected with the body rather than the mind.",
          "The study of living things and how they work.",
          "A sudden event that causes great damage or suffering.",
          "To make something smaller or use less of it."
        ],
        "answer": "Connected with the body rather than the mind.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ activity helps keep our bodies strong.",
        "options": [
          "physical",
          "attack",
          "factor",
          "prevent"
        ],
        "answer": "physical",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Connected with the body rather than the mind.",
        "options": [
          "physical",
          "attack",
          "factor",
          "prevent"
        ],
        "answer": "physical",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-079",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Disease Prevention",
    "number": 79,
    "word": "prevent",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To stop something from happening.",
    "example": "Washing our hands can help prevent the spread of germs.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 80,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'prevent' mean?",
        "options": [
          "To stop something from happening.",
          "The natural world and the surroundings in which people, animals and plants live.",
          "The usual weather conditions of a place over a long period.",
          "One of several things that influences a result or situation."
        ],
        "answer": "To stop something from happening.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Washing our hands can help ______ the spread of germs.",
        "options": [
          "prevent",
          "recycle",
          "affect",
          "reduce"
        ],
        "answer": "prevent",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To stop something from happening.",
        "options": [
          "prevent",
          "recycle",
          "affect",
          "reduce"
        ],
        "answer": "prevent",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-080",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Mental Well-being",
    "number": 80,
    "word": "stress",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A feeling of worry or pressure caused by difficult situations.",
    "example": "Exercise and enough rest can help reduce stress.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 81,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'stress' mean?",
        "options": [
          "A feeling of worry or pressure caused by difficult situations.",
          "The time when a baby is born.",
          "All the people or animals living in a particular area.",
          "A light man-made material used to make many everyday objects."
        ],
        "answer": "A feeling of worry or pressure caused by difficult situations.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Exercise and enough rest can help reduce ______.",
        "options": [
          "stress",
          "condition",
          "research",
          "birth"
        ],
        "answer": "stress",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A feeling of worry or pressure caused by difficult situations.",
        "options": [
          "stress",
          "condition",
          "research",
          "birth"
        ],
        "answer": "stress",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-081",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Safety",
    "number": 81,
    "word": "attack",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A sudden serious problem or harmful action.",
    "example": "The doctor explained what to do during an asthma attack.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 82,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'attack' mean?",
        "options": [
          "A sudden serious problem or harmful action.",
          "A helpful or positive effect.",
          "To make something smaller or use less of it.",
          "Damage to air, water or land caused by harmful substances or waste."
        ],
        "answer": "A sudden serious problem or harmful action.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The doctor explained what to do during an asthma ______.",
        "options": [
          "attack",
          "material",
          "research",
          "birth"
        ],
        "answer": "attack",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A sudden serious problem or harmful action.",
        "options": [
          "attack",
          "material",
          "research",
          "birth"
        ],
        "answer": "attack",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-082",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Life & Health",
    "number": 82,
    "word": "birth",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The time when a baby is born.",
    "example": "A baby's health is checked soon after birth.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 83,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'birth' mean?",
        "options": [
          "The time when a baby is born.",
          "All the people or animals living in a particular area.",
          "Energy used to provide electricity, heat or movement.",
          "A feeling of worry or pressure caused by difficult situations."
        ],
        "answer": "The time when a baby is born.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A baby's health is checked soon after ______.",
        "options": [
          "birth",
          "planet",
          "pollution",
          "plastic"
        ],
        "answer": "birth",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The time when a baby is born.",
        "options": [
          "birth",
          "planet",
          "pollution",
          "plastic"
        ],
        "answer": "birth",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-083",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health Causes & Effects",
    "number": 83,
    "word": "factor",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "One of several things that influences a result or situation.",
    "example": "Diet is an important factor in maintaining good health.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 84,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'factor' mean?",
        "options": [
          "One of several things that influences a result or situation.",
          "The natural world and the surroundings in which people, animals and plants live.",
          "To process used materials so that they can be used again.",
          "Connected with the body rather than the mind."
        ],
        "answer": "One of several things that influences a result or situation.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Diet is an important ______ in maintaining good health.",
        "options": [
          "factor",
          "attack",
          "research",
          "population"
        ],
        "answer": "factor",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: One of several things that influences a result or situation.",
        "options": [
          "factor",
          "attack",
          "research",
          "population"
        ],
        "answer": "factor",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-084",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health Science",
    "number": 84,
    "word": "research",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Careful study to discover new facts or information.",
    "example": "Health research helps doctors understand diseases better.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 85,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'research' mean?",
        "options": [
          "Careful study to discover new facts or information.",
          "To make something smaller or use less of it.",
          "Help or encouragement given to someone.",
          "Connected with medicine, doctors or the treatment of illness."
        ],
        "answer": "Careful study to discover new facts or information.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Health ______ helps doctors understand diseases better.",
        "options": [
          "research",
          "temperature",
          "disease",
          "nature"
        ],
        "answer": "research",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Careful study to discover new facts or information.",
        "options": [
          "research",
          "temperature",
          "disease",
          "nature"
        ],
        "answer": "research",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-085",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Health & Well-being",
    "number": 85,
    "word": "support",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Help or encouragement given to someone.",
    "example": "Friends can give support when someone feels worried.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 86,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'support' mean?",
        "options": [
          "Help or encouragement given to someone.",
          "Energy used to provide electricity, heat or movement.",
          "A reason why something happens, or to make something happen.",
          "The study of living things and how they work."
        ],
        "answer": "Help or encouragement given to someone.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Friends can give ______ when someone feels worried.",
        "options": [
          "support",
          "factor",
          "plastic",
          "birth"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Help or encouragement given to someone.",
        "options": [
          "support",
          "factor",
          "plastic",
          "birth"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-086",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 86,
    "word": "climate",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The usual weather conditions of a place over a long period.",
    "example": "Malaysia has a warm and humid climate.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 87,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'climate' mean?",
        "options": [
          "The usual weather conditions of a place over a long period.",
          "A light man-made material used to make many everyday objects.",
          "To cause a change in someone or something.",
          "Connected with the body rather than the mind."
        ],
        "answer": "The usual weather conditions of a place over a long period.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Malaysia has a warm and humid ______.",
        "options": [
          "climate",
          "temperature",
          "nature",
          "factory"
        ],
        "answer": "climate",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The usual weather conditions of a place over a long period.",
        "options": [
          "climate",
          "temperature",
          "nature",
          "factory"
        ],
        "answer": "climate",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-087",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Hazards",
    "number": 87,
    "word": "disaster",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A sudden event that causes great damage or suffering.",
    "example": "The flood became a serious disaster for the village.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 88,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'disaster' mean?",
        "options": [
          "A sudden event that causes great damage or suffering.",
          "Connected with medicine, doctors or the treatment of illness.",
          "A particular state of health or a medical problem.",
          "The study of living things and how they work."
        ],
        "answer": "A sudden event that causes great damage or suffering.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The flood became a serious ______ for the village.",
        "options": [
          "disaster",
          "disease",
          "biology",
          "birth"
        ],
        "answer": "disaster",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A sudden event that causes great damage or suffering.",
        "options": [
          "disaster",
          "disease",
          "biology",
          "birth"
        ],
        "answer": "disaster",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-088",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Awareness",
    "number": 88,
    "word": "environment",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The natural world and the surroundings in which people, animals and plants live.",
    "example": "We should keep our environment clean and healthy.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 89,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'environment' mean?",
        "options": [
          "The natural world and the surroundings in which people, animals and plants live.",
          "A substance used to make something.",
          "A helpful or positive effect.",
          "A sudden event that causes great damage or suffering."
        ],
        "answer": "The natural world and the surroundings in which people, animals and plants live.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We should keep our ______ clean and healthy.",
        "options": [
          "environment",
          "planet",
          "temperature",
          "factor"
        ],
        "answer": "environment",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The natural world and the surroundings in which people, animals and plants live.",
        "options": [
          "environment",
          "planet",
          "temperature",
          "factor"
        ],
        "answer": "environment",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-089",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 89,
    "word": "extreme",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Very great or much stronger than usual.",
    "example": "Extreme heat can be dangerous if we do not drink enough water.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 90,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'extreme' mean?",
        "options": [
          "Very great or much stronger than usual.",
          "Damage to air, water or land caused by harmful substances or waste.",
          "A large round object in space that moves around a star.",
          "A building where goods are made using machines."
        ],
        "answer": "Very great or much stronger than usual.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ heat can be dangerous if we do not drink enough water.",
        "options": [
          "extreme",
          "power",
          "birth",
          "attack"
        ],
        "answer": "extreme",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Very great or much stronger than usual.",
        "options": [
          "extreme",
          "power",
          "birth",
          "attack"
        ],
        "answer": "extreme",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-090",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Industry & Pollution",
    "number": 90,
    "word": "factory",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A building where goods are made using machines.",
    "example": "The factory must control the smoke released into the air.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 91,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'factory' mean?",
        "options": [
          "A building where goods are made using machines.",
          "A light man-made material used to make many everyday objects.",
          "Energy used to provide electricity, heat or movement.",
          "A feeling of worry or pressure caused by difficult situations."
        ],
        "answer": "A building where goods are made using machines.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ must control the smoke released into the air.",
        "options": [
          "factory",
          "research",
          "biology",
          "condition"
        ],
        "answer": "factory",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A building where goods are made using machines.",
        "options": [
          "factory",
          "research",
          "biology",
          "condition"
        ],
        "answer": "factory",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-091",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Resources & Materials",
    "number": 91,
    "word": "material",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A substance used to make something.",
    "example": "Recycled material can be used to make new products.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 92,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'material' mean?",
        "options": [
          "A substance used to make something.",
          "A sudden event that causes great damage or suffering.",
          "The natural world and the surroundings in which people, animals and plants live.",
          "Damage to air, water or land caused by harmful substances or waste."
        ],
        "answer": "A substance used to make something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Recycled ______ can be used to make new products.",
        "options": [
          "material",
          "environment",
          "birth",
          "factor"
        ],
        "answer": "material",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A substance used to make something.",
        "options": [
          "material",
          "environment",
          "birth",
          "factor"
        ],
        "answer": "material",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-092",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Awareness",
    "number": 92,
    "word": "nature",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "All the plants, animals and features of the world not made by people.",
    "example": "Spending time in nature can help us feel calm.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 93,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'nature' mean?",
        "options": [
          "All the plants, animals and features of the world not made by people.",
          "To stop something from happening.",
          "One of several things that influences a result or situation.",
          "A large round object in space that moves around a star."
        ],
        "answer": "All the plants, animals and features of the world not made by people.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Spending time in ______ can help us feel calm.",
        "options": [
          "nature",
          "attack",
          "research",
          "population"
        ],
        "answer": "nature",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: All the plants, animals and features of the world not made by people.",
        "options": [
          "nature",
          "attack",
          "research",
          "population"
        ],
        "answer": "nature",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-093",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Earth & Space",
    "number": 93,
    "word": "planet",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A large round object in space that moves around a star.",
    "example": "Earth is the planet where we live.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 94,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'planet' mean?",
        "options": [
          "A large round object in space that moves around a star.",
          "A particular state of health or a medical problem.",
          "A building where goods are made using machines.",
          "The time when a baby is born."
        ],
        "answer": "A large round object in space that moves around a star.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Earth is the ______ where we live.",
        "options": [
          "planet",
          "research",
          "factor",
          "environment"
        ],
        "answer": "planet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A large round object in space that moves around a star.",
        "options": [
          "planet",
          "research",
          "factor",
          "environment"
        ],
        "answer": "planet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-094",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Waste & Materials",
    "number": 94,
    "word": "plastic",
    "partOfSpeech": "noun / adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A light man-made material used to make many everyday objects.",
    "example": "We should avoid using single-use plastic whenever possible.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 95,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'plastic' mean?",
        "options": [
          "A light man-made material used to make many everyday objects.",
          "Energy used to provide electricity, heat or movement.",
          "A substance used to make something.",
          "A sudden serious problem or harmful action."
        ],
        "answer": "A light man-made material used to make many everyday objects.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We should avoid using single-use ______ whenever possible.",
        "options": [
          "plastic",
          "power",
          "factory",
          "condition"
        ],
        "answer": "plastic",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A light man-made material used to make many everyday objects.",
        "options": [
          "plastic",
          "power",
          "factory",
          "condition"
        ],
        "answer": "plastic",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-095",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Problems",
    "number": 95,
    "word": "pollution",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Damage to air, water or land caused by harmful substances or waste.",
    "example": "Air pollution can affect our health.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 96,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pollution' mean?",
        "options": [
          "Damage to air, water or land caused by harmful substances or waste.",
          "A building where goods are made using machines.",
          "To process used materials so that they can be used again.",
          "A feeling of worry or pressure caused by difficult situations."
        ],
        "answer": "Damage to air, water or land caused by harmful substances or waste.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Air ______ can affect our health.",
        "options": [
          "pollution",
          "climate",
          "power",
          "plastic"
        ],
        "answer": "pollution",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Damage to air, water or land caused by harmful substances or waste.",
        "options": [
          "pollution",
          "climate",
          "power",
          "plastic"
        ],
        "answer": "pollution",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-096",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "People & Environment",
    "number": 96,
    "word": "population",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "All the people or animals living in a particular area.",
    "example": "A growing population can increase the need for clean water.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 97,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'population' mean?",
        "options": [
          "All the people or animals living in a particular area.",
          "Careful study to discover new facts or information.",
          "The usual weather conditions of a place over a long period.",
          "A substance used to make something."
        ],
        "answer": "All the people or animals living in a particular area.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A growing ______ can increase the need for clean water.",
        "options": [
          "population",
          "nature",
          "material",
          "stress"
        ],
        "answer": "population",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: All the people or animals living in a particular area.",
        "options": [
          "population",
          "nature",
          "material",
          "stress"
        ],
        "answer": "population",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-097",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Energy",
    "number": 97,
    "word": "power",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Energy used to provide electricity, heat or movement.",
    "example": "Solar panels can provide clean power for buildings.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 98,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'power' mean?",
        "options": [
          "Energy used to provide electricity, heat or movement.",
          "An illness that affects people, animals or plants.",
          "The time when a baby is born.",
          "Connected with medicine, doctors or the treatment of illness."
        ],
        "answer": "Energy used to provide electricity, heat or movement.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Solar panels can provide clean ______ for buildings.",
        "options": [
          "power",
          "population",
          "planet",
          "nature"
        ],
        "answer": "power",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Energy used to provide electricity, heat or movement.",
        "options": [
          "power",
          "population",
          "planet",
          "nature"
        ],
        "answer": "power",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-098",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Action",
    "number": 98,
    "word": "recycle",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To process used materials so that they can be used again.",
    "example": "Our school recycles paper, cans and plastic bottles.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 99,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'recycle' mean?",
        "options": [
          "To process used materials so that they can be used again.",
          "The natural world and the surroundings in which people, animals and plants live.",
          "A feeling of worry or pressure caused by difficult situations.",
          "Energy used to provide electricity, heat or movement."
        ],
        "answer": "To process used materials so that they can be used again.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Our school ______ paper, cans and plastic bottles.",
        "options": [
          "recycle",
          "reduce",
          "prevent",
          "affect"
        ],
        "answer": "recycle",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To process used materials so that they can be used again.",
        "options": [
          "recycle",
          "reduce",
          "prevent",
          "affect"
        ],
        "answer": "recycle",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-099",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Environmental Action",
    "number": 99,
    "word": "reduce",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To make something smaller or use less of it.",
    "example": "We can reduce waste by bringing reusable containers.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 100,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'reduce' mean?",
        "options": [
          "To make something smaller or use less of it.",
          "A building where goods are made using machines.",
          "A measurement of how hot or cold something is.",
          "The study of living things and how they work."
        ],
        "answer": "To make something smaller or use less of it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We can ______ waste by bringing reusable containers.",
        "options": [
          "reduce",
          "prevent",
          "affect",
          "recycle"
        ],
        "answer": "reduce",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To make something smaller or use less of it.",
        "options": [
          "reduce",
          "prevent",
          "affect",
          "recycle"
        ],
        "answer": "reduce",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "HE-A2H-100",
    "themeCode": "HE",
    "theme": "Health & Environment",
    "themeCategory": "Weather & Climate",
    "number": 100,
    "word": "temperature",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A measurement of how hot or cold something is.",
    "example": "The temperature was higher than usual this afternoon.",
    "bm": "",
    "sourceSheet": "Health & Environment",
    "sourceRow": 101,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'temperature' mean?",
        "options": [
          "A measurement of how hot or cold something is.",
          "Connected with the body rather than the mind.",
          "An illness that affects people, animals or plants.",
          "One of several things that influences a result or situation."
        ],
        "answer": "A measurement of how hot or cold something is.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ was higher than usual this afternoon.",
        "options": [
          "temperature",
          "biology",
          "climate",
          "birth"
        ],
        "answer": "temperature",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A measurement of how hot or cold something is.",
        "options": [
          "temperature",
          "biology",
          "climate",
          "birth"
        ],
        "answer": "temperature",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-001",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Banking",
    "number": 1,
    "word": "bank",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An organisation that keeps and manages people's money.",
    "example": "My mother went to the bank to put some money into her account.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 2,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bank' mean?",
        "options": [
          "An organisation that keeps and manages people's money.",
          "Better than all others of the same kind.",
          "Not the same as another person or thing.",
          "Something that is made or grown to be sold."
        ],
        "answer": "An organisation that keeps and manages people's money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My mother went to the ______ to put some money into her account.",
        "options": [
          "bank",
          "drink",
          "bottle",
          "enough"
        ],
        "answer": "bank",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An organisation that keeps and manages people's money.",
        "options": [
          "bank",
          "drink",
          "bottle",
          "enough"
        ],
        "answer": "bank",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-002",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 2,
    "word": "bill",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A written statement showing how much money you must pay.",
    "example": "We checked the electricity bill before paying it.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 3,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bill' mean?",
        "options": [
          "A written statement showing how much money you must pay.",
          "A large shop that sells food and household goods.",
          "What people use to buy things and pay for services.",
          "Things that people or animals eat."
        ],
        "answer": "A written statement showing how much money you must pay.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We checked the electricity ______ before paying it.",
        "options": [
          "bill",
          "choice",
          "shopping",
          "service"
        ],
        "answer": "bill",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A written statement showing how much money you must pay.",
        "options": [
          "bill",
          "choice",
          "shopping",
          "service"
        ],
        "answer": "bill",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-003",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 3,
    "word": "cash",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Money in the form of notes and coins.",
    "example": "I paid for my lunch with cash.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 4,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cash' mean?",
        "options": [
          "Money in the form of notes and coins.",
          "To get something by paying money for it.",
          "The appearance of something such as red, blue or green.",
          "What people use to buy things and pay for services."
        ],
        "answer": "Money in the form of notes and coins.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I paid for my lunch with ______.",
        "options": [
          "cash",
          "total",
          "colour",
          "bottle"
        ],
        "answer": "cash",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Money in the form of notes and coins.",
        "options": [
          "cash",
          "total",
          "colour",
          "bottle"
        ],
        "answer": "cash",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-004",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 4,
    "word": "change",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Money returned to you when you pay more than the price.",
    "example": "The cashier gave me RM2 change.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 5,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'change' mean?",
        "options": [
          "Money returned to you when you pay more than the price.",
          "One particular thing, especially something for sale.",
          "A set of printed or written pages joined together.",
          "Something that you give to someone on a special occasion."
        ],
        "answer": "Money returned to you when you pay more than the price.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cashier gave me RM2 ______.",
        "options": [
          "change",
          "cash",
          "box",
          "wallet"
        ],
        "answer": "change",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Money returned to you when you pay more than the price.",
        "options": [
          "change",
          "cash",
          "box",
          "wallet"
        ],
        "answer": "change",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-005",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 5,
    "word": "coin",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small round piece of metal used as money.",
    "example": "I put a fifty-sen coin into my savings box.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 6,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'coin' mean?",
        "options": [
          "A small round piece of metal used as money.",
          "What people use to buy things and pay for services.",
          "To give something and receive another thing in its place.",
          "To get something by paying money for it."
        ],
        "answer": "A small round piece of metal used as money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I put a fifty-sen ______ into my savings box.",
        "options": [
          "coin",
          "bag",
          "bill",
          "change"
        ],
        "answer": "coin",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small round piece of metal used as money.",
        "options": [
          "coin",
          "bag",
          "bill",
          "change"
        ],
        "answer": "coin",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-006",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 6,
    "word": "money",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "What people use to buy things and pay for services.",
    "example": "I save some of my pocket money every week.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 7,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'money' mean?",
        "options": [
          "What people use to buy things and pay for services.",
          "Money in the form of notes and coins.",
          "To decide which person or thing you want.",
          "More than the usual or expected amount."
        ],
        "answer": "What people use to buy things and pay for services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I save some of my pocket ______ every week.",
        "options": [
          "money",
          "size",
          "choice",
          "enough"
        ],
        "answer": "money",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: What people use to buy things and pay for services.",
        "options": [
          "money",
          "size",
          "choice",
          "enough"
        ],
        "answer": "money",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-007",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 7,
    "word": "pay",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To give money for something that you buy or use.",
    "example": "I paid RM5 for the exercise book.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 8,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pay' mean?",
        "options": [
          "To give money for something that you buy or use.",
          "Connected to or available through the internet.",
          "A container for liquids with a narrow top.",
          "Something you would like to have but may not need."
        ],
        "answer": "To give money for something that you buy or use.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ RM5 for the exercise book.",
        "options": [
          "pay",
          "sell",
          "deliver",
          "compare"
        ],
        "answer": "pay",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To give money for something that you buy or use.",
        "options": [
          "pay",
          "sell",
          "deliver",
          "compare"
        ],
        "answer": "pay",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-008",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 8,
    "word": "price",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The amount of money that something costs.",
    "example": "I checked the price before buying the bag.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 9,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'price' mean?",
        "options": [
          "The amount of money that something costs.",
          "Things that people or animals eat.",
          "Not different; exactly alike.",
          "The complete amount after all parts are added together."
        ],
        "answer": "The amount of money that something costs.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I checked the ______ before buying the bag.",
        "options": [
          "price",
          "shopping",
          "ticket",
          "website"
        ],
        "answer": "price",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The amount of money that something costs.",
        "options": [
          "price",
          "shopping",
          "ticket",
          "website"
        ],
        "answer": "price",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-009",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 9,
    "word": "cost",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The amount of money needed to buy or do something.",
    "example": "The school notebook costs RM3.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 10,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cost' mean?",
        "options": [
          "The amount of money needed to buy or do something.",
          "What people use to buy things and pay for services.",
          "Recently made, bought or obtained.",
          "Something necessary, or to require something."
        ],
        "answer": "The amount of money needed to buy or do something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The school notebook ______ RM3.",
        "options": [
          "cost",
          "need",
          "want",
          "order"
        ],
        "answer": "cost",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The amount of money needed to buy or do something.",
        "options": [
          "cost",
          "need",
          "want",
          "order"
        ],
        "answer": "cost",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-010",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 10,
    "word": "cheap",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not costing much money.",
    "example": "This pen is cheap but it works well.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 11,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'cheap' mean?",
        "options": [
          "Not costing much money.",
          "To look at two or more things to see how they are similar or different.",
          "A container with flat sides, usually made of cardboard or plastic.",
          "To take goods, letters or food to a person or place."
        ],
        "answer": "Not costing much money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This pen is ______ but it works well.",
        "options": [
          "cheap",
          "different",
          "same",
          "free"
        ],
        "answer": "cheap",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not costing much money.",
        "options": [
          "cheap",
          "different",
          "same",
          "free"
        ],
        "answer": "cheap",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-011",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 11,
    "word": "expensive",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Costing a lot of money.",
    "example": "The sports shoes are too expensive for me.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 12,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'expensive' mean?",
        "options": [
          "Costing a lot of money.",
          "Having great value or meaning.",
          "What people use to buy things and pay for services.",
          "A person who buys goods or services."
        ],
        "answer": "Costing a lot of money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The sports shoes are too ______ for me.",
        "options": [
          "expensive",
          "extra",
          "new",
          "same"
        ],
        "answer": "expensive",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Costing a lot of money.",
        "options": [
          "expensive",
          "extra",
          "new",
          "same"
        ],
        "answer": "expensive",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-012",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 12,
    "word": "free",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not costing any money.",
    "example": "The shop gave us a free reusable bag.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 13,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'free' mean?",
        "options": [
          "Not costing any money.",
          "As much as is needed.",
          "Helping you do or achieve something.",
          "Having great value or meaning."
        ],
        "answer": "Not costing any money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop gave us a ______ reusable bag.",
        "options": [
          "free",
          "important",
          "used",
          "useful"
        ],
        "answer": "free",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not costing any money.",
        "options": [
          "free",
          "important",
          "used",
          "useful"
        ],
        "answer": "free",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-013",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 13,
    "word": "card",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small plastic card that can be used to pay for things.",
    "example": "My father used his card to pay at the counter.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 14,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'card' mean?",
        "options": [
          "A small plastic card that can be used to pay for things.",
          "To keep money for future use instead of spending it.",
          "Money in the form of notes and coins.",
          "A container with flat sides, usually made of cardboard or plastic."
        ],
        "answer": "A small plastic card that can be used to pay for things.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My father used his ______ to pay at the counter.",
        "options": [
          "card",
          "packet",
          "size",
          "enough"
        ],
        "answer": "card",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small plastic card that can be used to pay for things.",
        "options": [
          "card",
          "packet",
          "size",
          "enough"
        ],
        "answer": "card",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-014",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Personal Finance",
    "number": 14,
    "word": "wallet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small case used for keeping money and cards.",
    "example": "I keep my money safely in my wallet.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 15,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'wallet' mean?",
        "options": [
          "A small case used for keeping money and cards.",
          "A computer program used on a phone, tablet or other device.",
          "Work done for a customer rather than a physical product.",
          "Something that is made or grown to be sold."
        ],
        "answer": "A small case used for keeping money and cards.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I keep my money safely in my ______.",
        "options": [
          "wallet",
          "service",
          "change",
          "shopping"
        ],
        "answer": "wallet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small case used for keeping money and cards.",
        "options": [
          "wallet",
          "service",
          "change",
          "shopping"
        ],
        "answer": "wallet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-015",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Personal Finance",
    "number": 15,
    "word": "spend",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To use money to buy or pay for something.",
    "example": "I try not to spend all my money at once.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 16,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'spend' mean?",
        "options": [
          "To use money to buy or pay for something.",
          "A place where things are sold, or the activity of buying things.",
          "As much as is needed.",
          "Something that is made or grown to be sold."
        ],
        "answer": "To use money to buy or pay for something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I try not to ______ all my money at once.",
        "options": [
          "spend",
          "pay",
          "earn",
          "borrow"
        ],
        "answer": "spend",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To use money to buy or pay for something.",
        "options": [
          "spend",
          "pay",
          "earn",
          "borrow"
        ],
        "answer": "spend",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-016",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Saving & Financial Habits",
    "number": 16,
    "word": "save",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To keep money for future use instead of spending it.",
    "example": "I save RM2 from my pocket money each day.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 17,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'save' mean?",
        "options": [
          "To keep money for future use instead of spending it.",
          "An organisation that keeps and manages people's money.",
          "A shop where goods are sold.",
          "What people use to buy things and pay for services."
        ],
        "answer": "To keep money for future use instead of spending it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ RM2 from my pocket money each day.",
        "options": [
          "save",
          "return",
          "choose",
          "compare"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To keep money for future use instead of spending it.",
        "options": [
          "save",
          "return",
          "choose",
          "compare"
        ],
        "answer": "save",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-017",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 17,
    "word": "buy",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To get something by paying money for it.",
    "example": "I want to buy a new dictionary for school.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 18,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'buy' mean?",
        "options": [
          "To get something by paying money for it.",
          "Better than all others of the same kind.",
          "A small document or electronic record that allows you to travel or enter a place.",
          "Recently made, bought or obtained."
        ],
        "answer": "To get something by paying money for it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I want to ______ a new dictionary for school.",
        "options": [
          "buy",
          "compare",
          "spend",
          "save"
        ],
        "answer": "buy",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To get something by paying money for it.",
        "options": [
          "buy",
          "compare",
          "spend",
          "save"
        ],
        "answer": "buy",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-018",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 18,
    "word": "sell",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To give something to someone in exchange for money.",
    "example": "The school club will sell handmade bookmarks.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 19,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sell' mean?",
        "options": [
          "To give something to someone in exchange for money.",
          "Having great value or meaning.",
          "As much as is needed.",
          "A liquid that people drink."
        ],
        "answer": "To give something to someone in exchange for money.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The school club will ______ handmade bookmarks.",
        "options": [
          "sell",
          "deliver",
          "spend",
          "borrow"
        ],
        "answer": "sell",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To give something to someone in exchange for money.",
        "options": [
          "sell",
          "deliver",
          "spend",
          "borrow"
        ],
        "answer": "sell",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-019",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 19,
    "word": "shop",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A place where things are sold, or the activity of buying things.",
    "example": "We went to the shop to buy some stationery.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 20,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'shop' mean?",
        "options": [
          "A place where things are sold, or the activity of buying things.",
          "One particular thing, especially something for sale.",
          "Something necessary, or to require something.",
          "To get something by paying money for it."
        ],
        "answer": "A place where things are sold, or the activity of buying things.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We went to the ______ to buy some stationery.",
        "options": [
          "shop",
          "order",
          "need",
          "offer"
        ],
        "answer": "shop",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A place where things are sold, or the activity of buying things.",
        "options": [
          "shop",
          "order",
          "need",
          "offer"
        ],
        "answer": "shop",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-020",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 20,
    "word": "shopping",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The activity of buying things from shops.",
    "example": "We made a list before going shopping.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 21,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'shopping' mean?",
        "options": [
          "The activity of buying things from shops.",
          "To give money for something that you buy or use.",
          "A place where people buy and sell food or other goods.",
          "One particular thing, especially something for sale."
        ],
        "answer": "The activity of buying things from shops.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We made a list before going ______.",
        "options": [
          "shopping",
          "customer",
          "pair",
          "colour"
        ],
        "answer": "shopping",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of buying things from shops.",
        "options": [
          "shopping",
          "customer",
          "pair",
          "colour"
        ],
        "answer": "shopping",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-021",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 21,
    "word": "store",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A shop where goods are sold.",
    "example": "The store sells school bags and shoes.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 22,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'store' mean?",
        "options": [
          "A shop where goods are sold.",
          "A container made of paper, cloth or plastic for carrying things.",
          "The activity of buying things from shops.",
          "Not the same as another person or thing."
        ],
        "answer": "A shop where goods are sold.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ sells school bags and shoes.",
        "options": [
          "store",
          "supermarket",
          "drink",
          "item"
        ],
        "answer": "store",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A shop where goods are sold.",
        "options": [
          "store",
          "supermarket",
          "drink",
          "item"
        ],
        "answer": "store",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-022",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 22,
    "word": "market",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A place where people buy and sell food or other goods.",
    "example": "My family buys fresh vegetables at the local market.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 23,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'market' mean?",
        "options": [
          "A place where people buy and sell food or other goods.",
          "A liquid that people drink.",
          "Something that you give to someone on a special occasion.",
          "A small document or electronic record that allows you to travel or enter a place."
        ],
        "answer": "A place where people buy and sell food or other goods.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My family buys fresh vegetables at the local ______.",
        "options": [
          "market",
          "pair",
          "enough",
          "ticket"
        ],
        "answer": "market",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A place where people buy and sell food or other goods.",
        "options": [
          "market",
          "pair",
          "enough",
          "ticket"
        ],
        "answer": "market",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-023",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping",
    "number": 23,
    "word": "supermarket",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A large shop that sells food and household goods.",
    "example": "We compared prices at the supermarket.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 24,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'supermarket' mean?",
        "options": [
          "A large shop that sells food and household goods.",
          "A person who buys goods or services.",
          "Two matching things that are used together.",
          "A small case used for keeping money and cards."
        ],
        "answer": "A large shop that sells food and household goods.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We compared prices at the ______.",
        "options": [
          "supermarket",
          "coin",
          "choice",
          "ticket"
        ],
        "answer": "supermarket",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A large shop that sells food and household goods.",
        "options": [
          "supermarket",
          "coin",
          "choice",
          "ticket"
        ],
        "answer": "supermarket",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-024",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumers",
    "number": 24,
    "word": "customer",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A person who buys goods or services.",
    "example": "The customer asked for the price of the jacket.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 25,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'customer' mean?",
        "options": [
          "A person who buys goods or services.",
          "Not new because someone has owned or used it before.",
          "A small container or package used for goods.",
          "More than the usual or expected amount."
        ],
        "answer": "A person who buys goods or services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ asked for the price of the jacket.",
        "options": [
          "customer",
          "colour",
          "ticket",
          "book"
        ],
        "answer": "customer",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A person who buys goods or services.",
        "options": [
          "customer",
          "colour",
          "ticket",
          "book"
        ],
        "answer": "customer",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-025",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 25,
    "word": "product",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Something that is made or grown to be sold.",
    "example": "I read the label before choosing the product.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 26,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'product' mean?",
        "options": [
          "Something that is made or grown to be sold.",
          "What people use to buy things and pay for services.",
          "A computer program used on a phone, tablet or other device.",
          "Not costing any money."
        ],
        "answer": "Something that is made or grown to be sold.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I read the label before choosing the ______.",
        "options": [
          "product",
          "sale",
          "packet",
          "bottle"
        ],
        "answer": "product",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something that is made or grown to be sold.",
        "options": [
          "product",
          "sale",
          "packet",
          "bottle"
        ],
        "answer": "product",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-026",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 26,
    "word": "item",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "One particular thing, especially something for sale.",
    "example": "This item is cheaper than the one beside it.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 27,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'item' mean?",
        "options": [
          "One particular thing, especially something for sale.",
          "Not the same as another person or thing.",
          "A shop where goods are sold.",
          "More than the usual or expected amount."
        ],
        "answer": "One particular thing, especially something for sale.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This ______ is cheaper than the one beside it.",
        "options": [
          "item",
          "customer",
          "colour",
          "product"
        ],
        "answer": "item",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: One particular thing, especially something for sale.",
        "options": [
          "item",
          "customer",
          "colour",
          "product"
        ],
        "answer": "item",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-027",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 27,
    "word": "size",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "How large or small something is.",
    "example": "I checked the size before buying the shirt.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 28,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'size' mean?",
        "options": [
          "How large or small something is.",
          "To take or send something back to the place where it came from.",
          "To take goods, letters or food to a person or place.",
          "A small document or electronic record that allows you to travel or enter a place."
        ],
        "answer": "How large or small something is.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I checked the ______ before buying the shirt.",
        "options": [
          "size",
          "market",
          "colour",
          "card"
        ],
        "answer": "size",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: How large or small something is.",
        "options": [
          "size",
          "market",
          "colour",
          "card"
        ],
        "answer": "size",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-028",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 28,
    "word": "colour",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The appearance of something such as red, blue or green.",
    "example": "The same bag is available in a different colour.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 29,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'colour' mean?",
        "options": [
          "The appearance of something such as red, blue or green.",
          "The complete amount after all parts are added together.",
          "To keep money for future use instead of spending it.",
          "Not new because someone has owned or used it before."
        ],
        "answer": "The appearance of something such as red, blue or green.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The same bag is available in a different ______.",
        "options": [
          "colour",
          "market",
          "clothes",
          "box"
        ],
        "answer": "colour",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The appearance of something such as red, blue or green.",
        "options": [
          "colour",
          "market",
          "clothes",
          "box"
        ],
        "answer": "colour",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-029",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 29,
    "word": "clothes",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Things that people wear, such as shirts, trousers and dresses.",
    "example": "I only buy new clothes when I need them.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 30,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'clothes' mean?",
        "options": [
          "Things that people wear, such as shirts, trousers and dresses.",
          "Not costing much money.",
          "Not different; exactly alike.",
          "To look at two or more things to see how they are similar or different."
        ],
        "answer": "Things that people wear, such as shirts, trousers and dresses.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I only buy new ______ when I need them.",
        "options": [
          "clothes",
          "app",
          "supermarket",
          "drink"
        ],
        "answer": "clothes",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Things that people wear, such as shirts, trousers and dresses.",
        "options": [
          "clothes",
          "app",
          "supermarket",
          "drink"
        ],
        "answer": "clothes",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-030",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 30,
    "word": "food",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Things that people or animals eat.",
    "example": "We checked the food price before choosing our meal.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 31,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'food' mean?",
        "options": [
          "Things that people or animals eat.",
          "Something that is made or grown to be sold.",
          "As much as is needed.",
          "Not the same as another person or thing."
        ],
        "answer": "Things that people or animals eat.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We checked the ______ price before choosing our meal.",
        "options": [
          "food",
          "card",
          "product",
          "bottle"
        ],
        "answer": "food",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Things that people or animals eat.",
        "options": [
          "food",
          "card",
          "product",
          "bottle"
        ],
        "answer": "food",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-031",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 31,
    "word": "drink",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A liquid that people drink.",
    "example": "I brought my own drink instead of buying one.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 32,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'drink' mean?",
        "options": [
          "A liquid that people drink.",
          "One particular thing, especially something for sale.",
          "A written statement showing how much money you must pay.",
          "To give something to someone in exchange for money."
        ],
        "answer": "A liquid that people drink.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I brought my own ______ instead of buying one.",
        "options": [
          "drink",
          "sale",
          "clothes",
          "colour"
        ],
        "answer": "drink",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A liquid that people drink.",
        "options": [
          "drink",
          "sale",
          "clothes",
          "colour"
        ],
        "answer": "drink",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-032",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 32,
    "word": "book",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A set of printed or written pages joined together.",
    "example": "I compared two book prices before buying one.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 33,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'book' mean?",
        "options": [
          "A set of printed or written pages joined together.",
          "Things that people or animals eat.",
          "Different from usual and often better or more important.",
          "As much as is needed."
        ],
        "answer": "A set of printed or written pages joined together.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I compared two ______ prices before buying one.",
        "options": [
          "book",
          "app",
          "market",
          "bill"
        ],
        "answer": "book",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A set of printed or written pages joined together.",
        "options": [
          "book",
          "app",
          "market",
          "bill"
        ],
        "answer": "book",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-033",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 33,
    "word": "ticket",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small document or electronic record that allows you to travel or enter a place.",
    "example": "We bought the bus ticket online.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 34,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'ticket' mean?",
        "options": [
          "A small document or electronic record that allows you to travel or enter a place.",
          "What people use to buy things and pay for services.",
          "Giving attention so that you avoid mistakes or problems.",
          "Work done for a customer rather than a physical product."
        ],
        "answer": "A small document or electronic record that allows you to travel or enter a place.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We bought the bus ______ online.",
        "options": [
          "ticket",
          "product",
          "item",
          "store"
        ],
        "answer": "ticket",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small document or electronic record that allows you to travel or enter a place.",
        "options": [
          "ticket",
          "product",
          "item",
          "store"
        ],
        "answer": "ticket",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-034",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 34,
    "word": "gift",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Something that you give to someone on a special occasion.",
    "example": "I chose a useful gift that was within my price range.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 35,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'gift' mean?",
        "options": [
          "Something that you give to someone on a special occasion.",
          "A place where people buy and sell food or other goods.",
          "Recently made, bought or obtained.",
          "A small document or electronic record that allows you to travel or enter a place."
        ],
        "answer": "Something that you give to someone on a special occasion.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I chose a useful ______ that was within my price range.",
        "options": [
          "gift",
          "colour",
          "product",
          "bill"
        ],
        "answer": "gift",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something that you give to someone on a special occasion.",
        "options": [
          "gift",
          "colour",
          "product",
          "bill"
        ],
        "answer": "gift",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-035",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Packaging",
    "number": 35,
    "word": "bag",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A container made of paper, cloth or plastic for carrying things.",
    "example": "I bring a reusable bag when I go shopping.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 36,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bag' mean?",
        "options": [
          "A container made of paper, cloth or plastic for carrying things.",
          "Something necessary, or to require something.",
          "Having great value or meaning.",
          "More than the usual or expected amount."
        ],
        "answer": "A container made of paper, cloth or plastic for carrying things.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I bring a reusable ______ when I go shopping.",
        "options": [
          "bag",
          "shopping",
          "market",
          "size"
        ],
        "answer": "bag",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A container made of paper, cloth or plastic for carrying things.",
        "options": [
          "bag",
          "shopping",
          "market",
          "size"
        ],
        "answer": "bag",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-036",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Packaging",
    "number": 36,
    "word": "box",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A container with flat sides, usually made of cardboard or plastic.",
    "example": "The cereal came in a large box.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 37,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'box' mean?",
        "options": [
          "A container with flat sides, usually made of cardboard or plastic.",
          "Two matching things that are used together.",
          "Giving attention so that you avoid mistakes or problems.",
          "Costing a lot of money."
        ],
        "answer": "A container with flat sides, usually made of cardboard or plastic.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cereal came in a large ______.",
        "options": [
          "box",
          "bank",
          "clothes",
          "ticket"
        ],
        "answer": "box",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A container with flat sides, usually made of cardboard or plastic.",
        "options": [
          "box",
          "bank",
          "clothes",
          "ticket"
        ],
        "answer": "box",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-037",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Packaging",
    "number": 37,
    "word": "bottle",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A container for liquids with a narrow top.",
    "example": "I use a refillable water bottle to save money.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 38,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'bottle' mean?",
        "options": [
          "A container for liquids with a narrow top.",
          "The appearance of something such as red, blue or green.",
          "The activity of buying things from shops.",
          "To get something by paying money for it."
        ],
        "answer": "A container for liquids with a narrow top.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I use a refillable water ______ to save money.",
        "options": [
          "bottle",
          "card",
          "enough",
          "bag"
        ],
        "answer": "bottle",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A container for liquids with a narrow top.",
        "options": [
          "bottle",
          "card",
          "enough",
          "bag"
        ],
        "answer": "bottle",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-038",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Packaging",
    "number": 38,
    "word": "packet",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A small container or package used for goods.",
    "example": "I checked the weight on the packet before buying it.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 39,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'packet' mean?",
        "options": [
          "A small container or package used for goods.",
          "Helping you do or achieve something.",
          "A small round piece of metal used as money.",
          "The complete amount after all parts are added together."
        ],
        "answer": "A small container or package used for goods.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I checked the weight on the ______ before buying it.",
        "options": [
          "packet",
          "food",
          "sale",
          "choice"
        ],
        "answer": "packet",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small container or package used for goods.",
        "options": [
          "packet",
          "food",
          "sale",
          "choice"
        ],
        "answer": "packet",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-039",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Shopping",
    "number": 39,
    "word": "pair",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Two matching things that are used together.",
    "example": "I bought a pair of socks during the sale.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 40,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'pair' mean?",
        "options": [
          "Two matching things that are used together.",
          "Having great value or meaning.",
          "The amount of money that something costs.",
          "How large or small something is."
        ],
        "answer": "Two matching things that are used together.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I bought a ______ of socks during the sale.",
        "options": [
          "pair",
          "drink",
          "bag",
          "total"
        ],
        "answer": "pair",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Two matching things that are used together.",
        "options": [
          "pair",
          "drink",
          "bag",
          "total"
        ],
        "answer": "pair",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-040",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Choices",
    "number": 40,
    "word": "choose",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To decide which person or thing you want.",
    "example": "I choose products that I really need.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 41,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'choose' mean?",
        "options": [
          "To decide which person or thing you want.",
          "Something that is made or grown to be sold.",
          "The activity of buying things from shops.",
          "To take something from someone and return it later."
        ],
        "answer": "To decide which person or thing you want.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ products that I really need.",
        "options": [
          "choose",
          "pay",
          "compare",
          "borrow"
        ],
        "answer": "choose",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To decide which person or thing you want.",
        "options": [
          "choose",
          "pay",
          "compare",
          "borrow"
        ],
        "answer": "choose",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-041",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Choices",
    "number": 41,
    "word": "choice",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "An act of choosing between two or more possibilities.",
    "example": "Buying the cheaper notebook was a good choice.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 42,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'choice' mean?",
        "options": [
          "An act of choosing between two or more possibilities.",
          "A set of pages on the internet belonging to a person or organisation.",
          "The complete amount after all parts are added together.",
          "A small case used for keeping money and cards."
        ],
        "answer": "An act of choosing between two or more possibilities.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Buying the cheaper notebook was a good ______.",
        "options": [
          "choice",
          "enough",
          "book",
          "ticket"
        ],
        "answer": "choice",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An act of choosing between two or more possibilities.",
        "options": [
          "choice",
          "enough",
          "book",
          "ticket"
        ],
        "answer": "choice",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-042",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping & Services",
    "number": 42,
    "word": "order",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A request to buy food, goods or services.",
    "example": "We placed an order for the school books online.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 43,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'order' mean?",
        "options": [
          "A request to buy food, goods or services.",
          "A computer program used on a phone, tablet or other device.",
          "A set of pages on the internet belonging to a person or organisation.",
          "A liquid that people drink."
        ],
        "answer": "A request to buy food, goods or services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We placed an ______ for the school books online.",
        "options": [
          "order",
          "need",
          "exchange",
          "cost"
        ],
        "answer": "order",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A request to buy food, goods or services.",
        "options": [
          "order",
          "need",
          "exchange",
          "cost"
        ],
        "answer": "order",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-043",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Rights & Actions",
    "number": 43,
    "word": "return",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To take or send something back to the place where it came from.",
    "example": "I returned the shirt because it was the wrong size.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 44,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'return' mean?",
        "options": [
          "To take or send something back to the place where it came from.",
          "Costing a lot of money.",
          "Not costing much money.",
          "To get something by paying money for it."
        ],
        "answer": "To take or send something back to the place where it came from.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ______ the shirt because it was the wrong size.",
        "options": [
          "return",
          "pay",
          "check",
          "compare"
        ],
        "answer": "return",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To take or send something back to the place where it came from.",
        "options": [
          "return",
          "pay",
          "check",
          "compare"
        ],
        "answer": "return",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-044",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Rights & Actions",
    "number": 44,
    "word": "exchange",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To give something and receive another thing in its place.",
    "example": "The shop allowed me to exchange the damaged notebook.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 45,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'exchange' mean?",
        "options": [
          "To give something and receive another thing in its place.",
          "The complete amount after all parts are added together.",
          "Connected to or available through the internet.",
          "A computer program used on a phone, tablet or other device."
        ],
        "answer": "To give something and receive another thing in its place.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop allowed me to ______ the damaged notebook.",
        "options": [
          "exchange",
          "offer",
          "want",
          "need"
        ],
        "answer": "exchange",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To give something and receive another thing in its place.",
        "options": [
          "exchange",
          "offer",
          "want",
          "need"
        ],
        "answer": "exchange",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-045",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Online Shopping",
    "number": 45,
    "word": "online",
    "partOfSpeech": "adjective / adverb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Connected to or available through the internet.",
    "example": "My family checks prices online before buying electronics.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 46,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'online' mean?",
        "options": [
          "Connected to or available through the internet.",
          "A place where things are sold, or the activity of buying things.",
          "To examine something to make sure it is correct or suitable.",
          "To decide which person or thing you want."
        ],
        "answer": "Connected to or available through the internet.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "My family checks prices ______ before buying electronics.",
        "options": [
          "online",
          "return",
          "sell",
          "compare"
        ],
        "answer": "online",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Connected to or available through the internet.",
        "options": [
          "online",
          "return",
          "sell",
          "compare"
        ],
        "answer": "online",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-046",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Online Shopping",
    "number": 46,
    "word": "website",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A set of pages on the internet belonging to a person or organisation.",
    "example": "I checked the shop's website for the correct price.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 47,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'website' mean?",
        "options": [
          "A set of pages on the internet belonging to a person or organisation.",
          "A small plastic card that can be used to pay for things.",
          "Money in the form of notes and coins.",
          "Something necessary, or to require something."
        ],
        "answer": "A set of pages on the internet belonging to a person or organisation.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I checked the shop's ______ for the correct price.",
        "options": [
          "website",
          "app",
          "colour",
          "choice"
        ],
        "answer": "website",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A set of pages on the internet belonging to a person or organisation.",
        "options": [
          "website",
          "app",
          "colour",
          "choice"
        ],
        "answer": "website",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-047",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Online Shopping",
    "number": 47,
    "word": "app",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A computer program used on a phone, tablet or other device.",
    "example": "The shopping app shows the total price before payment.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 48,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'app' mean?",
        "options": [
          "A computer program used on a phone, tablet or other device.",
          "Something that is made or grown to be sold.",
          "Something that you give to someone on a special occasion.",
          "Giving attention so that you avoid mistakes or problems."
        ],
        "answer": "A computer program used on a phone, tablet or other device.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shopping ______ shows the total price before payment.",
        "options": [
          "app",
          "book",
          "size",
          "wallet"
        ],
        "answer": "app",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A computer program used on a phone, tablet or other device.",
        "options": [
          "app",
          "book",
          "size",
          "wallet"
        ],
        "answer": "app",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-048",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping & Services",
    "number": 48,
    "word": "deliver",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To take goods, letters or food to a person or place.",
    "example": "The shop will deliver the books to our house.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 49,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'deliver' mean?",
        "options": [
          "To take goods, letters or food to a person or place.",
          "To give money for something that you buy or use.",
          "Having great value or meaning.",
          "Better than all others of the same kind."
        ],
        "answer": "To take goods, letters or food to a person or place.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop will ______ the books to our house.",
        "options": [
          "deliver",
          "online",
          "save",
          "return"
        ],
        "answer": "deliver",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To take goods, letters or food to a person or place.",
        "options": [
          "deliver",
          "online",
          "save",
          "return"
        ],
        "answer": "deliver",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-049",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Products & Services",
    "number": 49,
    "word": "service",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Work done for a customer rather than a physical product.",
    "example": "Good customer service helps buyers solve problems.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 50,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'service' mean?",
        "options": [
          "Work done for a customer rather than a physical product.",
          "Money returned to you when you pay more than the price.",
          "A small round piece of metal used as money.",
          "Not costing much money."
        ],
        "answer": "Work done for a customer rather than a physical product.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Good customer ______ helps buyers solve problems.",
        "options": [
          "service",
          "total",
          "bank",
          "price"
        ],
        "answer": "service",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Work done for a customer rather than a physical product.",
        "options": [
          "service",
          "total",
          "bank",
          "price"
        ],
        "answer": "service",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-050",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Promotions & Sales",
    "number": 50,
    "word": "offer",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A chance to buy something at a special price or with an extra benefit.",
    "example": "The shop has a special offer on school supplies.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 51,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'offer' mean?",
        "options": [
          "A chance to buy something at a special price or with an extra benefit.",
          "The complete amount after all parts are added together.",
          "To get something by paying money for it.",
          "The appearance of something such as red, blue or green."
        ],
        "answer": "A chance to buy something at a special price or with an extra benefit.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop has a special ______ on school supplies.",
        "options": [
          "offer",
          "exchange",
          "cost",
          "order"
        ],
        "answer": "offer",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A chance to buy something at a special price or with an extra benefit.",
        "options": [
          "offer",
          "exchange",
          "cost",
          "order"
        ],
        "answer": "offer",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-051",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Promotions & Sales",
    "number": 51,
    "word": "sale",
    "partOfSpeech": "noun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "A period when goods are sold at lower prices.",
    "example": "I waited for the sale before buying the shoes.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 52,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'sale' mean?",
        "options": [
          "A period when goods are sold at lower prices.",
          "Work done for a customer rather than a physical product.",
          "Something necessary, or to require something.",
          "To give money for something that you buy or use."
        ],
        "answer": "A period when goods are sold at lower prices.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I waited for the ______ before buying the shoes.",
        "options": [
          "sale",
          "coin",
          "ticket",
          "price"
        ],
        "answer": "sale",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A period when goods are sold at lower prices.",
        "options": [
          "sale",
          "coin",
          "ticket",
          "price"
        ],
        "answer": "sale",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-052",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Promotions & Sales",
    "number": 52,
    "word": "special",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Different from usual and often better or more important.",
    "example": "The store has a special price for students.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 53,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'special' mean?",
        "options": [
          "Different from usual and often better or more important.",
          "Better than all others of the same kind.",
          "To examine something to make sure it is correct or suitable.",
          "A small document or electronic record that allows you to travel or enter a place."
        ],
        "answer": "Different from usual and often better or more important.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The store has a ______ price for students.",
        "options": [
          "special",
          "used",
          "safe",
          "careful"
        ],
        "answer": "special",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Different from usual and often better or more important.",
        "options": [
          "special",
          "used",
          "safe",
          "careful"
        ],
        "answer": "special",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-053",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Choices",
    "number": 53,
    "word": "new",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Recently made, bought or obtained.",
    "example": "I do not always need to buy a new phone.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 54,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'new' mean?",
        "options": [
          "Recently made, bought or obtained.",
          "Having great value or meaning.",
          "Giving attention so that you avoid mistakes or problems.",
          "To take something from someone and return it later."
        ],
        "answer": "Recently made, bought or obtained.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I do not always need to buy a ______ phone.",
        "options": [
          "new",
          "important",
          "best",
          "useful"
        ],
        "answer": "new",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Recently made, bought or obtained.",
        "options": [
          "new",
          "important",
          "best",
          "useful"
        ],
        "answer": "new",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-054",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Responsible Consumption",
    "number": 54,
    "word": "used",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not new because someone has owned or used it before.",
    "example": "A used textbook can cost less than a new one.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 55,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'used' mean?",
        "options": [
          "Not new because someone has owned or used it before.",
          "A place where people buy and sell food or other goods.",
          "An organisation that keeps and manages people's money.",
          "A small document or electronic record that allows you to travel or enter a place."
        ],
        "answer": "Not new because someone has owned or used it before.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A ______ textbook can cost less than a new one.",
        "options": [
          "used",
          "careful",
          "special",
          "free"
        ],
        "answer": "used",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not new because someone has owned or used it before.",
        "options": [
          "used",
          "careful",
          "special",
          "free"
        ],
        "answer": "used",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-055",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Responsible Consumption",
    "number": 55,
    "word": "useful",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Helping you do or achieve something.",
    "example": "I prefer to spend money on useful things.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 56,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'useful' mean?",
        "options": [
          "Helping you do or achieve something.",
          "Not costing any money.",
          "Work done for a customer rather than a physical product.",
          "Not the same as another person or thing."
        ],
        "answer": "Helping you do or achieve something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I prefer to spend money on ______ things.",
        "options": [
          "useful",
          "used",
          "extra",
          "free"
        ],
        "answer": "useful",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Helping you do or achieve something.",
        "options": [
          "useful",
          "used",
          "extra",
          "free"
        ],
        "answer": "useful",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-056",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Financial Awareness",
    "number": 56,
    "word": "important",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Having great value or meaning.",
    "example": "It is important to save some money for emergencies.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 57,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'important' mean?",
        "options": [
          "Having great value or meaning.",
          "A container for liquids with a narrow top.",
          "To take or send something back to the place where it came from.",
          "Not the same as another person or thing."
        ],
        "answer": "Having great value or meaning.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "It is ______ to save some money for emergencies.",
        "options": [
          "important",
          "special",
          "careful",
          "useful"
        ],
        "answer": "important",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Having great value or meaning.",
        "options": [
          "important",
          "special",
          "careful",
          "useful"
        ],
        "answer": "important",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-057",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Financial Awareness",
    "number": 57,
    "word": "enough",
    "partOfSpeech": "determiner / pronoun",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "As much as is needed.",
    "example": "I only buy something when I have enough money.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 58,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'enough' mean?",
        "options": [
          "As much as is needed.",
          "To give something and receive another thing in its place.",
          "A place where people buy and sell food or other goods.",
          "A small case used for keeping money and cards."
        ],
        "answer": "As much as is needed.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I only buy something when I have ______ money.",
        "options": [
          "enough",
          "ticket",
          "colour",
          "customer"
        ],
        "answer": "enough",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: As much as is needed.",
        "options": [
          "enough",
          "ticket",
          "colour",
          "customer"
        ],
        "answer": "enough",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-058",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Needs & Wants",
    "number": 58,
    "word": "need",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Something necessary, or to require something.",
    "example": "Food is a need, but a new game may be a want.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 59,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'need' mean?",
        "options": [
          "Something necessary, or to require something.",
          "Something you would like to have but may not need.",
          "A small container or package used for goods.",
          "Something that is made or grown to be sold."
        ],
        "answer": "Something necessary, or to require something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Food is a ______, but a new game may be a want.",
        "options": [
          "need",
          "cost",
          "exchange",
          "shop"
        ],
        "answer": "need",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something necessary, or to require something.",
        "options": [
          "need",
          "cost",
          "exchange",
          "shop"
        ],
        "answer": "need",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-059",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Needs & Wants",
    "number": 59,
    "word": "want",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Something you would like to have but may not need.",
    "example": "I ask myself whether an item is a need or a want.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 60,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'want' mean?",
        "options": [
          "Something you would like to have but may not need.",
          "A container for liquids with a narrow top.",
          "Money returned to you when you pay more than the price.",
          "Not costing much money."
        ],
        "answer": "Something you would like to have but may not need.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I ask myself whether an item is a need or a ______.",
        "options": [
          "want",
          "need",
          "offer",
          "exchange"
        ],
        "answer": "want",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something you would like to have but may not need.",
        "options": [
          "want",
          "need",
          "offer",
          "exchange"
        ],
        "answer": "want",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-060",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 60,
    "word": "check",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To examine something to make sure it is correct or suitable.",
    "example": "Always check the price and condition before paying.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 61,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'check' mean?",
        "options": [
          "To examine something to make sure it is correct or suitable.",
          "Protected from danger, loss or harm.",
          "A small case used for keeping money and cards.",
          "Things that people or animals eat."
        ],
        "answer": "To examine something to make sure it is correct or suitable.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Always ______ the price and condition before paying.",
        "options": [
          "check",
          "online",
          "spend",
          "sell"
        ],
        "answer": "check",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To examine something to make sure it is correct or suitable.",
        "options": [
          "check",
          "online",
          "spend",
          "sell"
        ],
        "answer": "check",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-061",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 61,
    "word": "compare",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To look at two or more things to see how they are similar or different.",
    "example": "We compare prices before choosing a product.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 62,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'compare' mean?",
        "options": [
          "To look at two or more things to see how they are similar or different.",
          "A small case used for keeping money and cards.",
          "A written statement showing how much money you must pay.",
          "To take goods, letters or food to a person or place."
        ],
        "answer": "To look at two or more things to see how they are similar or different.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "We ______ prices before choosing a product.",
        "options": [
          "compare",
          "choose",
          "spend",
          "borrow"
        ],
        "answer": "compare",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To look at two or more things to see how they are similar or different.",
        "options": [
          "compare",
          "choose",
          "spend",
          "borrow"
        ],
        "answer": "compare",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-062",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 62,
    "word": "different",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not the same as another person or thing.",
    "example": "Different shops may sell the same product at different prices.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 63,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'different' mean?",
        "options": [
          "Not the same as another person or thing.",
          "A place where things are sold, or the activity of buying things.",
          "To give something to someone in exchange for money.",
          "A set of pages on the internet belonging to a person or organisation."
        ],
        "answer": "Not the same as another person or thing.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ shops may sell the same product at different prices.",
        "options": [
          "different",
          "important",
          "expensive",
          "same"
        ],
        "answer": "different",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not the same as another person or thing.",
        "options": [
          "different",
          "important",
          "expensive",
          "same"
        ],
        "answer": "different",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-063",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 63,
    "word": "same",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Not different; exactly alike.",
    "example": "The two bottles are the same size but have different prices.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 64,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'same' mean?",
        "options": [
          "Not different; exactly alike.",
          "Two matching things that are used together.",
          "A container with flat sides, usually made of cardboard or plastic.",
          "To receive money for work that you do."
        ],
        "answer": "Not different; exactly alike.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The two bottles are the ______ size but have different prices.",
        "options": [
          "same",
          "careful",
          "safe",
          "new"
        ],
        "answer": "same",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Not different; exactly alike.",
        "options": [
          "same",
          "careful",
          "safe",
          "new"
        ],
        "answer": "same",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-064",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 64,
    "word": "best",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Better than all others of the same kind.",
    "example": "The cheapest product is not always the best choice.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 65,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'best' mean?",
        "options": [
          "Better than all others of the same kind.",
          "To get something by paying money for it.",
          "A place where things are sold, or the activity of buying things.",
          "A written statement showing how much money you must pay."
        ],
        "answer": "Better than all others of the same kind.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cheapest product is not always the ______ choice.",
        "options": [
          "best",
          "important",
          "free",
          "used"
        ],
        "answer": "best",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Better than all others of the same kind.",
        "options": [
          "best",
          "important",
          "free",
          "used"
        ],
        "answer": "best",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-065",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Financial Awareness",
    "number": 65,
    "word": "careful",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Giving attention so that you avoid mistakes or problems.",
    "example": "Be careful when entering payment information online.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 66,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'careful' mean?",
        "options": [
          "Giving attention so that you avoid mistakes or problems.",
          "What people use to buy things and pay for services.",
          "Two matching things that are used together.",
          "A computer program used on a phone, tablet or other device."
        ],
        "answer": "Giving attention so that you avoid mistakes or problems.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Be ______ when entering payment information online.",
        "options": [
          "careful",
          "important",
          "best",
          "free"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Giving attention so that you avoid mistakes or problems.",
        "options": [
          "careful",
          "important",
          "best",
          "free"
        ],
        "answer": "careful",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-066",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Financial Awareness",
    "number": 66,
    "word": "safe",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "Protected from danger, loss or harm.",
    "example": "Keep your password safe when using a shopping app.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 67,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'safe' mean?",
        "options": [
          "Protected from danger, loss or harm.",
          "The amount of money that something costs.",
          "Giving attention so that you avoid mistakes or problems.",
          "As much as is needed."
        ],
        "answer": "Protected from danger, loss or harm.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Keep your password ______ when using a shopping app.",
        "options": [
          "safe",
          "new",
          "careful",
          "best"
        ],
        "answer": "safe",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Protected from danger, loss or harm.",
        "options": [
          "safe",
          "new",
          "careful",
          "best"
        ],
        "answer": "safe",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-067",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 67,
    "word": "total",
    "partOfSpeech": "noun / adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "The complete amount after all parts are added together.",
    "example": "The total for the three items was RM18.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 68,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'total' mean?",
        "options": [
          "The complete amount after all parts are added together.",
          "Something that you give to someone on a special occasion.",
          "Something you would like to have but may not need.",
          "Better than all others of the same kind."
        ],
        "answer": "The complete amount after all parts are added together.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ for the three items was RM18.",
        "options": [
          "total",
          "enough",
          "gift",
          "colour"
        ],
        "answer": "total",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The complete amount after all parts are added together.",
        "options": [
          "total",
          "enough",
          "gift",
          "colour"
        ],
        "answer": "total",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-068",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Payment",
    "number": 68,
    "word": "extra",
    "partOfSpeech": "adjective",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "More than the usual or expected amount.",
    "example": "The shop charged an extra RM3 for delivery.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 69,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'extra' mean?",
        "options": [
          "More than the usual or expected amount.",
          "To get something by paying money for it.",
          "An organisation that keeps and manages people's money.",
          "To take something from someone and return it later."
        ],
        "answer": "More than the usual or expected amount.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop charged an ______ RM3 for delivery.",
        "options": [
          "extra",
          "special",
          "useful",
          "new"
        ],
        "answer": "extra",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: More than the usual or expected amount.",
        "options": [
          "extra",
          "special",
          "useful",
          "new"
        ],
        "answer": "extra",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-069",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Personal Finance",
    "number": 69,
    "word": "borrow",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To take something from someone and return it later.",
    "example": "I try not to borrow money for things I do not need.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 70,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'borrow' mean?",
        "options": [
          "To take something from someone and return it later.",
          "To receive money for work that you do.",
          "A small document or electronic record that allows you to travel or enter a place.",
          "The complete amount after all parts are added together."
        ],
        "answer": "To take something from someone and return it later.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I try not to ______ money for things I do not need.",
        "options": [
          "borrow",
          "check",
          "sell",
          "online"
        ],
        "answer": "borrow",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To take something from someone and return it later.",
        "options": [
          "borrow",
          "check",
          "sell",
          "online"
        ],
        "answer": "borrow",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-RA2-070",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Income & Work",
    "number": 70,
    "word": "earn",
    "partOfSpeech": "verb",
    "cefrLevel": "Revised A2",
    "sourceCefrLevel": "Revise A2",
    "meaning": "To receive money for work that you do.",
    "example": "People earn money by working.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 71,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'earn' mean?",
        "options": [
          "To receive money for work that you do.",
          "Something that is made or grown to be sold.",
          "A small plastic card that can be used to pay for things.",
          "Giving attention so that you avoid mistakes or problems."
        ],
        "answer": "To receive money for work that you do.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "People ______ money by working.",
        "options": [
          "earn",
          "deliver",
          "check",
          "return"
        ],
        "answer": "earn",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To receive money for work that you do.",
        "options": [
          "earn",
          "deliver",
          "check",
          "return"
        ],
        "answer": "earn",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-071",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Advertising & Influence",
    "number": 71,
    "word": "advertise",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To tell people about a product or service so that they will buy or use it.",
    "example": "Companies advertise products on websites and social media.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 72,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'advertise' mean?",
        "options": [
          "To tell people about a product or service so that they will buy or use it.",
          "An amount out of every hundred, shown with the symbol %.",
          "A notice, picture or video that tries to persuade people to buy something.",
          "A choice that you make after thinking about something."
        ],
        "answer": "To tell people about a product or service so that they will buy or use it.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Companies ______ products on websites and social media.",
        "options": [
          "advertise",
          "receive",
          "support",
          "protect"
        ],
        "answer": "advertise",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To tell people about a product or service so that they will buy or use it.",
        "options": [
          "advertise",
          "receive",
          "support",
          "protect"
        ],
        "answer": "advertise",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-072",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Advertising & Influence",
    "number": 72,
    "word": "advertisement",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A notice, picture or video that tries to persuade people to buy something.",
    "example": "The advertisement made the new drink look very attractive.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 73,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'advertisement' mean?",
        "options": [
          "A notice, picture or video that tries to persuade people to buy something.",
          "An amount out of every hundred, shown with the symbol %.",
          "Different from what is normal or expected.",
          "The activity of buying, selling or providing goods and services."
        ],
        "answer": "A notice, picture or video that tries to persuade people to buy something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ made the new drink look very attractive.",
        "options": [
          "advertisement",
          "result",
          "company",
          "experience"
        ],
        "answer": "advertisement",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A notice, picture or video that tries to persuade people to buy something.",
        "options": [
          "advertisement",
          "result",
          "company",
          "experience"
        ],
        "answer": "advertisement",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-073",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Advertising & Influence",
    "number": 73,
    "word": "advertising",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The activity of creating messages to encourage people to buy products or services.",
    "example": "Advertising can influence what young consumers want to buy.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 74,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'advertising' mean?",
        "options": [
          "The activity of creating messages to encourage people to buy products or services.",
          "Almost the same but not exactly the same.",
          "An amount out of every hundred, shown with the symbol %.",
          "To give information about a problem to someone responsible."
        ],
        "answer": "The activity of creating messages to encourage people to buy products or services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ can influence what young consumers want to buy.",
        "options": [
          "advertising",
          "advertisement",
          "detail",
          "amount"
        ],
        "answer": "advertising",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of creating messages to encourage people to buy products or services.",
        "options": [
          "advertising",
          "advertisement",
          "detail",
          "amount"
        ],
        "answer": "advertising",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-074",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 74,
    "word": "advantage",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A good or useful feature that makes one choice better than another.",
    "example": "One advantage of comparing prices is that you may save money.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 75,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'advantage' mean?",
        "options": [
          "A good or useful feature that makes one choice better than another.",
          "Knowledge gained from doing, seeing or using something.",
          "A choice that you make after thinking about something.",
          "Belonging to or connected with the area where you live."
        ],
        "answer": "A good or useful feature that makes one choice better than another.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "One ______ of comparing prices is that you may save money.",
        "options": [
          "advantage",
          "percent",
          "advertisement",
          "advertising"
        ],
        "answer": "advantage",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A good or useful feature that makes one choice better than another.",
        "options": [
          "advantage",
          "percent",
          "advertisement",
          "advertising"
        ],
        "answer": "advantage",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-075",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 75,
    "word": "alternative",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Another choice that you can use or choose instead.",
    "example": "A reusable bottle is a cheaper alternative to buying bottled water every day.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 76,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'alternative' mean?",
        "options": [
          "Another choice that you can use or choose instead.",
          "A notice, picture or video that tries to persuade people to buy something.",
          "The activity of creating messages to encourage people to buy products or services.",
          "Ready to be bought, used or obtained."
        ],
        "answer": "Another choice that you can use or choose instead.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A reusable bottle is a cheaper ______ to buying bottled water every day.",
        "options": [
          "alternative",
          "result",
          "information",
          "advantage"
        ],
        "answer": "alternative",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Another choice that you can use or choose instead.",
        "options": [
          "alternative",
          "result",
          "information",
          "advantage"
        ],
        "answer": "alternative",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-076",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Financial Awareness",
    "number": 76,
    "word": "amount",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A quantity of money or something else.",
    "example": "I decide the amount of money I can spend before shopping.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 77,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'amount' mean?",
        "options": [
          "A quantity of money or something else.",
          "Facts or details that help you understand something.",
          "The activity of buying, selling or providing goods and services.",
          "How good or bad a product or service is."
        ],
        "answer": "A quantity of money or something else.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I decide the ______ of money I can spend before shopping.",
        "options": [
          "amount",
          "percent",
          "result",
          "detail"
        ],
        "answer": "amount",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A quantity of money or something else.",
        "options": [
          "amount",
          "percent",
          "result",
          "detail"
        ],
        "answer": "amount",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-077",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Shopping & Products",
    "number": 77,
    "word": "available",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Ready to be bought, used or obtained.",
    "example": "The cheaper model is available at another store.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 78,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'available' mean?",
        "options": [
          "Ready to be bought, used or obtained.",
          "A notice, picture or video that tries to persuade people to buy something.",
          "A good or useful feature that makes one choice better than another.",
          "Another choice that you can use or choose instead."
        ],
        "answer": "Ready to be bought, used or obtained.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The cheaper model is ______ at another store.",
        "options": [
          "available",
          "popular",
          "local",
          "possible"
        ],
        "answer": "available",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Ready to be bought, used or obtained.",
        "options": [
          "available",
          "popular",
          "local",
          "possible"
        ],
        "answer": "available",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-078",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Commerce",
    "number": 78,
    "word": "business",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The activity of buying, selling or providing goods and services.",
    "example": "A small business must set fair prices for its customers.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 79,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'business' mean?",
        "options": [
          "The activity of buying, selling or providing goods and services.",
          "An amount out of every hundred, shown with the symbol %.",
          "Needed for a particular purpose.",
          "Able to happen or be done."
        ],
        "answer": "The activity of buying, selling or providing goods and services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A small ______ must set fair prices for its customers.",
        "options": [
          "business",
          "information",
          "alternative",
          "quality"
        ],
        "answer": "business",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The activity of buying, selling or providing goods and services.",
        "options": [
          "business",
          "information",
          "alternative",
          "quality"
        ],
        "answer": "business",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-079",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Commerce",
    "number": 79,
    "word": "company",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "An organisation that sells goods or services.",
    "example": "The company provides information about its products online.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 80,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'company' mean?",
        "options": [
          "An organisation that sells goods or services.",
          "The activity of buying, selling or providing goods and services.",
          "Needed for a particular purpose.",
          "A notice, picture or video that tries to persuade people to buy something."
        ],
        "answer": "An organisation that sells goods or services.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The ______ provides information about its products online.",
        "options": [
          "company",
          "business",
          "advertisement",
          "detail"
        ],
        "answer": "company",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An organisation that sells goods or services.",
        "options": [
          "company",
          "business",
          "advertisement",
          "detail"
        ],
        "answer": "company",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-080",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Choices",
    "number": 80,
    "word": "condition",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "The state that something is in, especially whether it is good or damaged.",
    "example": "Check the condition of a used item before buying it.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 81,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'condition' mean?",
        "options": [
          "The state that something is in, especially whether it is good or damaged.",
          "Needed for a particular purpose.",
          "Something that happens because of an action or decision.",
          "A notice, picture or video that tries to persuade people to buy something."
        ],
        "answer": "The state that something is in, especially whether it is good or damaged.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Check the ______ of a used item before buying it.",
        "options": [
          "condition",
          "detail",
          "quality",
          "advertising"
        ],
        "answer": "condition",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: The state that something is in, especially whether it is good or damaged.",
        "options": [
          "condition",
          "detail",
          "quality",
          "advertising"
        ],
        "answer": "condition",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-081",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 81,
    "word": "decision",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A choice that you make after thinking about something.",
    "example": "Comparing products helps me make a better buying decision.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 82,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'decision' mean?",
        "options": [
          "A choice that you make after thinking about something.",
          "How good or bad a product or service is.",
          "Able to happen or be done.",
          "The activity of buying, selling or providing goods and services."
        ],
        "answer": "A choice that you make after thinking about something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Comparing products helps me make a better buying ______.",
        "options": [
          "decision",
          "condition",
          "alternative",
          "information"
        ],
        "answer": "decision",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A choice that you make after thinking about something.",
        "options": [
          "decision",
          "condition",
          "alternative",
          "information"
        ],
        "answer": "decision",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-082",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Information",
    "number": 82,
    "word": "detail",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "A small piece of information about something.",
    "example": "Read every detail on the product label before buying.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 83,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'detail' mean?",
        "options": [
          "A small piece of information about something.",
          "To keep someone or something safe from harm, loss or damage.",
          "The activity of buying, selling or providing goods and services.",
          "A choice that you make after thinking about something."
        ],
        "answer": "A small piece of information about something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Read every ______ on the product label before buying.",
        "options": [
          "detail",
          "business",
          "information",
          "condition"
        ],
        "answer": "detail",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: A small piece of information about something.",
        "options": [
          "detail",
          "business",
          "information",
          "condition"
        ],
        "answer": "detail",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-083",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Information",
    "number": 83,
    "word": "information",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Facts or details that help you understand something.",
    "example": "Good information helps consumers choose wisely.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 84,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'information' mean?",
        "options": [
          "Facts or details that help you understand something.",
          "How useful or worthwhile something is compared with its price.",
          "The activity of buying, selling or providing goods and services.",
          "To keep someone or something safe from harm, loss or damage."
        ],
        "answer": "Facts or details that help you understand something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Good ______ helps consumers choose wisely.",
        "options": [
          "information",
          "condition",
          "percent",
          "advantage"
        ],
        "answer": "information",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Facts or details that help you understand something.",
        "options": [
          "information",
          "condition",
          "percent",
          "advantage"
        ],
        "answer": "information",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-084",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Responsible Consumption",
    "number": 84,
    "word": "local",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Belonging to or connected with the area where you live.",
    "example": "Buying local products can support nearby businesses.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 85,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'local' mean?",
        "options": [
          "Belonging to or connected with the area where you live.",
          "Another choice that you can use or choose instead.",
          "Open to or shared by everyone.",
          "Needed for a particular purpose."
        ],
        "answer": "Belonging to or connected with the area where you live.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Buying ______ products can support nearby businesses.",
        "options": [
          "local",
          "unusual",
          "regular",
          "popular"
        ],
        "answer": "local",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Belonging to or connected with the area where you live.",
        "options": [
          "local",
          "unusual",
          "regular",
          "popular"
        ],
        "answer": "local",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-085",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Calculation",
    "number": 85,
    "word": "percent",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "An amount out of every hundred, shown with the symbol %.",
    "example": "The shop gave a ten percent reduction during the sale.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 86,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'percent' mean?",
        "options": [
          "An amount out of every hundred, shown with the symbol %.",
          "Another choice that you can use or choose instead.",
          "A quantity of money or something else.",
          "A small piece of information about something."
        ],
        "answer": "An amount out of every hundred, shown with the symbol %.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The shop gave a ten ______ reduction during the sale.",
        "options": [
          "percent",
          "advertising",
          "result",
          "condition"
        ],
        "answer": "percent",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: An amount out of every hundred, shown with the symbol %.",
        "options": [
          "percent",
          "advertising",
          "result",
          "condition"
        ],
        "answer": "percent",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-086",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 86,
    "word": "quality",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "How good or bad a product or service is.",
    "example": "I compare both price and quality before buying shoes.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 87,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'quality' mean?",
        "options": [
          "How good or bad a product or service is.",
          "An amount out of every hundred, shown with the symbol %.",
          "A notice, picture or video that tries to persuade people to buy something.",
          "Belonging to or connected with the area where you live."
        ],
        "answer": "How good or bad a product or service is.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "I compare both price and ______ before buying shoes.",
        "options": [
          "quality",
          "detail",
          "business",
          "advantage"
        ],
        "answer": "quality",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: How good or bad a product or service is.",
        "options": [
          "quality",
          "detail",
          "business",
          "advantage"
        ],
        "answer": "quality",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-087",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Money & Transactions",
    "number": 87,
    "word": "receive",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To get something that someone gives, sends or pays to you.",
    "example": "You should receive a receipt after making a payment.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 88,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'receive' mean?",
        "options": [
          "To get something that someone gives, sends or pays to you.",
          "Knowledge gained from doing, seeing or using something.",
          "A notice, picture or video that tries to persuade people to buy something.",
          "How good or bad a product or service is."
        ],
        "answer": "To get something that someone gives, sends or pays to you.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "You should ______ a receipt after making a payment.",
        "options": [
          "receive",
          "support",
          "protect",
          "advertise"
        ],
        "answer": "receive",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To get something that someone gives, sends or pays to you.",
        "options": [
          "receive",
          "support",
          "protect",
          "advertise"
        ],
        "answer": "receive",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-088",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Rights & Safety",
    "number": 88,
    "word": "report",
    "partOfSpeech": "noun / verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To give information about a problem to someone responsible.",
    "example": "Report a suspicious online seller to a trusted adult.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 89,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'report' mean?",
        "options": [
          "To give information about a problem to someone responsible.",
          "The activity of creating messages to encourage people to buy products or services.",
          "Another choice that you can use or choose instead.",
          "To get something that someone gives, sends or pays to you."
        ],
        "answer": "To give information about a problem to someone responsible.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ a suspicious online seller to a trusted adult.",
        "options": [
          "report",
          "support",
          "protect",
          "advertising"
        ],
        "answer": "report",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To give information about a problem to someone responsible.",
        "options": [
          "report",
          "support",
          "protect",
          "advertising"
        ],
        "answer": "report",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-089",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 89,
    "word": "result",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Something that happens because of an action or decision.",
    "example": "Saving regularly can result in having more money for future needs.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 90,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'result' mean?",
        "options": [
          "Something that happens because of an action or decision.",
          "A good or useful feature that makes one choice better than another.",
          "Another choice that you can use or choose instead.",
          "Happening often or at fixed times."
        ],
        "answer": "Something that happens because of an action or decision.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Saving regularly can ______ in having more money for future needs.",
        "options": [
          "result",
          "amount",
          "quality",
          "alternative"
        ],
        "answer": "result",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Something that happens because of an action or decision.",
        "options": [
          "result",
          "amount",
          "quality",
          "alternative"
        ],
        "answer": "result",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-090",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Spending",
    "number": 90,
    "word": "value",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "How useful or worthwhile something is compared with its price.",
    "example": "This bag offers good value because it is strong and affordable.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 91,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'value' mean?",
        "options": [
          "How useful or worthwhile something is compared with its price.",
          "A quantity of money or something else.",
          "A good or useful feature that makes one choice better than another.",
          "The activity of buying, selling or providing goods and services."
        ],
        "answer": "How useful or worthwhile something is compared with its price.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "This bag offers good ______ because it is strong and affordable.",
        "options": [
          "value",
          "alternative",
          "condition",
          "experience"
        ],
        "answer": "value",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: How useful or worthwhile something is compared with its price.",
        "options": [
          "value",
          "alternative",
          "condition",
          "experience"
        ],
        "answer": "value",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-091",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Rights & Safety",
    "number": 91,
    "word": "protect",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To keep someone or something safe from harm, loss or damage.",
    "example": "Strong passwords help protect your payment information.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 92,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'protect' mean?",
        "options": [
          "To keep someone or something safe from harm, loss or damage.",
          "Needed for a particular purpose.",
          "To give information about a problem to someone responsible.",
          "A choice that you make after thinking about something."
        ],
        "answer": "To keep someone or something safe from harm, loss or damage.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Strong passwords help ______ your payment information.",
        "options": [
          "protect",
          "advertise",
          "support",
          "receive"
        ],
        "answer": "protect",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To keep someone or something safe from harm, loss or damage.",
        "options": [
          "protect",
          "advertise",
          "support",
          "receive"
        ],
        "answer": "protect",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-092",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Safety",
    "number": 92,
    "word": "public",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Open to or shared by everyone.",
    "example": "Do not enter banking information on a public computer.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 93,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'public' mean?",
        "options": [
          "Open to or shared by everyone.",
          "To get something that someone gives, sends or pays to you.",
          "A good or useful feature that makes one choice better than another.",
          "An amount out of every hundred, shown with the symbol %."
        ],
        "answer": "Open to or shared by everyone.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Do not enter banking information on a ______ computer.",
        "options": [
          "public",
          "local",
          "similar",
          "regular"
        ],
        "answer": "public",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Open to or shared by everyone.",
        "options": [
          "public",
          "local",
          "similar",
          "regular"
        ],
        "answer": "public",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-093",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Saving & Financial Habits",
    "number": 93,
    "word": "regular",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Happening often or at fixed times.",
    "example": "Regular saving can help you reach a financial goal.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 94,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'regular' mean?",
        "options": [
          "Happening often or at fixed times.",
          "To help a person, group or activity to succeed.",
          "To keep someone or something safe from harm, loss or damage.",
          "To get something that someone gives, sends or pays to you."
        ],
        "answer": "Happening often or at fixed times.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "______ saving can help you reach a financial goal.",
        "options": [
          "regular",
          "popular",
          "possible",
          "unusual"
        ],
        "answer": "regular",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Happening often or at fixed times.",
        "options": [
          "regular",
          "popular",
          "possible",
          "unusual"
        ],
        "answer": "regular",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-094",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Responsible Consumption",
    "number": 94,
    "word": "support",
    "partOfSpeech": "verb",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "To help a person, group or activity to succeed.",
    "example": "Buying from local sellers can support the community.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 95,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'support' mean?",
        "options": [
          "To help a person, group or activity to succeed.",
          "A choice that you make after thinking about something.",
          "Liked or chosen by many people.",
          "Belonging to or connected with the area where you live."
        ],
        "answer": "To help a person, group or activity to succeed.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Buying from local sellers can ______ the community.",
        "options": [
          "support",
          "protect",
          "advertise",
          "receive"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: To help a person, group or activity to succeed.",
        "options": [
          "support",
          "protect",
          "advertise",
          "receive"
        ],
        "answer": "support",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-095",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Safety",
    "number": 95,
    "word": "unusual",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Different from what is normal or expected.",
    "example": "An unusually low online price may be a warning sign.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 96,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'unusual' mean?",
        "options": [
          "Different from what is normal or expected.",
          "A small piece of information about something.",
          "How useful or worthwhile something is compared with its price.",
          "A good or useful feature that makes one choice better than another."
        ],
        "answer": "Different from what is normal or expected.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "The advertisement showed an ______ price.",
        "options": [
          "unusual",
          "necessary",
          "available",
          "regular"
        ],
        "answer": "unusual",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Different from what is normal or expected.",
        "options": [
          "unusual",
          "necessary",
          "available",
          "regular"
        ],
        "answer": "unusual",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-096",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Financial Planning",
    "number": 96,
    "word": "possible",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Able to happen or be done.",
    "example": "Save as much as possible before buying an expensive item.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 97,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'possible' mean?",
        "options": [
          "Able to happen or be done.",
          "Almost the same but not exactly the same.",
          "A good or useful feature that makes one choice better than another.",
          "The activity of buying, selling or providing goods and services."
        ],
        "answer": "Able to happen or be done.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Save as much as ______ before buying an expensive item.",
        "options": [
          "possible",
          "public",
          "necessary",
          "similar"
        ],
        "answer": "possible",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Able to happen or be done.",
        "options": [
          "possible",
          "public",
          "necessary",
          "similar"
        ],
        "answer": "possible",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-097",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Needs & Wants",
    "number": 97,
    "word": "necessary",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Needed for a particular purpose.",
    "example": "Ask whether a purchase is really necessary before spending money.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 98,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'necessary' mean?",
        "options": [
          "Needed for a particular purpose.",
          "How useful or worthwhile something is compared with its price.",
          "Something that happens because of an action or decision.",
          "To give information about a problem to someone responsible."
        ],
        "answer": "Needed for a particular purpose.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "Ask whether a purchase is really ______ before spending money.",
        "options": [
          "necessary",
          "local",
          "available",
          "similar"
        ],
        "answer": "necessary",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Needed for a particular purpose.",
        "options": [
          "necessary",
          "local",
          "available",
          "similar"
        ],
        "answer": "necessary",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-098",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Advertising & Influence",
    "number": 98,
    "word": "popular",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Liked or chosen by many people.",
    "example": "A popular product is not always the best value.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 99,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'popular' mean?",
        "options": [
          "Liked or chosen by many people.",
          "The activity of buying, selling or providing goods and services.",
          "A quantity of money or something else.",
          "Knowledge gained from doing, seeing or using something."
        ],
        "answer": "Liked or chosen by many people.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A ______ product is not always the best value.",
        "options": [
          "popular",
          "possible",
          "regular",
          "public"
        ],
        "answer": "popular",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Liked or chosen by many people.",
        "options": [
          "popular",
          "possible",
          "regular",
          "public"
        ],
        "answer": "popular",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-099",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Smart Shopping",
    "number": 99,
    "word": "similar",
    "partOfSpeech": "adjective",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Almost the same but not exactly the same.",
    "example": "These two products are similar, so I compared their prices.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 100,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'similar' mean?",
        "options": [
          "Almost the same but not exactly the same.",
          "How good or bad a product or service is.",
          "The activity of buying, selling or providing goods and services.",
          "A notice, picture or video that tries to persuade people to buy something."
        ],
        "answer": "Almost the same but not exactly the same.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "These two products are ______, so I compared their prices.",
        "options": [
          "similar",
          "available",
          "public",
          "regular"
        ],
        "answer": "similar",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Almost the same but not exactly the same.",
        "options": [
          "similar",
          "available",
          "public",
          "regular"
        ],
        "answer": "similar",
        "origin": "generated_from_wordbank"
      }
    ]
  },
  {
    "id": "CF-A2H-100",
    "themeCode": "CF",
    "theme": "Consumerism & Financial Awareness",
    "themeCategory": "Consumer Decisions",
    "number": 100,
    "word": "experience",
    "partOfSpeech": "noun",
    "cefrLevel": "A2 High",
    "sourceCefrLevel": "A2 High",
    "meaning": "Knowledge gained from doing, seeing or using something.",
    "example": "A customer's experience can help others decide whether to buy a product.",
    "bm": "",
    "sourceSheet": "Consumerism & financial awarene",
    "sourceRow": 101,
    "meaningOrigin": "source_workbook",
    "exampleOrigin": "source_workbook",
    "questions": [
      {
        "type": "meaning",
        "question": "What does 'experience' mean?",
        "options": [
          "Knowledge gained from doing, seeing or using something.",
          "Ready to be bought, used or obtained.",
          "Something that happens because of an action or decision.",
          "To give information about a problem to someone responsible."
        ],
        "answer": "Knowledge gained from doing, seeing or using something.",
        "origin": "generated_from_wordbank"
      },
      {
        "type": "context",
        "question": "A customer's ______ can help others decide whether to buy a product.",
        "options": [
          "experience",
          "value",
          "information",
          "business"
        ],
        "answer": "experience",
        "origin": "generated_from_wordbank_example"
      },
      {
        "type": "recognition",
        "question": "Which word means: Knowledge gained from doing, seeing or using something.",
        "options": [
          "experience",
          "value",
          "information",
          "business"
        ],
        "answer": "experience",
        "origin": "generated_from_wordbank"
      }
    ]
  }
];
window.lexitrekVocabularyLoaded = true;


console.log(
  "LexiTrek vocabulary loaded:",
  window.vocabularyBank.length,
  "words"
);
