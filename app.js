const PASS_THRESHOLD = 70;
const THEME_KEY = 'devassess-theme';

const CATEGORIES = [
  {
    id: 'dsa',
    code: 'DSA',
    title: 'Data Structures & Algorithms',
    description:
      'Complexity analysis, linear structures, trees, graphs and classic algorithm-design techniques.',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'oop',
    code: 'OOP',
    title: 'Object-Oriented Programming',
    description:
      'The four pillars, SOLID principles, inheritance vs. composition and compile-time vs. runtime polymorphism.',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'web-frontend',
    code: 'WEB',
    title: 'HTML, CSS & JavaScript',
    description:
      'Semantic markup, the box model, flexbox, scoping, events and modern browser APIs.',
    gradient: 'from-sky-500 to-cyan-500',
  },
  {
    id: 'mern',
    code: 'MERN',
    title: 'MERN Stack Development',
    description:
      'MongoDB, Express, React and Node.js - data modelling, REST APIs, hooks and production auth.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'aspnet',
    code: 'ASPX',
    title: 'ASP.NET Core & C#',
    description:
      'Middleware pipeline, dependency injection, routing, EF Core and modern C# language features.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 'logical',
    code: 'LOG',
    title: 'Logical Analysis & Puzzles',
    description:
      'Number series, syllogisms, spatial reasoning and coding puzzles with instant scoring.',
    gradient: 'from-amber-500 to-orange-500',
  },
];

const QUESTIONS = {
  dsa: [
    {
      id: 'dsa-01',
      topic: 'Complexity Analysis',
      difficulty: 'medium',
      question:
        'What is the worst-case time complexity of binary search on a sorted array of n elements?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 1,
      explanation:
        'Binary search halves the remaining interval after every comparison, so at most log2(n) comparisons are needed.',
    },
    {
      id: 'dsa-02',
      topic: 'Linear Data Structures',
      difficulty: 'easy',
      question: 'Which data structure follows the First-In-First-Out (FIFO) principle?',
      options: ['Stack', 'Queue', 'Heap', 'Binary search tree'],
      answer: 1,
      explanation:
        'A queue enqueues elements at the rear and dequeues from the front, so the first element in is the first out. A stack is LIFO.',
    },
    {
      id: 'dsa-03',
      topic: 'Sorting Algorithms',
      difficulty: 'medium',
      question: 'What is the worst-case time complexity of Quicksort?',
      options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)'],
      answer: 2,
      explanation:
        'When the pivot repeatedly leaves an empty partition (for example a sorted array with a first-element pivot), Quicksort degrades to O(n²).',
    },
    {
      id: 'dsa-04',
      topic: 'Trees',
      difficulty: 'easy',
      question:
        'Which traversal of a Binary Search Tree visits the keys in ascending sorted order?',
      options: ['Pre-order', 'Post-order', 'In-order', 'Level-order'],
      answer: 2,
      explanation:
        'In-order visits left subtree, then node, then right subtree. Because every BST node is greater than its left subtree and smaller than its right subtree, this yields sorted output.',
    },
    {
      id: 'dsa-05',
      topic: 'Caching & Hashing',
      difficulty: 'medium',
      question:
        'Which combination is commonly used to implement an LRU (Least Recently Used) cache with O(1) operations?',
      options: [
        'Two stacks and an array',
        'A hash map plus a doubly linked list',
        'A min-heap plus a stack',
        'A dynamic array with linear search',
      ],
      answer: 1,
      explanation:
        'The hash map provides O(1) key lookup while the doubly linked list maintains recency order, allowing O(1) promotion and eviction of the tail node.',
    },
    {
      id: 'dsa-06',
      topic: 'Graphs',
      difficulty: 'easy',
      question: 'Which graph traversal algorithm uses a queue to explore vertices level by level?',
      options: [
        'Depth-First Search',
        'Breadth-First Search',
        "Dijkstra's algorithm",
        'Topological sort',
      ],
      answer: 1,
      explanation:
        'Breadth-First Search enqueues a vertex when first discovered, so all vertices at distance k are visited before any vertex at distance k + 1.',
    },
    {
      id: 'dsa-07',
      topic: 'Divide & Conquer',
      difficulty: 'medium',
      question: 'What is the auxiliary space complexity of standard Merge Sort?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
      answer: 2,
      explanation:
        'Merging requires a temporary buffer holding all n elements. The recursion stack only accounts for O(log n), but the merge buffer dominates at O(n).',
    },
    {
      id: 'dsa-08',
      topic: 'Linked Lists',
      difficulty: 'easy',
      question:
        'Given only a reference to the head node, what is the time complexity of inserting a node at the head of a singly linked list?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
      answer: 0,
      explanation:
        'Head insertion only updates two pointers: the new node points to the current head and the head reference points to the new node.',
    },
    {
      id: 'dsa-09',
      topic: 'Data Structure Fundamentals',
      difficulty: 'easy',
      question: 'Which of the following is NOT a linear data structure?',
      options: ['Array', 'Stack', 'Linked list', 'Tree'],
      answer: 3,
      explanation:
        'Arrays, stacks and linked lists arrange elements in a sequential, linear order. A tree arranges elements in a hierarchy of parents and children, making it non-linear.',
    },
    {
      id: 'dsa-10',
      topic: 'Algorithm Design',
      difficulty: 'hard',
      question:
        'Which technique applies when a problem exhibits both overlapping subproblems and optimal substructure?',
      options: ['Greedy algorithms', 'Dynamic programming', 'Brute force', 'Backtracking'],
      answer: 1,
      explanation:
        'Dynamic programming solves each overlapping subproblem once and memoises the result, which is valid precisely when optimal solutions are built from optimal sub-solutions.',
    },
  ],
  oop: [
    {
      id: 'oop-01',
      topic: 'The Four Pillars',
      difficulty: 'easy',
      question:
        'Which OOP pillar describes bundling data and the methods that operate on it while hiding internal state behind a public interface?',
      options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
      answer: 2,
      explanation:
        'Encapsulation groups state and behaviour in one unit and restricts direct access to internal fields, exposing only controlled public methods.',
    },
    {
      id: 'oop-02',
      topic: 'Inheritance',
      difficulty: 'easy',
      question:
        'Which feature allows a subclass to provide a specific implementation of a method already defined in its parent class?',
      options: ['Method overloading', 'Method overriding', 'Composition', 'Aggregation'],
      answer: 1,
      explanation:
        'Overriding replaces the inherited implementation in the subclass and is resolved at runtime. Overloading instead adds several signatures of the same name.',
    },
    {
      id: 'oop-03',
      topic: 'Polymorphism',
      difficulty: 'medium',
      question:
        'A class defines calculate(int, int) and calculate(double, double). Which concept does this demonstrate?',
      options: [
        'Method overriding',
        'Method overloading',
        'Multiple inheritance',
        'Information hiding',
      ],
      answer: 1,
      explanation:
        'The same method name with different parameter lists in the same class is overloading (compile-time polymorphism).',
    },
    {
      id: 'oop-04',
      topic: 'Polymorphism',
      difficulty: 'medium',
      question: 'Which form of polymorphism is decided at compile time rather than at runtime?',
      options: [
        'Dynamic dispatch of virtual methods',
        'Runtime method overriding',
        'Method overloading',
        'Duck typing through interfaces',
      ],
      answer: 2,
      explanation:
        'Overloading resolution happens during compilation because the compiler can pick the correct signature from the static argument types. Runtime polymorphism requires dynamic dispatch.',
    },
    {
      id: 'oop-05',
      topic: 'Abstraction',
      difficulty: 'easy',
      question: 'Which keyword prevents a class from being instantiated directly?',
      options: ['static', 'final', 'abstract', 'private'],
      answer: 2,
      explanation:
        'An abstract class cannot be instantiated; it can only be subclassed, and any abstract methods it declares must be implemented by those subclasses.',
    },
    {
      id: 'oop-06',
      topic: 'SOLID',
      difficulty: 'medium',
      question:
        'Which SOLID principle states that a class should have only one reason to change?',
      options: [
        'Open/Closed Principle',
        'Liskov Substitution Principle',
        'Interface Segregation Principle',
        'Single Responsibility Principle',
      ],
      answer: 3,
      explanation:
        'The Single Responsibility Principle keeps one axis of change per class, which keeps modules small, testable and easy to refactor safely.',
    },
    {
      id: 'oop-07',
      topic: 'SOLID',
      difficulty: 'hard',
      question:
        'Which design guideline is summarised by the phrase "favour object composition over class inheritance"?',
      options: [
        'The Dependency Inversion Principle',
        'Composition over inheritance',
        'The Interface Segregation Principle',
        'The Open/Closed Principle',
      ],
      answer: 1,
      explanation:
        'Composition assembles objects from collaborating parts, avoiding the tight coupling and fragile base-class problems that deep inheritance hierarchies create.',
    },
    {
      id: 'oop-08',
      topic: 'Polymorphism',
      difficulty: 'medium',
      question:
        'A reference of base type calls a method that is redefined by the actual object at runtime. What is this called?',
      options: [
        'Static binding',
        'Dynamic dispatch (late binding)',
        'Operator overloading',
        'Method hiding',
      ],
      answer: 1,
      explanation:
        'The virtual method table (or equivalent) resolves the call from the concrete runtime type, which is dynamic dispatch - the mechanism behind runtime polymorphism.',
    },
    {
      id: 'oop-09',
      topic: 'The Four Pillars',
      difficulty: 'medium',
      question:
        'Which OOP concept means exposing only the essential details of a system while hiding the implementation?',
      options: ['Abstraction', 'Encapsulation', 'Coupling', 'Cohesion'],
      answer: 0,
      explanation:
        'Abstraction focuses on WHAT an object does (public contract), while encapsulation focuses on HOW the state is protected internally. They are related but distinct.',
    },
    {
      id: 'oop-10',
      topic: 'Inheritance',
      difficulty: 'medium',
      question:
        'In Java and C#, a class can extend only one base class but can implement multiple what?',
      options: ['Constructors', 'Interfaces', 'Abstract classes', 'Static blocks'],
      answer: 1,
      explanation:
        'Languages without class-level multiple inheritance use interfaces to gain multiple contract inheritance while keeping a single class hierarchy.',
    },
  ],
  'web-frontend': [
    {
      id: 'web-01',
      topic: 'Semantic HTML',
      difficulty: 'easy',
      question:
        'Which HTML5 element represents the dominant, unique content of a document, excluding headers, footers and sidebars?',
      options: ['<div>', '<main>', '<article>', '<span>'],
      answer: 1,
      explanation:
        '<main> marks the primary content of the page. Exactly one <main> is allowed per document, and it improves screen-reader navigation and SEO.',
    },
    {
      id: 'web-02',
      topic: 'CSS Box Model',
      difficulty: 'easy',
      question: "With box-sizing: border-box, how is an element's declared width interpreted?",
      options: [
        'Content width only; padding and border add to it',
        'Content plus padding plus border fit inside the declared width',
        'Content plus margin fit inside the declared width',
        'The declared width applies only to the border box',
      ],
      answer: 1,
      explanation:
        'border-box makes padding and border part of the declared width, so a width: 300px element with 20px padding still occupies exactly 300px.',
    },
    {
      id: 'web-03',
      topic: 'JavaScript Fundamentals',
      difficulty: 'easy',
      question: 'What is the key difference between == and === in JavaScript?',
      options: [
        '=== compares values only, == also compares references',
        '== compares values with type coercion, === compares values without coercion',
        'They are identical; === is only a stylistic alias',
        '=== throws on mismatched types, == returns false',
      ],
      answer: 1,
      explanation:
        '== performs coercive comparison ("" == 0 is true), while === requires identical type and value, which prevents subtle coercion bugs.',
    },
    {
      id: 'web-04',
      topic: 'JavaScript Fundamentals',
      difficulty: 'easy',
      question: 'What is the block scope of a variable declared with let?',
      options: ['Function scope', 'Global scope', 'Block scope', 'File scope'],
      answer: 2,
      explanation:
        'let is scoped to the nearest enclosing { } block. Unlike var, it is not hoisted to function scope and cannot be redeclared in the same block.',
    },
    {
      id: 'web-05',
      topic: 'CSS Layout',
      difficulty: 'medium',
      question: 'On a flex container, which property distributes space along the main axis?',
      options: ['align-items', 'justify-content', 'align-content', 'place-self'],
      answer: 1,
      explanation:
        'justify-content works on the main axis (start/end/space-between/center), while align-items positions items on the cross axis.',
    },
    {
      id: 'web-06',
      topic: 'JavaScript in the Browser',
      difficulty: 'medium',
      question: 'Which method stops an event from bubbling further up the DOM tree?',
      options: [
        'event.preventDefault()',
        'event.stopPropagation()',
        'event.stopImmediatePropagation() only',
        'returning false from the handler',
      ],
      answer: 1,
      explanation:
        'stopPropagation() halts bubbling. preventDefault() cancels the default browser action (like following a link) but does not stop propagation.',
    },
    {
      id: 'web-07',
      topic: 'CSS Specificity',
      difficulty: 'medium',
      question: 'Which selector has the highest specificity?',
      options: [
        'A class selector such as .card',
        'An element selector such as p',
        'An inline style attribute such as style="color:red"',
        'A universal selector such as *',
      ],
      answer: 2,
      explanation:
        'Specificity ranks inline styles above IDs, classes and elements. The universal selector contributes zero specificity.',
    },
    {
      id: 'web-08',
      topic: 'Browser APIs',
      difficulty: 'easy',
      question:
        'Which Web API stores string key-value pairs persistently in the browser, even after the tab is closed?',
      options: ['sessionStorage', 'localStorage', 'Cookies only', 'IndexedDB cache API'],
      answer: 1,
      explanation:
        'localStorage persists until explicitly cleared, has roughly a 5 MB quota and is not sent with HTTP requests, unlike cookies.',
    },
    {
      id: 'web-09',
      topic: 'Accessibility',
      difficulty: 'easy',
      question:
        'Which attribute on <img> is essential for screen-reader users and broken-image fallbacks?',
      options: ['title', 'alt', 'aria-label only', 'data-desc'],
      answer: 1,
      explanation:
        "alt text conveys the image's meaning (or an empty alt='' for decorative images) and is required for WCAG conformance.",
    },
    {
      id: 'web-10',
      topic: 'Responsive Design',
      difficulty: 'medium',
      question: 'What is the primary purpose of a CSS media query?',
      options: [
        'To import a stylesheet conditionally at runtime',
        'To apply styles conditionally based on device or viewport characteristics',
        'To query the DOM for matching elements',
        'To resize images automatically on high-DPI screens',
      ],
      answer: 1,
      explanation:
        '@media rules let a stylesheet activate only when conditions such as min-width, prefers-color-scheme or orientation match, which is the foundation of responsive layouts.',
    },
  ],
  mern: [
    {
      id: 'mern-01',
      topic: 'Stack Fundamentals',
      difficulty: 'easy',
      question: 'What does the acronym MERN stand for?',
      options: [
        'MongoDB, Express, React, Node.js',
        'MySQL, Ember, Redux, nginx',
        'MongoDB, EJS, Rust, Node.js',
        'MariaDB, Express, React, .NET',
      ],
      answer: 0,
      explanation:
        'MERN is MongoDB (document database), Express (HTTP framework), React (UI library) and Node.js (JavaScript runtime).',
    },
    {
      id: 'mern-02',
      topic: 'MongoDB',
      difficulty: 'easy',
      question: 'Which format does MongoDB use to store documents on disk?',
      options: ['Plain XML', 'BSON (Binary JSON)', 'CSV', 'Protocol Buffers'],
      answer: 1,
      explanation:
        'MongoDB stores BSON, a binary-encoded JSON variant that adds types such as ObjectId, Date, Decimal128 and indexed binary data.',
    },
    {
      id: 'mern-03',
      topic: 'React',
      difficulty: 'easy',
      question: 'In React, what are props used for?',
      options: [
        'Mutating a parent component from a child',
        'Passing read-only data from a parent to a child',
        'Storing component-local mutable state',
        'Registering global event listeners',
      ],
      answer: 1,
      explanation:
        'Props flow one way (parent to child) and are treated as read-only, which keeps data flow predictable and easier to debug.',
    },
    {
      id: 'mern-04',
      topic: 'React',
      difficulty: 'medium',
      question: 'Which React hook runs side effects after a component renders?',
      options: ['useMemo', 'useCallback', 'useEffect', 'useReducer'],
      answer: 2,
      explanation:
        'useEffect schedules work (fetching, subscriptions, timers) after paint and its dependency array decides when it re-runs.',
    },
    {
      id: 'mern-05',
      topic: 'Express',
      difficulty: 'medium',
      question: 'What is an Express middleware function?',
      options: [
        'A function that executes during the request-response cycle and can modify req/res or end the response',
        'A function that only runs before the server boots',
        'A database migration utility',
        'A React higher-order component',
      ],
      answer: 0,
      explanation:
        'Middleware runs in a chain for every request, enabling logging, authentication, body parsing, error handling and more before a route responds.',
    },
    {
      id: 'mern-06',
      topic: 'MongoDB',
      difficulty: 'medium',
      question: 'In Mongoose, what does a Model get compiled from?',
      options: ['A JSON file', 'A Schema', 'A TypeScript interface', 'A REST route'],
      answer: 1,
      explanation:
        'You define a Schema (structure, validation, defaults, hooks) and Mongoose compiles it into a Model that exposes CRUD operations on a collection.',
    },
    {
      id: 'mern-07',
      topic: 'REST API Design',
      difficulty: 'easy',
      question:
        'Which HTTP status code should a REST API return when it successfully creates a resource?',
      options: ['200 OK', '201 Created', '204 No Content', '302 Found'],
      answer: 1,
      explanation:
        '201 Created signals a new resource and conventionally includes a Location header pointing at the created entity.',
    },
    {
      id: 'mern-08',
      topic: 'React',
      difficulty: 'medium',
      question: 'Why does React require a stable, unique key prop when rendering list items?',
      options: [
        'Keys set CSS z-index ordering in the DOM',
        'Keys let React match items across renders so it can update efficiently instead of re-rendering the whole list',
        'Keys are only required for accessibility compliance',
        'Keys enforce TypeScript types at runtime',
      ],
      answer: 1,
      explanation:
        'Without stable keys React falls back to index-based reconciliation, which can reorder state incorrectly and force unnecessary DOM work.',
    },
    {
      id: 'mern-09',
      topic: 'Security',
      difficulty: 'medium',
      question:
        'In a production MERN application, where should the secret used to sign JSON Web Tokens be stored?',
      options: [
        'In a constant inside the React bundle',
        'In a public repository for reproducible builds',
        'In a server-side environment variable or secret manager',
        'In localStorage so the client can verify tokens',
      ],
      answer: 2,
      explanation:
        'Anything shipped to the browser is public. The signing secret must live only on the server, ideally injected through a secret manager or environment variable.',
    },
    {
      id: 'mern-10',
      topic: 'React',
      difficulty: 'medium',
      question: 'What problem does the React Virtual DOM solve?',
      options: [
        'It replaces the browser DOM entirely for better performance',
        'It computes a minimal set of real DOM updates by diffing an in-memory representation',
        'It prevents all re-renders caused by parent components',
        'It caches network responses for offline mode',
      ],
      answer: 1,
      explanation:
        'React renders a lightweight tree, diffs it against the previous one and applies only the changed nodes to the real DOM, which is far cheaper than re-rendering everything.',
    },
  ],
  aspnet: [
    {
      id: 'aspnet-01',
      topic: 'Request Pipeline',
      difficulty: 'easy',
      question:
        'What is the primary building block of the ASP.NET Core request pipeline that processes HTTP requests in sequence?',
      options: ['Servlet filters', 'Middleware components', 'Action filters only', 'gRPC interceptors'],
      answer: 1,
      explanation:
        'Middleware components run in the order they are registered in Program.cs, each able to short-circuit the request or pass it to the next component.',
    },
    {
      id: 'aspnet-02',
      topic: 'MVC & Web API',
      difficulty: 'easy',
      question: 'What does the IActionResult return type represent in a controller action?',
      options: [
        'A serialised JSON payload only',
        'An abstraction that lets an action return different results (Ok, NotFound, BadRequest, View...)',
        'A dependency-injection container registration',
        'The raw HTTP response stream',
      ],
      answer: 1,
      explanation:
        'IActionResult decouples "what to return" from "how to render it", so the framework picks the correct status code and formatter at execution time.',
    },
    {
      id: 'aspnet-03',
      topic: 'Routing',
      difficulty: 'easy',
      question:
        'Which attribute maps an ASP.NET Core controller action to the HTTP GET verb, optionally with a route template?',
      options: ['[HttpGet]', '[RouteGet]', '[MapGet]', '[ActionGet]'],
      answer: 0,
      explanation:
        '[HttpGet("api/questions")] declares both verb and route template. Convention-based and attribute routing can be combined in one application.',
    },
    {
      id: 'aspnet-04',
      topic: 'Entity Framework Core',
      difficulty: 'medium',
      question: 'What category of tool is Entity Framework Core?',
      options: [
        'An object-relational mapper (ORM)',
        'A NoSQL document database',
        'A message queue',
        'A front-end bundler',
      ],
      answer: 0,
      explanation:
        'EF Core maps CLR classes to relational tables, supports LINQ queries, change tracking, migrations and multiple relational database providers.',
    },
    {
      id: 'aspnet-05',
      topic: 'Configuration',
      difficulty: 'easy',
      question:
        'Which file is the conventional source of application settings such as connection strings in ASP.NET Core?',
      options: ['web.config only', 'appsettings.json', 'Global.asax', 'packages.config'],
      answer: 1,
      explanation:
        'appsettings.json (optionally per-environment variants like appsettings.Production.json) is read through the IConfiguration system and can be overridden by environment variables.',
    },
    {
      id: 'aspnet-06',
      topic: 'Dependency Injection',
      difficulty: 'medium',
      question: 'What is the lifetime of a service registered with AddScoped in ASP.NET Core?',
      options: [
        'One instance per process (singleton)',
        'One instance per HTTP request',
        'One instance per transient resolution',
        'One instance per application pool recycle only',
      ],
      answer: 1,
      explanation:
        'Scoped services are created once per request and disposed when the request ends - the correct choice for Unit-of-Work style DbContext usage.',
    },
    {
      id: 'aspnet-07',
      topic: 'C# Language',
      difficulty: 'medium',
      question: 'Which C# access modifier limits visibility of a type to the current assembly only?',
      options: ['public', 'protected', 'private', 'internal'],
      answer: 3,
      explanation:
        'internal is assembly-scoped. It is the default modifier for C# types and is ideal for implementation details not meant for external consumers.',
    },
    {
      id: 'aspnet-08',
      topic: 'Async Programming',
      difficulty: 'medium',
      question:
        'Which return type is idiomatic for an asynchronous ASP.NET Core API action that may perform I/O?',
      options: ['void', 'Task<IActionResult>', 'IAsyncResult', 'IEnumerator'],
      answer: 1,
      explanation:
        'Returning Task<IActionResult> frees the thread pool thread while I/O completes, letting the server keep handling other requests - essential under load.',
    },
    {
      id: 'aspnet-09',
      topic: 'MVC & Web API',
      difficulty: 'easy',
      question: 'Which helper method does a controller call to return an HTTP 404 response?',
      options: ['Ok()', 'Created()', 'NotFound()', 'NoContent()'],
      answer: 2,
      explanation:
        'NotFound() produces a 404 result; Ok() returns 200, Created() returns 201 with a Location header, and NoContent() returns 204.',
    },
    {
      id: 'aspnet-10',
      topic: 'Model Validation',
      difficulty: 'hard',
      question:
        'What does the [ApiController] attribute automatically add to an ASP.NET Core Web API controller?',
      options: [
        'Automatic model-state validation that returns 400 with a ProblemDetails payload',
        'Automatic HTTPS redirection for every action',
        'Automatic response caching for GET actions',
        'Automatic OpenAPI authentication',
      ],
      answer: 0,
      explanation:
        '[ApiController] enables inferred binding sources and short-circuits invalid model state with a 400 + ProblemDetails response before the action body runs.',
    },
  ],
  logical: [
    {
      id: 'log-01',
      topic: 'Number Series',
      difficulty: 'medium',
      question: 'What comes next in the series: 2, 6, 12, 20, 30, ... ?',
      options: ['36', '40', '42', '44'],
      answer: 2,
      explanation:
        'The terms are n(n+1): 1x2, 2x3, 3x4, 4x5, 5x6. The next term is 6x7 = 42 (equivalently, differences grow as 4, 6, 8, 10, 12).',
    },
    {
      id: 'log-02',
      topic: 'Number Series',
      difficulty: 'easy',
      question: 'What comes next in the series: 1, 1, 2, 3, 5, 8, ... ?',
      options: ['11', '12', '13', '15'],
      answer: 2,
      explanation: 'Each term is the sum of the two preceding terms (Fibonacci). 5 + 8 = 13.',
    },
    {
      id: 'log-03',
      topic: 'Pattern Recognition',
      difficulty: 'easy',
      question: 'Complete the pattern: AZ, BY, CX, ... ?',
      options: ['DV', 'DW', 'EW', 'DX'],
      answer: 1,
      explanation:
        'The first letters descend from the end of the alphabet (Z, Y, X, W) while the second letters ascend from the start (A, B, C, D): DW.',
    },
    {
      id: 'log-04',
      topic: 'Age Problems',
      difficulty: 'medium',
      question:
        'A father is currently 3 times as old as his son. In 15 years he will be twice as old as his son. How old is the son now?',
      options: ['10 years', '12 years', '15 years', '18 years'],
      answer: 2,
      explanation:
        "Let the son's age be s and the father's 3s. Then 3s + 15 = 2(s + 15), giving 3s + 15 = 2s + 30, so s = 15.",
    },
    {
      id: 'log-05',
      topic: 'Spatial Reasoning',
      difficulty: 'easy',
      question:
        'You walk 5 km north, then 3 km east, then 5 km south. Where are you relative to your starting point?',
      options: ['At the starting point', '3 km east', '3 km west', '10 km north'],
      answer: 1,
      explanation:
        'The 5 km north and 5 km south cancel out, leaving only the 3 km eastward displacement.',
    },
    {
      id: 'log-06',
      topic: 'Syllogisms',
      difficulty: 'medium',
      question:
        'Statements: (1) All bloops are razzies. (2) All razzies are pings. Which conclusion must be true?',
      options: [
        'All pings are bloops',
        'All bloops are pings',
        'Some razzies are not pings',
        'No bloops are pings',
      ],
      answer: 1,
      explanation:
        'The predicates chain: bloops are a subset of razzies, and razzies are a subset of pings, so bloops must be a subset of pings. The converse need not hold.',
    },
    {
      id: 'log-07',
      topic: 'Classification',
      difficulty: 'easy',
      question: 'Which of these is NOT an alloy?',
      options: ['Brass', 'Bronze', 'Steel', 'Iron'],
      answer: 3,
      explanation:
        'Brass (copper + zinc), bronze (copper + tin) and steel (iron + carbon) are all alloys. Iron is a pure metallic element.',
    },
    {
      id: 'log-08',
      topic: 'Work & Rate',
      difficulty: 'medium',
      question:
        'If 5 machines take 5 minutes to make 5 widgets, how long do 100 machines take to make 100 widgets?',
      options: ['5 minutes', '100 minutes', '20 minutes', '1 minute'],
      answer: 0,
      explanation:
        'Each machine produces 1 widget in 5 minutes. 100 machines therefore produce 100 widgets in the same 5 minutes.',
    },
    {
      id: 'log-09',
      topic: 'Coding-Decoding',
      difficulty: 'medium',
      question:
        'In a certain code, letters are replaced by their position in the alphabet (A=1, B=2 ... Z=26) and concatenated. How is DOG coded?',
      options: ['4157', '4175', '4517', '40-15-07'],
      answer: 0,
      explanation: 'D = 4, O = 15, G = 7, so the concatenated code is 4157.',
    },
    {
      id: 'log-10',
      topic: 'Time & Clocks',
      difficulty: 'hard',
      question:
        'A faulty clock gains exactly 5 minutes every 24 hours. It is set correctly at noon. What is the real time when the clock first shows 12:00 noon again?',
      options: ['11:55 AM', '12:05 PM', '11:55 PM', '12:00 noon (no change)'],
      answer: 0,
      explanation:
        'After 24 real hours the clock has advanced 24h + 5min, so it shows 12:05 while real time is noon. It reaches 12:00 five minutes early - at 11:55 AM real time.',
    },
  ],
};

const CODE_FILES = [
  'index.html',
  'style.custom.css',
  'app.js',
  'README.md',
  'docs/Technical_Report.md',
];

const DIFFICULTY_CLASSES = {
  easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  hard: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
};

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

const state = {
  categoryId: null,
  index: 0,
  answers: {},
  results: {},
  submitted: null,
  reportLoaded: false,
  activeCodeFile: 'index.html',
  activeCodeText: '',
};

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCategory(id) {
  return CATEGORIES.find((category) => category.id === id) || null;
}

function answeredCount() {
  return Object.keys(state.results).length;
}

function correctCount() {
  return Object.values(state.results).filter((entry) => entry.correct).length;
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  window.localStorage.setItem(THEME_KEY, theme);
  document.getElementById('theme-toggle').innerHTML =
    theme === 'dark'
      ? '<svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path stroke-linecap="round" d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></svg>'
      : '<svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>';
}

function categoryCard(cat) {
  const total = QUESTIONS[cat.id].length;
  return `
    <a href="#/quiz/${cat.id}" class="group card relative flex flex-col overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-lg hover:shadow-brand-500/10">
      <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${cat.gradient}"></div>
      <div class="flex items-start justify-between gap-3">
        <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-[11px] font-black tracking-tight text-white shadow-md">${cat.code}</span>
        <span class="chip">${total} questions</span>
      </div>
      <h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">${esc(cat.title)}</h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">${esc(cat.description)}</p>
      <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
        Start quiz
        <svg class="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a1 1 0 0 1 1-1h10.6l-3.3-3.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H4a1 1 0 0 1-1-1Z" clip-rule="evenodd"/></svg>
      </span>
    </a>`;
}

function categorySelectMarkup() {
  return `
    <div class="max-w-2xl">
      <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Choose a quiz track</h1>
      <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        Each track contains multiple-choice questions with instant scoring and written explanations. Score ${PASS_THRESHOLD}% or more to pass.
      </p>
    </div>
    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      ${CATEGORIES.map(categoryCard).join('')}
    </div>`;
}

function notFoundMarkup() {
  return `
    <div class="mx-auto max-w-lg card p-8 text-center">
      <p class="font-mono text-sm font-bold text-rose-500">404</p>
      <h1 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">Unknown quiz category</h1>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">This track does not exist in the question bank.</p>
      <a href="#/quiz" class="btn btn-primary mt-6">All categories</a>
    </div>`;
}

function questionMarkup(cat) {
  const questions = QUESTIONS[cat.id];
  const question = questions[state.index];
  const result = state.results[question.id];
  const selected = state.answers[question.id];
  const answered = answeredCount();
  const isLast = state.index === questions.length - 1;
  const allAnswered = answered === questions.length;
  const progress = Math.round((answered / questions.length) * 100);

  const options = question.options
    .map((option, index) => {
      const isSelected = selected === index;
      const isCorrectAnswer = Boolean(result) && index === result.correctIndex;
      const isWrongPick = Boolean(result) && isSelected && !result.correct;
      let classes =
        'flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-default ';

      if (!result) {
        classes += isSelected
          ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-500 dark:bg-brand-500/10 dark:text-brand-300'
          : 'border-slate-200 bg-white text-slate-700 hover:border-brand-400 hover:bg-brand-50/60 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800/70';
      } else if (isCorrectAnswer) {
        classes +=
          'border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500 dark:bg-emerald-500/10 dark:text-emerald-300';
      } else if (isWrongPick) {
        classes +=
          'border-rose-500 bg-rose-50 text-rose-800 ring-1 ring-rose-500 dark:bg-rose-500/10 dark:text-rose-300';
      } else {
        classes +=
          'border-slate-200 bg-white text-slate-400 opacity-75 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-500';
      }

      const badge = isCorrectAnswer
        ? '<svg class="h-5 w-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z" clip-rule="evenodd"/></svg>'
        : isWrongPick
          ? '<svg class="h-5 w-5 text-rose-600 dark:text-rose-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4Z"/></svg>'
          : '';

      return `
        <button type="button" class="${classes}" ${result ? 'disabled' : ''} aria-pressed="${isSelected}" onclick="selectAnswer(${index})">
          <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-300 font-mono text-xs font-bold dark:border-slate-600">${LETTERS[index]}</span>
          <span class="flex-1">${esc(option)}</span>
          ${badge}
        </button>`;
    })
    .join('');

  let feedback = '';
  if (result) {
    feedback = `
      <div class="mt-5 rounded-xl border p-4 ${
        result.correct
          ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10'
          : 'border-rose-200 bg-rose-50 dark:border-rose-500/30 dark:bg-rose-500/10'
      }">
        <p class="flex items-center gap-2 text-sm font-bold ${
          result.correct
            ? 'text-emerald-700 dark:text-emerald-300'
            : 'text-rose-700 dark:text-rose-300'
        }">
          ${result.correct ? '&#10003;' : '&#10007;'} ${result.correct ? 'Correct' : 'Incorrect'}
          <span class="ml-auto text-xs font-semibold opacity-70">+${result.points} pt</span>
        </p>
        ${
          result.correct
            ? ''
            : `<p class="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Correct answer: <strong>${LETTERS[result.correctIndex]}. ${esc(question.options[result.correctIndex])}</strong>
              </p>`
        }
        <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">${esc(result.explanation)}</p>
      </div>`;
  }

  return `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-[11px] font-black text-white shadow">${cat.code}</span>
        <div>
          <h1 class="text-base font-bold text-slate-900 dark:text-white">${esc(cat.title)}</h1>
          <p class="text-xs text-slate-500 dark:text-slate-400">Instant scoring &middot; pass mark ${PASS_THRESHOLD}%</p>
        </div>
      </div>
      <a href="#/quiz" class="btn btn-ghost text-xs">&larr; All categories</a>
    </div>

    <div class="mt-6">
      <div class="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>Progress: ${answered}/${questions.length} answered</span>
        <span>Correct: ${correctCount()}/${answered || 0}</span>
      </div>
      <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div class="h-full rounded-full bg-gradient-to-r ${cat.gradient} transition-all duration-500" style="width: ${progress}%"></div>
      </div>
    </div>

    <article class="card mt-6 overflow-hidden animate-fade-up">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-4 dark:border-slate-800">
        <div class="flex items-center gap-3">
          <span class="font-mono text-xs font-bold text-slate-400 dark:text-slate-500">Q${state.index + 1}/${questions.length}</span>
          <span class="chip">${esc(question.topic)}</span>
        </div>
        <span class="rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${DIFFICULTY_CLASSES[question.difficulty] || DIFFICULTY_CLASSES.medium}">${question.difficulty}</span>
      </div>
      <div class="px-6 py-6">
        <h2 class="text-lg font-semibold leading-relaxed text-slate-900 dark:text-white">${esc(question.question)}</h2>
        <div class="mt-5 space-y-2.5">${options}</div>
        ${feedback}
      </div>
    </article>

    <div class="mt-6 flex items-center justify-between gap-3">
      <button type="button" class="btn btn-secondary" onclick="prevQuestion()" ${state.index === 0 ? 'disabled' : ''}>
        &larr; Previous
      </button>
      ${
        isLast
          ? `<button type="button" class="btn btn-primary" onclick="finishQuiz()" ${allAnswered ? '' : 'disabled'}>View results &rarr;</button>`
          : `<button type="button" class="btn btn-primary" onclick="nextQuestion()" ${result ? '' : 'disabled'}>Next question &rarr;</button>`
      }
    </div>`;
}

function resultsMarkup(cat, result) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (result.percentage / 100) * circumference;
  const incorrect = result.total - result.score - result.unanswered.length;

  const review = result.breakdown
    .map(
      (entry, position) => `
      <li class="card overflow-hidden">
        <div class="flex items-start gap-3 px-5 py-4">
          <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
            entry.correct
              ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400'
              : 'bg-rose-100 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400'
          }">${entry.correct ? '&#10003;' : '&#10007;'}</span>
          <div class="min-w-0 flex-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-mono text-xs font-bold text-slate-400">Q${position + 1}</span>
              <span class="chip">${esc(entry.topic)}</span>
            </div>
            <p class="mt-2 text-sm font-semibold leading-relaxed text-slate-900 dark:text-white">${esc(entry.question)}</p>
            <div class="mt-3 space-y-1.5 text-sm">
              <p class="${entry.correct ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}">
                Your answer: <strong>${
                  entry.selected === null
                    ? 'Not answered'
                    : `${LETTERS[entry.selected]}. ${esc(entry.options[entry.selected])}`
                }</strong>
              </p>
              ${
                entry.correct
                  ? ''
                  : `<p class="text-emerald-600 dark:text-emerald-400">
                      Correct answer: <strong>${LETTERS[entry.correctIndex]}. ${esc(entry.options[entry.correctIndex])}</strong>
                    </p>`
              }
              <p class="leading-relaxed text-slate-500 dark:text-slate-400">${esc(entry.explanation)}</p>
            </div>
          </div>
        </div>
      </li>`,
    )
    .join('');

  return `
    <section class="card mx-auto max-w-3xl overflow-hidden animate-fade-up">
      <div class="h-1.5 bg-gradient-to-r ${cat.gradient}"></div>
      <div class="flex flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:px-8">
        <div class="relative h-40 w-40 shrink-0">
          <svg viewBox="0 0 140 140" class="h-full w-full -rotate-90">
            <circle cx="70" cy="70" r="${radius}" class="fill-none stroke-slate-200 dark:stroke-slate-800" stroke-width="12"/>
            <circle cx="70" cy="70" r="${radius}" class="fill-none transition-all duration-1000 ${
              result.passed ? 'stroke-emerald-500' : 'stroke-rose-500'
            }" stroke-width="12" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
          </svg>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <span class="text-4xl font-black text-slate-900 dark:text-white">${Math.round(result.percentage)}%</span>
            <span class="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">score</span>
          </div>
        </div>
        <div class="flex-1 text-center sm:text-left">
          <span class="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            result.passed
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
              : 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300'
          }">${result.passed ? 'Passed' : 'Not passed'}</span>
          <h1 class="mt-3 text-2xl font-black tracking-tight text-slate-900 dark:text-white">${esc(cat.title)}</h1>
          <p class="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            You answered <strong class="text-slate-700 dark:text-slate-200">${result.score} of ${result.total}</strong>
            questions correctly. Passing score is ${result.threshold}%.
          </p>
          <div class="mt-5 grid grid-cols-3 gap-2 text-center">
            <div class="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
              <p class="text-lg font-black text-emerald-600 dark:text-emerald-400">${result.score}</p>
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Correct</p>
            </div>
            <div class="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
              <p class="text-lg font-black text-rose-600 dark:text-rose-400">${incorrect}</p>
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Incorrect</p>
            </div>
            <div class="rounded-xl bg-slate-100 px-2 py-3 dark:bg-slate-800">
              <p class="text-lg font-black text-slate-500 dark:text-slate-400">${result.unanswered.length}</p>
              <p class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Skipped</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-3 border-t border-slate-200 px-6 py-5 dark:border-slate-800 sm:px-8">
        <button type="button" class="btn btn-primary" onclick="retakeQuiz()">Retake quiz</button>
        <a href="#/quiz" class="btn btn-secondary">&larr; Choose another category</a>
      </div>
    </section>

    <section class="mx-auto mt-8 max-w-3xl">
      <h2 class="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Answer review</h2>
      <ol class="mt-4 space-y-4">${review}</ol>
    </section>`;
}

function renderQuiz() {
  const root = document.getElementById('quiz-root');

  if (!state.categoryId) {
    root.innerHTML = categorySelectMarkup();
    return;
  }

  const cat = getCategory(state.categoryId);
  if (!cat) {
    root.innerHTML = notFoundMarkup();
    return;
  }

  if (state.submitted) {
    root.innerHTML = resultsMarkup(cat, state.submitted);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  root.innerHTML = questionMarkup(cat);
}

function resetQuizState(categoryId) {
  state.categoryId = categoryId;
  state.index = 0;
  state.answers = {};
  state.results = {};
  state.submitted = null;
}

function selectAnswer(optionIndex) {
  const questions = QUESTIONS[state.categoryId];
  if (!questions) return;
  const question = questions[state.index];
  if (state.results[question.id] !== undefined) return;

  const correct = optionIndex === question.answer;
  state.answers[question.id] = optionIndex;
  state.results[question.id] = {
    correct,
    correctIndex: question.answer,
    points: correct ? 1 : 0,
    explanation: question.explanation,
  };
  renderQuiz();
}

function nextQuestion() {
  const questions = QUESTIONS[state.categoryId];
  if (!questions) return;
  if (!state.results[questions[state.index].id]) return;
  if (state.index < questions.length - 1) {
    state.index += 1;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevQuestion() {
  if (state.index > 0) {
    state.index -= 1;
    renderQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function gradeSubmission(questions, answers) {
  const breakdown = [];
  const unanswered = [];
  let score = 0;

  questions.forEach((question) => {
    const hasAnswer = Object.prototype.hasOwnProperty.call(answers, question.id);
    const selected = hasAnswer ? answers[question.id] : null;
    const correct = hasAnswer && selected === question.answer;
    if (correct) score += 1;
    if (!hasAnswer) unanswered.push(question.id);

    breakdown.push({
      id: question.id,
      topic: question.topic,
      question: question.question,
      options: question.options,
      selected,
      correctIndex: question.answer,
      correct,
      explanation: question.explanation,
      points: correct ? 1 : 0,
    });
  });

  const total = questions.length;
  const percentage = total === 0 ? 0 : Math.round((score / total) * 1000) / 10;

  return {
    score,
    total,
    percentage,
    passed: total > 0 && percentage >= PASS_THRESHOLD,
    threshold: PASS_THRESHOLD,
    unanswered,
    breakdown,
  };
}

function finishQuiz() {
  const questions = QUESTIONS[state.categoryId];
  if (!questions) return;
  if (Object.keys(state.results).length !== questions.length) return;
  state.submitted = gradeSubmission(questions, state.answers);
  renderQuiz();
}

function retakeQuiz() {
  resetQuizState(state.categoryId);
  renderQuiz();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function loadReport() {
  if (state.reportLoaded) return;
  const loading = document.getElementById('report-loading');
  const errorBox = document.getElementById('report-error');
  const body = document.getElementById('report-body');

  try {
    const response = await fetch('docs/Technical_Report.md', { cache: 'no-store' });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const markdown = await response.text();
    body.innerHTML =
      typeof window.marked !== 'undefined'
        ? window.marked.parse(markdown)
        : '<pre>' + esc(markdown) + '</pre>';
    loading.classList.add('hidden');
    errorBox.classList.add('hidden');
    body.classList.remove('hidden');
    state.reportLoaded = true;
  } catch (error) {
    loading.classList.add('hidden');
    errorBox.textContent =
      'Could not load docs/Technical_Report.md (' +
      error.message +
      '). Run the project through the VS Code Live Server extension instead of opening the file directly.';
    errorBox.classList.remove('hidden');
  }
}

function renderCodeTabs() {
  document.getElementById('code-tabs').innerHTML = CODE_FILES.map(
    (file) =>
      `<button type="button" class="code-tab ${file === state.activeCodeFile ? 'active' : ''}" onclick="openCodeViewer('${file}')">${file}</button>`,
  ).join('');
}

async function openCodeViewer(file) {
  state.activeCodeFile = file;
  const modal = document.getElementById('code-modal');
  const output = document.getElementById('code-output');
  const meta = document.getElementById('code-meta');

  modal.classList.remove('hidden');
  renderCodeTabs();
  output.textContent = 'Loading ' + file + ' ...';
  meta.textContent = '-';

  try {
    const response = await fetch(file, { cache: 'no-store' });
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const text = await response.text();
    state.activeCodeText = text;
    output.textContent = text;
    const lines = text.split('\n').length;
    const bytes = new TextEncoder().encode(text).length;
    meta.textContent = file + '  ·  ' + lines + ' lines  ·  ' + bytes + ' bytes';
  } catch (error) {
    state.activeCodeText = '';
    output.textContent =
      'Could not load "' + file + '" (' + error.message + ').\n\n' +
      'Start the project with the VS Code Live Server extension:\n' +
      '  1. Right click index.html\n' +
      '  2. "Open with Live Server"\n\n' +
      'Opening the page via file:// blocks fetch() in every modern browser.';
    meta.textContent = file;
  }
}

function closeCodeViewer() {
  document.getElementById('code-modal').classList.add('hidden');
}

function copyCodeFile() {
  const button = document.getElementById('code-copy');
  if (!state.activeCodeText) return;
  navigator.clipboard.writeText(state.activeCodeText).then(() => {
    button.textContent = 'Copied!';
    window.setTimeout(() => {
      button.textContent = 'Copy file';
    }, 1500);
  });
}

function parseRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const [view, param] = hash.split('/');
  if (view === 'quiz') return { view: 'quiz', categoryId: param || null };
  if (view === 'report') return { view: 'report' };
  return { view: 'home' };
}

function setActiveNav(view) {
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === view);
  });
}

function navigate() {
  const route = parseRoute();

  document.getElementById('view-home').classList.toggle('hidden', route.view !== 'home');
  document.getElementById('view-quiz').classList.toggle('hidden', route.view !== 'quiz');
  document.getElementById('view-report').classList.toggle('hidden', route.view !== 'report');
  setActiveNav(route.view);

  if (route.view === 'quiz') {
    if (state.categoryId !== route.categoryId) resetQuizState(route.categoryId);
    renderQuiz();
  }

  if (route.view === 'report') loadReport();

  window.scrollTo({ top: 0, behavior: 'auto' });
}

function init() {
  applyTheme(window.localStorage.getItem(THEME_KEY) || 'dark');

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });

  document.getElementById('home-categories').innerHTML = CATEGORIES.map(categoryCard).join('');
  document.getElementById('stat-questions').textContent = CATEGORIES.reduce(
    (sum, category) => sum + QUESTIONS[category.id].length,
    0,
  );
  document.getElementById('stat-categories').textContent = CATEGORIES.length;

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-code-close]')) closeCodeViewer();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeCodeViewer();
  });

  document.getElementById('code-copy').addEventListener('click', copyCodeFile);

  window.addEventListener('hashchange', navigate);
  navigate();
}

init();
