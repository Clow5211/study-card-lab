window.QUIZ_DATA = window.QUIZ_DATA || { topics: [] };
window.QUIZ_DATA.topics.unshift({
  "id": "agent-runtime-protocol-150",
  "title": "Agent Runtime 与协议体系（150题）",
  "source": "question-banks/agent-runtime-protocol-quiz-150.json",
  "summary": [
    "结构化 JSON 题库，共 150 道单选题。",
    "覆盖章节：第1章 总体框架、第2章 Function Calling、第3章 Tool Schema、第4章 MCP、第5章 A2A、第6章 状态管理 等",
    "每题包含答案、正确解析、易错说明和拓展说明，适合系统复习与自测。"
  ],
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "prompt": "Agent 工程化最核心解决的问题是什么？",
      "options": [
        {
          "id": "A",
          "text": "让模型参数更多、推理更长"
        },
        {
          "id": "B",
          "text": "把模型的不确定性推理转化为可控、可审计的系统动作"
        },
        {
          "id": "C",
          "text": "完全取消传统后端服务"
        },
        {
          "id": "D",
          "text": "让所有业务逻辑都写进 Prompt"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：Agent Runtime 的核心价值是把模型的意图、安全治理、状态管理和工具执行连接起来。\n\n易错点：A只强调模型能力；C不现实；D会导致流程不可控，Prompt 不能替代工程治理。\n\n拓展：面试中可以把 Agent 平台理解为“模型控制面 + 受控执行面”的组合。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q2",
      "type": "single",
      "prompt": "为什么不能让大模型直接控制外部系统？",
      "options": [
        {
          "id": "A",
          "text": "因为模型不能输出文本"
        },
        {
          "id": "B",
          "text": "因为模型输出具有不确定性，缺少权限、幂等、审计等工程约束"
        },
        {
          "id": "C",
          "text": "因为外部系统只能由人操作"
        },
        {
          "id": "D",
          "text": "因为工具调用一定比自然语言慢"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：真实业务系统需要确定性和可追踪性，模型只能表达意图，不能绕过治理直接执行。\n\n易错点：A错误，模型当然能输出文本；C过于绝对；D不是关键原因。\n\n拓展：高风险场景中，执行权必须留在 Runtime 或业务系统侧。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q3",
      "type": "single",
      "prompt": "Agent Runtime 在整体架构中主要属于哪一层？",
      "options": [
        {
          "id": "A",
          "text": "只属于模型训练层"
        },
        {
          "id": "B",
          "text": "只属于前端 UI 层"
        },
        {
          "id": "C",
          "text": "运行时层，负责状态推进、工具循环、权限校验和任务调度"
        },
        {
          "id": "D",
          "text": "只属于数据库存储层"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：Runtime 是 Agent 系统执行的中枢，连接模型、工具、状态和治理。\n\n易错点：A/B/D都把 Runtime 缩小成单一模块，无法覆盖真实职责。\n\n拓展：Runtime 不等于工作流引擎，它还要处理模型不确定性和工具治理。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q4",
      "type": "single",
      "prompt": "协议层在 Agent 工程体系中的作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "定义模型、工具、资源、Agent 之间的交互方式"
        },
        {
          "id": "B",
          "text": "替代所有业务数据库"
        },
        {
          "id": "C",
          "text": "负责显卡显存管理"
        },
        {
          "id": "D",
          "text": "决定模型预训练语料"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Function Calling、MCP、A2A 都属于协议或交互规范，用来统一系统边界。\n\n易错点：B/C/D分别属于存储、硬件和训练范畴，不是协议层职责。\n\n拓展：协议层越清晰，大规模能力接入和协作越容易治理。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q5",
      "type": "single",
      "prompt": "治理层通常不包括哪项能力？",
      "options": [
        {
          "id": "A",
          "text": "权限控制"
        },
        {
          "id": "B",
          "text": "审计追踪"
        },
        {
          "id": "C",
          "text": "灰度发布"
        },
        {
          "id": "D",
          "text": "矩阵乘法加速"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：矩阵乘法加速属于底层推理或硬件优化，不是 Agent 治理层重点。\n\n易错点：A/B/C都是治理层常见能力，分别对应安全、追溯和版本发布。\n\n拓展：治理层关注的是谁能做什么、怎么做、出了问题能否追溯。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q6",
      "type": "single",
      "prompt": "Agent 平台中的资产层主要沉淀什么？",
      "options": [
        {
          "id": "A",
          "text": "工具、Skill、Prompt、Workflow、Artifact 等可复用能力"
        },
        {
          "id": "B",
          "text": "GPU 驱动"
        },
        {
          "id": "C",
          "text": "操作系统内核"
        },
        {
          "id": "D",
          "text": "用户浏览器缓存"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：资产层把经验、能力和产物沉淀为可复用、可版本化的对象。\n\n易错点：B/C/D都不是 Agent 能力资产的核心对象。\n\n拓展：平台化的关键是把一次性经验变成可评测、可复用资产。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q7",
      "type": "single",
      "prompt": "“模型是控制面的一部分”这句话更准确的理解是？",
      "options": [
        {
          "id": "A",
          "text": "模型负责真实执行数据库写入"
        },
        {
          "id": "B",
          "text": "模型表达决策和动作意图，执行由系统侧接管"
        },
        {
          "id": "C",
          "text": "模型必须管理所有权限"
        },
        {
          "id": "D",
          "text": "模型直接保存所有状态"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：模型可以规划和选择工具，但真实执行、权限、审计必须由 Runtime 负责。\n\n易错点：A/C/D都会把不可控能力交给模型，风险过高。\n\n拓展：这个表达常用于区分 LLM 的推理能力和后端系统的执行能力。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q8",
      "type": "single",
      "prompt": "Agent 工程化为什么强调“可回放”？",
      "options": [
        {
          "id": "A",
          "text": "为了让用户看动画"
        },
        {
          "id": "B",
          "text": "为了复现线上失败，定位是模型、工具、权限、状态还是流程问题"
        },
        {
          "id": "C",
          "text": "为了减少所有日志"
        },
        {
          "id": "D",
          "text": "为了替代权限校验"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：可回放能把一次 Agent 执行链路复现出来，是排障和评测的基础。\n\n易错点：A无关；C相反，回放需要关键日志；D错误，回放不能替代权限。\n\n拓展：没有 Trace 和回放，复杂 Agent 的失败很难定位根因。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q9",
      "type": "single",
      "prompt": "下面哪种说法最符合生产级 Agent 的设计思想？",
      "options": [
        {
          "id": "A",
          "text": "模型能想到什么就执行什么"
        },
        {
          "id": "B",
          "text": "工具越多越好，全量暴露给模型"
        },
        {
          "id": "C",
          "text": "用协议、Schema、Workflow 和 Runtime 约束模型行为"
        },
        {
          "id": "D",
          "text": "只要 Prompt 写得长，就不需要后端治理"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：生产级 Agent 依靠工程约束来获得可靠性，而不是只靠模型自觉。\n\n易错点：A/D会失控；B会增加选择噪声和安全风险。\n\n拓展：Prompt 是必要手段，但不是治理体系的替代品。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q10",
      "type": "single",
      "prompt": "Agent 平台从“Demo”走向“生产”的关键变化是什么？",
      "options": [
        {
          "id": "A",
          "text": "只换更大的模型"
        },
        {
          "id": "B",
          "text": "只增加 UI 动画"
        },
        {
          "id": "C",
          "text": "补齐权限、状态、幂等、审计、恢复和评测"
        },
        {
          "id": "D",
          "text": "取消所有工具"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：Demo 可以只展示能跑，生产系统必须承担安全、可靠性和可维护性。\n\n易错点：A可能提升能力但不解决治理；B无关；D会失去执行能力。\n\n拓展：生产可用性的核心是系统工程，而不是单点模型能力。",
      "section": "第1章 总体框架"
    },
    {
      "id": "q11",
      "type": "single",
      "prompt": "Function Calling 的直接输出通常是什么？",
      "options": [
        {
          "id": "A",
          "text": "自然语言长答案"
        },
        {
          "id": "B",
          "text": "工具名和符合 Schema 的参数"
        },
        {
          "id": "C",
          "text": "数据库连接对象"
        },
        {
          "id": "D",
          "text": "已经执行完的真实业务结果"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：Function Calling 让模型输出结构化动作请求，而不是亲自执行。\n\n易错点：A是普通回答；C/D属于系统侧或工具执行结果。\n\n拓展：模型只表达调用意图，执行发生在 Runtime 或工具执行器。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q12",
      "type": "single",
      "prompt": "普通 Prompt 输出 JSON 与 Function Calling 的核心区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "前者是动作契约，后者只是格式"
        },
        {
          "id": "B",
          "text": "前者不能包含字段"
        },
        {
          "id": "C",
          "text": "Function Calling 是动作契约，普通 JSON 主要是格式约束"
        },
        {
          "id": "D",
          "text": "两者完全没有区别"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：Function Calling 绑定工具名和参数 Schema，更适合驱动外部动作。\n\n易错点：A颠倒了；B错误；D忽略了动作语义和校验机制。\n\n拓展：JSON 像“写成表格”，Function Calling 像“填写标准工单”。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q13",
      "type": "single",
      "prompt": "Structured Outputs 更适合哪类任务？",
      "options": [
        {
          "id": "A",
          "text": "创建退款工单"
        },
        {
          "id": "B",
          "text": "发邮件"
        },
        {
          "id": "C",
          "text": "把简历解析为固定字段"
        },
        {
          "id": "D",
          "text": "删除远程文件"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：Structured Outputs 主要用于最终结果结构化，不一定触发外部动作。\n\n易错点：A/B/D都属于可能产生副作用的工具调用场景。\n\n拓展：输出结构和执行动作要分清，否则会把信息抽取任务设计得过重。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q14",
      "type": "single",
      "prompt": "Function Calling 更适合哪类任务？",
      "options": [
        {
          "id": "A",
          "text": "输出论文摘要 JSON"
        },
        {
          "id": "B",
          "text": "对文本做情感分类"
        },
        {
          "id": "C",
          "text": "调用订单系统查询订单状态"
        },
        {
          "id": "D",
          "text": "把一段文字改写成正式语气"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：查询订单状态需要触达外部系统，因此适合通过工具调用表达动作。\n\n易错点：A/B/D可以用结构化输出或普通生成完成，不一定需要工具。\n\n拓展：判断是否需要 Function Calling 的关键是是否要访问或改变外部系统。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q15",
      "type": "single",
      "prompt": "JSON mode 的主要局限是什么？",
      "options": [
        {
          "id": "A",
          "text": "完全不能输出 JSON"
        },
        {
          "id": "B",
          "text": "只能保证业务语义正确"
        },
        {
          "id": "C",
          "text": "不能保证严格符合业务 Schema"
        },
        {
          "id": "D",
          "text": "只能用于图像任务"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：JSON mode 只提升格式合法概率，不保证必填字段、枚举值和业务约束。\n\n易错点：A错误；B恰好相反；D无关。\n\n拓展：生产环境要把 JSON mode 和严格 Schema 区分开。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q16",
      "type": "single",
      "prompt": "什么是只读工具？",
      "options": [
        {
          "id": "A",
          "text": "只查询信息、不改变外部系统状态的工具"
        },
        {
          "id": "B",
          "text": "只能在本地运行的工具"
        },
        {
          "id": "C",
          "text": "只能被管理员调用的工具"
        },
        {
          "id": "D",
          "text": "只能返回字符串的工具"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：只读工具不会产生业务副作用，风险主要在答案质量。\n\n易错点：B/C/D都不是只读的定义。\n\n拓展：只读工具更适合并行调用和自动重试。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q17",
      "type": "single",
      "prompt": "下面哪个属于副作用型工具？",
      "options": [
        {
          "id": "A",
          "text": "查询天气"
        },
        {
          "id": "B",
          "text": "查询文档"
        },
        {
          "id": "C",
          "text": "创建工单"
        },
        {
          "id": "D",
          "text": "读取配置"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：创建工单会改变外部系统状态，是典型副作用。\n\n易错点：A/B/D主要是读取信息，不改变业务状态。\n\n拓展：副作用型工具应默认幂等、审计、必要时审批。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q18",
      "type": "single",
      "prompt": "副作用型工具为什么要强调幂等？",
      "options": [
        {
          "id": "A",
          "text": "为了让模型输出更长"
        },
        {
          "id": "B",
          "text": "为了避免重试或重复调用造成重复扣费、重复工单等问题"
        },
        {
          "id": "C",
          "text": "为了提高 UI 颜色一致性"
        },
        {
          "id": "D",
          "text": "为了让所有错误都自动消失"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：只要系统可能重试，就必须防止同一业务动作重复生效。\n\n易错点：A/C无关；D错误，幂等不能消除所有错误。\n\n拓展：幂等键是副作用工具治理中的常见实现方式。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q19",
      "type": "single",
      "prompt": "高风险副作用动作通常应该如何处理？",
      "options": [
        {
          "id": "A",
          "text": "完全交给模型自动执行"
        },
        {
          "id": "B",
          "text": "默认走人工审批或明确业务规则确认"
        },
        {
          "id": "C",
          "text": "跳过日志"
        },
        {
          "id": "D",
          "text": "允许无限重试"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：付款、删除、群发等动作需要人工或规则确认，降低不可逆风险。\n\n易错点：A/C/D都会放大事故风险。\n\n拓展：模型可以准备草稿和理由，但最终执行权应受控。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q20",
      "type": "single",
      "prompt": "生产级工具调用链路的第一步通常是什么？",
      "options": [
        {
          "id": "A",
          "text": "直接执行所有工具"
        },
        {
          "id": "B",
          "text": "下发当前用户和场景可用的工具"
        },
        {
          "id": "C",
          "text": "删除历史状态"
        },
        {
          "id": "D",
          "text": "跳过 Schema 校验"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：只暴露当前可用工具能降低误调用、安全风险和上下文成本。\n\n易错点：A/D不安全；C无关。\n\n拓展：工具可见性过滤是 Agent 安全的第一道门。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q21",
      "type": "single",
      "prompt": "运行时治理校验通常不包括哪一项？",
      "options": [
        {
          "id": "A",
          "text": "Schema 校验"
        },
        {
          "id": "B",
          "text": "权限校验"
        },
        {
          "id": "C",
          "text": "业务规则校验"
        },
        {
          "id": "D",
          "text": "让模型直接拿数据库 root 密码"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：给模型高权限凭据违反执行隔离原则。\n\n易错点：A/B/C都是运行时执行前的重要校验。\n\n拓展：模型看到的参数和系统实际凭据应该隔离。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q22",
      "type": "single",
      "prompt": "工具执行器的主要价值是什么？",
      "options": [
        {
          "id": "A",
          "text": "让模型绕过权限"
        },
        {
          "id": "B",
          "text": "隔离模型和外部系统，统一处理超时、重试、签名、日志"
        },
        {
          "id": "C",
          "text": "替代所有模型推理"
        },
        {
          "id": "D",
          "text": "把所有返回值变成乱码"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：执行器是模型和外部系统之间的安全边界。\n\n易错点：A/D错误；C不是执行器职责。\n\n拓展：执行器可以看作 Agent 系统的数据面执行组件。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q23",
      "type": "single",
      "prompt": "为什么工具调用循环要设置最大步数？",
      "options": [
        {
          "id": "A",
          "text": "为了降低显示器亮度"
        },
        {
          "id": "B",
          "text": "防止模型陷入无限调用或无效循环"
        },
        {
          "id": "C",
          "text": "为了禁止所有工具"
        },
        {
          "id": "D",
          "text": "为了让答案永远更短"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：模型可能不断尝试工具或反复修正，必须有终止条件。\n\n易错点：A/C/D不是关键原因。\n\n拓展：最大步数、预算和超时共同构成循环保护。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q24",
      "type": "single",
      "prompt": "哪类场景最适合并行工具调用？",
      "options": [
        {
          "id": "A",
          "text": "多个独立只读查询"
        },
        {
          "id": "B",
          "text": "先扣费再发货"
        },
        {
          "id": "C",
          "text": "先创建工单再通知客户"
        },
        {
          "id": "D",
          "text": "审批未完成的删除操作"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：独立只读查询没有顺序依赖和副作用，更适合并行。\n\n易错点：B/C有顺序和副作用；D需要审批，不能并行执行。\n\n拓展：并行的前提是无依赖、无共享状态竞争、风险可控。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q25",
      "type": "single",
      "prompt": "为什么大规模工具集不能全量塞给模型？",
      "options": [
        {
          "id": "A",
          "text": "模型会因此不能输出中文"
        },
        {
          "id": "B",
          "text": "上下文成本高、选择精度下降、KV 缓存命中率降低"
        },
        {
          "id": "C",
          "text": "所有工具都会自动删除"
        },
        {
          "id": "D",
          "text": "会导致数据库无法启动"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：工具过多会污染上下文并增加选择难度。\n\n易错点：A/C/D不成立。\n\n拓展：工具搜索和延迟加载是大规模工具治理的常见方案。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q26",
      "type": "single",
      "prompt": "工具 Namespace 的作用更接近什么？",
      "options": [
        {
          "id": "A",
          "text": "按场景或领域组织工具，减少暴露范围"
        },
        {
          "id": "B",
          "text": "随机打乱工具名"
        },
        {
          "id": "C",
          "text": "隐藏所有工具描述"
        },
        {
          "id": "D",
          "text": "取消 Schema"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Namespace 可以帮助路由和裁剪工具集。\n\n易错点：B/C/D都会降低可用性或安全性。\n\n拓展：例如 finance、calendar、gmail 可以作为不同能力命名空间。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q27",
      "type": "single",
      "prompt": "工具搜索/延迟加载的核心思想是什么？",
      "options": [
        {
          "id": "A",
          "text": "先全量加载所有 Schema"
        },
        {
          "id": "B",
          "text": "先匹配工具元数据，需要时再加载完整 Schema"
        },
        {
          "id": "C",
          "text": "永远不让模型看工具"
        },
        {
          "id": "D",
          "text": "只按字母顺序调用工具"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：这能减少上下文压力并提升工具选择质量。\n\n易错点：A正是要避免的；C过度；D没有语义判断。\n\n拓展：Progressive Disclosure 不只适用于 Skill，也适用于工具集。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q28",
      "type": "single",
      "prompt": "参数最小化原则的正确例子是？",
      "options": [
        {
          "id": "A",
          "text": "删除工具允许任意绝对路径"
        },
        {
          "id": "B",
          "text": "删除工具只允许传授权文件 ID"
        },
        {
          "id": "C",
          "text": "让模型输入 root 密码"
        },
        {
          "id": "D",
          "text": "让模型自由填写所有后端字段"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：授权文件 ID 能把操作范围收敛在系统允许的资源内。\n\n易错点：A/C/D都会扩大危险自由度。\n\n拓展：高风险参数应由系统侧补齐，而不是让模型自由生成。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q29",
      "type": "single",
      "prompt": "Tool Calling 中“模型继续推理”发生在什么时候？",
      "options": [
        {
          "id": "A",
          "text": "工具结果结构化回填之后"
        },
        {
          "id": "B",
          "text": "工具执行之前但没有任何上下文"
        },
        {
          "id": "C",
          "text": "系统关闭之后"
        },
        {
          "id": "D",
          "text": "永远不会发生"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：模型需要根据工具结果决定继续调用、补充信息或最终回答。\n\n易错点：B缺少结果依据；C/D明显不对。\n\n拓展：工具调用是一个循环，而不是一次性 API 代理。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q30",
      "type": "single",
      "prompt": "下面哪个最能体现“LLM 是控制面而非数据面”？",
      "options": [
        {
          "id": "A",
          "text": "LLM 负责表达动作意图，Runtime 负责执行和治理"
        },
        {
          "id": "B",
          "text": "LLM 直接写生产数据库"
        },
        {
          "id": "C",
          "text": "LLM 保存全部业务数据"
        },
        {
          "id": "D",
          "text": "LLM 绕过所有审计"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：控制面负责决策意图，数据面负责实际操作。\n\n易错点：B/C/D都破坏执行隔离和审计。\n\n拓展：这是回答 Agent 工程化问题时非常有用的架构视角。",
      "section": "第2章 Function Calling"
    },
    {
      "id": "q31",
      "type": "single",
      "prompt": "Tool Schema 为什么不是简单参数注释？",
      "options": [
        {
          "id": "A",
          "text": "它同时服务模型选择、运行时校验和平台治理"
        },
        {
          "id": "B",
          "text": "它只能给人看"
        },
        {
          "id": "C",
          "text": "它只影响前端样式"
        },
        {
          "id": "D",
          "text": "它只能描述返回字符串"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Schema 是模型、Runtime、平台共同依赖的契约。\n\n易错点：B/C/D都低估了 Schema 的工程价值。\n\n拓展：工具体系越大，Schema 治理越重要。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q32",
      "type": "single",
      "prompt": "面向模型的 Schema 描述最应该写清什么？",
      "options": [
        {
          "id": "A",
          "text": "工具功能边界、适用场景、参数语义"
        },
        {
          "id": "B",
          "text": "数据库 root 密码"
        },
        {
          "id": "C",
          "text": "后端内部类名"
        },
        {
          "id": "D",
          "text": "服务器机房地址"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：模型需要靠描述选择正确工具并填写参数。\n\n易错点：B/C/D不应暴露给模型，且与选择无关。\n\n拓展：好的工具描述应写清“不适合做什么”。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q33",
      "type": "single",
      "prompt": "面向运行时的 Schema 价值主要是什么？",
      "options": [
        {
          "id": "A",
          "text": "参数校验、权限治理、审计依据"
        },
        {
          "id": "B",
          "text": "提升屏幕刷新率"
        },
        {
          "id": "C",
          "text": "训练 embedding"
        },
        {
          "id": "D",
          "text": "控制网页字体"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：运行时通过 Schema 做严格校验和策略判断。\n\n易错点：B/C/D无关。\n\n拓展：Schema 能把很多错误提前挡在执行前。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q34",
      "type": "single",
      "prompt": "面向平台的 Schema 价值主要是什么？",
      "options": [
        {
          "id": "A",
          "text": "工具注册、发现、版本管理、灰度、SDK 生成"
        },
        {
          "id": "B",
          "text": "加速鼠标移动"
        },
        {
          "id": "C",
          "text": "替代所有数据库索引"
        },
        {
          "id": "D",
          "text": "删除审计日志"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：平台化工具体系依赖元数据治理。\n\n易错点：B/C/D不是平台 Schema 的目标。\n\n拓展：没有标准 Schema，大规模工具生态很难维护。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q35",
      "type": "single",
      "prompt": "哪个工具名设计更合理？",
      "options": [
        {
          "id": "A",
          "text": "run_api_v2"
        },
        {
          "id": "B",
          "text": "do_stuff"
        },
        {
          "id": "C",
          "text": "search_customer_orders"
        },
        {
          "id": "D",
          "text": "call_backend"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：它表达了明确业务动作和对象。\n\n易错点：A/D暴露实现且不清晰；B过于模糊。\n\n拓展：工具名是模型选择工具的重要信号。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q36",
      "type": "single",
      "prompt": "工具描述中写“不适合做什么”的价值是什么？",
      "options": [
        {
          "id": "A",
          "text": "减少误调用"
        },
        {
          "id": "B",
          "text": "增加乱码"
        },
        {
          "id": "C",
          "text": "隐藏工具功能"
        },
        {
          "id": "D",
          "text": "让 Schema 失效"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：边界描述能帮助模型在相似工具之间做正确选择。\n\n易错点：B/C/D错误。\n\n拓展：负面边界常常比正面描述更能减少工具误用。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q37",
      "type": "single",
      "prompt": "为什么参数名要用业务语义命名？",
      "options": [
        {
          "id": "A",
          "text": "让模型更容易理解字段含义"
        },
        {
          "id": "B",
          "text": "让字段越短越好"
        },
        {
          "id": "C",
          "text": "让后端无法解析"
        },
        {
          "id": "D",
          "text": "为了隐藏数据类型"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：例如 user_email 比 user 更明确，能减少填参错误。\n\n易错点：B过度追求短；C/D错误。\n\n拓展：Schema 是给模型和系统共同使用的，不只是后端字段。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q38",
      "type": "single",
      "prompt": "为什么要禁止额外字段？",
      "options": [
        {
          "id": "A",
          "text": "避免脏数据和隐性故障"
        },
        {
          "id": "B",
          "text": "让工具永远不能调用"
        },
        {
          "id": "C",
          "text": "让模型不能输出任何参数"
        },
        {
          "id": "D",
          "text": "为了减少硬盘容量"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：额外字段可能被误当成业务参数或进入日志，造成不可预测问题。\n\n易错点：B/C/D不成立。\n\n拓展：严格 Schema 是生产级工具调用的重要习惯。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q39",
      "type": "single",
      "prompt": "工具返回值结构化时，哪个字段最有利于运行时决策？",
      "options": [
        {
          "id": "A",
          "text": "是否可重试"
        },
        {
          "id": "B",
          "text": "随机诗句"
        },
        {
          "id": "C",
          "text": "背景音乐"
        },
        {
          "id": "D",
          "text": "图片颜色"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Runtime 可以根据可重试标记决定是否自动重试或转人工。\n\n易错点：B/C/D与执行决策无关。\n\n拓展：返回结构应区分业务失败、系统失败、权限失败等类型。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q40",
      "type": "single",
      "prompt": "为什么工具返回不应只是一段自然语言？",
      "options": [
        {
          "id": "A",
          "text": "不利于自动判断成功、错误类型、重试和审批"
        },
        {
          "id": "B",
          "text": "自然语言永远不可读"
        },
        {
          "id": "C",
          "text": "模型完全不能理解文本"
        },
        {
          "id": "D",
          "text": "工具不能返回文本"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：结构化结果更利于流程控制和审计。\n\n易错点：B/C/D都过于绝对。\n\n拓展：可以同时返回人类可读摘要和机器可读字段。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q41",
      "type": "single",
      "prompt": "能力最小化原则指什么？",
      "options": [
        {
          "id": "A",
          "text": "只暴露当前任务需要的工具"
        },
        {
          "id": "B",
          "text": "让模型看到所有内部接口"
        },
        {
          "id": "C",
          "text": "把工具描述写得越长越好"
        },
        {
          "id": "D",
          "text": "让所有用户都有管理员权限"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：减少工具可见范围能降低误调用和越权风险。\n\n易错点：B/D危险；C不一定，描述要清晰而非无限长。\n\n拓展：能力最小化是 Agent 安全治理第一层。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q42",
      "type": "single",
      "prompt": "执行隔离原则的核心是什么？",
      "options": [
        {
          "id": "A",
          "text": "模型不能直连高权限系统，工具调用经过沙箱或服务层"
        },
        {
          "id": "B",
          "text": "让模型直接登录数据库"
        },
        {
          "id": "C",
          "text": "所有工具在用户浏览器执行"
        },
        {
          "id": "D",
          "text": "取消鉴权"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：隔离层统一处理权限、签名、审计、限流等。\n\n易错点：B/D危险；C不适合大多数企业后端能力。\n\n拓展：执行隔离把模型风险限制在可控边界内。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q43",
      "type": "single",
      "prompt": "审计溯源至少应该记录什么？",
      "options": [
        {
          "id": "A",
          "text": "调用方、工具、参数、结果、时间"
        },
        {
          "id": "B",
          "text": "用户鼠标轨迹"
        },
        {
          "id": "C",
          "text": "随机数种子即可"
        },
        {
          "id": "D",
          "text": "只记录最终答案，不记录工具"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这些信息是排查误调用、越权和事故的基础。\n\n易错点：B通常不是核心；C不足；D缺少关键链路。\n\n拓展：Agent Trace 应能复原模型选择工具到执行结果的全过程。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q44",
      "type": "single",
      "prompt": "为什么高风险写操作需要人工审批？",
      "options": [
        {
          "id": "A",
          "text": "因为模型输出可能错误，且副作用可能不可逆"
        },
        {
          "id": "B",
          "text": "因为审批能提升模型参数量"
        },
        {
          "id": "C",
          "text": "因为审批可以替代所有权限"
        },
        {
          "id": "D",
          "text": "因为只读工具也必须全部审批"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：高风险动作需要额外确认，降低不可逆事故。\n\n易错点：B错误；C审批不能替代权限；D过度，普通只读查询不一定审批。\n\n拓展：审批流常作为 Workflow 中的显式节点。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q45",
      "type": "single",
      "prompt": "工具版本管理的意义是什么？",
      "options": [
        {
          "id": "A",
          "text": "支持灰度、回滚和兼容性治理"
        },
        {
          "id": "B",
          "text": "让工具名每天随机变化"
        },
        {
          "id": "C",
          "text": "让旧任务无法复现"
        },
        {
          "id": "D",
          "text": "取消 Schema 校验"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：工具变更会影响模型选择和参数结构，需要可控发布。\n\n易错点：B/C/D都破坏稳定性。\n\n拓展：工具版本变化也应进入评测和审计。",
      "section": "第3章 Tool Schema"
    },
    {
      "id": "q46",
      "type": "single",
      "prompt": "MCP 的全称是什么？",
      "options": [
        {
          "id": "A",
          "text": "Model Context Protocol"
        },
        {
          "id": "B",
          "text": "Multi Cache Pipeline"
        },
        {
          "id": "C",
          "text": "Memory Control Program"
        },
        {
          "id": "D",
          "text": "Model Compute Proxy"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：MCP 是模型上下文协议，用于 AI 应用接入工具、资源和提示模板。\n\n易错点：B/C/D都是干扰项。\n\n拓展：MCP 关注 AI 能力接入，不是普通业务 API 命名。",
      "section": "第4章 MCP"
    },
    {
      "id": "q47",
      "type": "single",
      "prompt": "MCP 主要解决什么问题？",
      "options": [
        {
          "id": "A",
          "text": "外部能力如何标准化接入 Agent 系统"
        },
        {
          "id": "B",
          "text": "GPU 如何训练模型"
        },
        {
          "id": "C",
          "text": "如何写 CSS"
        },
        {
          "id": "D",
          "text": "如何压缩图片"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：MCP 统一 Tools、Resources、Prompts 等能力交互。\n\n易错点：B/C/D不是 MCP 核心。\n\n拓展：MCP 更靠近能力侧，Function Calling 更靠近模型侧。",
      "section": "第4章 MCP"
    },
    {
      "id": "q48",
      "type": "single",
      "prompt": "MCP 和普通 HTTP API 的关键区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "MCP 额外强调能力发现、资源、提示模板和生命周期管理"
        },
        {
          "id": "B",
          "text": "MCP 不能远程通信"
        },
        {
          "id": "C",
          "text": "HTTP API 一定比 MCP 安全"
        },
        {
          "id": "D",
          "text": "MCP 只能返回图片"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：MCP 是面向 AI 应用的能力接入规范，不只是请求响应。\n\n易错点：B错误，MCP 可用 HTTP；C过于绝对；D错误。\n\n拓展：普通 API 可以被 MCP 封装成 AI 可发现能力。",
      "section": "第4章 MCP"
    },
    {
      "id": "q49",
      "type": "single",
      "prompt": "MCP 中 Tools 主要表示什么？",
      "options": [
        {
          "id": "A",
          "text": "可执行动作"
        },
        {
          "id": "B",
          "text": "只读网页样式"
        },
        {
          "id": "C",
          "text": "模型权重"
        },
        {
          "id": "D",
          "text": "GPU 显存"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Tools 对应可以被调用的操作能力。\n\n易错点：B/C/D不是 MCP Tools 定义。\n\n拓展：Tools 可能只读，也可能有副作用，仍需运行时治理。",
      "section": "第4章 MCP"
    },
    {
      "id": "q50",
      "type": "single",
      "prompt": "MCP 中 Resources 主要表示什么？",
      "options": [
        {
          "id": "A",
          "text": "只读上下文资源"
        },
        {
          "id": "B",
          "text": "必须产生副作用的动作"
        },
        {
          "id": "C",
          "text": "模型训练数据增强算法"
        },
        {
          "id": "D",
          "text": "浏览器插件主题"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Resources 给模型提供背景信息，如文件、记录、系统状态。\n\n易错点：B是 Tools 更常见的动作语义；C/D无关。\n\n拓展：把只读上下文建模为 Resource，比全部包装成 Tool 更自然。",
      "section": "第4章 MCP"
    },
    {
      "id": "q51",
      "type": "single",
      "prompt": "MCP 中 Prompts 主要表示什么？",
      "options": [
        {
          "id": "A",
          "text": "可参数化提示模板"
        },
        {
          "id": "B",
          "text": "用户密码"
        },
        {
          "id": "C",
          "text": "GPU 配置"
        },
        {
          "id": "D",
          "text": "数据库表锁"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Prompts 用于标准化特定任务的指令模板。\n\n易错点：B/C/D不是 MCP Prompt。\n\n拓展：Prompt 也可以作为平台资产管理，而不是散落在代码中。",
      "section": "第4章 MCP"
    },
    {
      "id": "q52",
      "type": "single",
      "prompt": "为什么 MCP 要区分 Tools、Resources、Prompts？",
      "options": [
        {
          "id": "A",
          "text": "因为三者分别对应动作、上下文和任务指令"
        },
        {
          "id": "B",
          "text": "因为名字更长"
        },
        {
          "id": "C",
          "text": "因为这样可以取消权限"
        },
        {
          "id": "D",
          "text": "因为模型只能识别三种英文单词"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：区分能力类型能让设计更清晰，也便于治理。\n\n易错点：B/C/D错误。\n\n拓展：不是所有上下文都应该设计成可执行工具。",
      "section": "第4章 MCP"
    },
    {
      "id": "q53",
      "type": "single",
      "prompt": "MCP 与 Function Calling 的关系更接近哪种？",
      "options": [
        {
          "id": "A",
          "text": "互补：Function Calling 表达动作意图，MCP 接入外部能力"
        },
        {
          "id": "B",
          "text": "完全相同"
        },
        {
          "id": "C",
          "text": "互相排斥"
        },
        {
          "id": "D",
          "text": "MCP 只能用于训练阶段"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：生产系统可由模型发起 Function Calling，再由 Runtime 通过 MCP 调用能力服务。\n\n易错点：B/C/D不符合定位。\n\n拓展：一个偏模型侧，一个偏能力接入侧。",
      "section": "第4章 MCP"
    },
    {
      "id": "q54",
      "type": "single",
      "prompt": "Stdio 模式更适合什么场景？",
      "options": [
        {
          "id": "A",
          "text": "本地开发工具、IDE 插件等单机场景"
        },
        {
          "id": "B",
          "text": "跨国多租户服务"
        },
        {
          "id": "C",
          "text": "大规模支付网关"
        },
        {
          "id": "D",
          "text": "公开互联网高并发服务"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Stdio 简单轻量，适合本地进程通信。\n\n易错点：B/C/D更适合 HTTP/网关化部署。\n\n拓展：本地 MCP Server 常用 Stdio 连接桌面或开发工具。",
      "section": "第4章 MCP"
    },
    {
      "id": "q55",
      "type": "single",
      "prompt": "HTTP 模式更适合什么场景？",
      "options": [
        {
          "id": "A",
          "text": "远程服务、多租户、企业级部署"
        },
        {
          "id": "B",
          "text": "只能在单机标准输入输出中通信"
        },
        {
          "id": "C",
          "text": "完全离线的临时脚本"
        },
        {
          "id": "D",
          "text": "手写纸质文档"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：HTTP 便于远程访问、网关治理和多租户部署。\n\n易错点：B是 Stdio；C/D不合适。\n\n拓展：企业里通常会在 HTTP 模式前加统一网关。",
      "section": "第4章 MCP"
    },
    {
      "id": "q56",
      "type": "single",
      "prompt": "企业级 MCP 为什么常用网关/代理模式？",
      "options": [
        {
          "id": "A",
          "text": "统一认证、审计、配额、权限和服务发现"
        },
        {
          "id": "B",
          "text": "为了让每个客户端保存所有密钥"
        },
        {
          "id": "C",
          "text": "为了取消服务治理"
        },
        {
          "id": "D",
          "text": "因为直连一定更安全"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：网关能集中治理能力服务，避免客户端直连失控。\n\n易错点：B/D危险；C相反。\n\n拓展：网关是多租户和合规环境下的重要控制点。",
      "section": "第4章 MCP"
    },
    {
      "id": "q57",
      "type": "single",
      "prompt": "MCP 服务直连过多的主要风险是什么？",
      "options": [
        {
          "id": "A",
          "text": "认证、权限、审计和运维快速失控"
        },
        {
          "id": "B",
          "text": "模型永远无法输出中文"
        },
        {
          "id": "C",
          "text": "所有资源自动公开"
        },
        {
          "id": "D",
          "text": "前端页面无法加载 CSS"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：每个客户端直连每个服务会形成复杂信任网，难统一治理。\n\n易错点：B/C/D不准确。\n\n拓展：复杂系统中，集中入口往往比点对点直连更可控。",
      "section": "第4章 MCP"
    },
    {
      "id": "q58",
      "type": "single",
      "prompt": "MCP 的能力发现对 Agent 有什么价值？",
      "options": [
        {
          "id": "A",
          "text": "Agent 可以自动知道服务端有哪些可用能力"
        },
        {
          "id": "B",
          "text": "让模型不用任何权限"
        },
        {
          "id": "C",
          "text": "让工具无需描述"
        },
        {
          "id": "D",
          "text": "让所有调用都变成同步"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：能力发现降低硬编码依赖，方便工具生态扩展。\n\n易错点：B/C/D错误。\n\n拓展：能力发现仍要结合权限过滤，不能发现即等于可用。",
      "section": "第4章 MCP"
    },
    {
      "id": "q59",
      "type": "single",
      "prompt": "MCP Resources 与 RAG 文档片段的关系可以怎样理解？",
      "options": [
        {
          "id": "A",
          "text": "都可以作为只读上下文供模型使用"
        },
        {
          "id": "B",
          "text": "Resources 必须修改数据库"
        },
        {
          "id": "C",
          "text": "RAG 文档片段不能被读取"
        },
        {
          "id": "D",
          "text": "二者完全不能结合"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Resources 可以承载文件、文档、记录等上下文，和 RAG 有天然结合点。\n\n易错点：B/C/D错误。\n\n拓展：资源访问仍要遵循权限和租户隔离。",
      "section": "第4章 MCP"
    },
    {
      "id": "q60",
      "type": "single",
      "prompt": "如果一个能力只是提供标准代码审查指令模板，更适合用 MCP 的哪类能力表示？",
      "options": [
        {
          "id": "A",
          "text": "Prompts"
        },
        {
          "id": "B",
          "text": "Tools"
        },
        {
          "id": "C",
          "text": "GPU"
        },
        {
          "id": "D",
          "text": "Webhook"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：提示模板本身不是动作，也不是只读业务数据，更适合 Prompts。\n\n易错点：B可能过度包装；C/D不是 MCP 三类核心能力。\n\n拓展：Prompt 模板参数化后可复用、可版本化。",
      "section": "第4章 MCP"
    },
    {
      "id": "q61",
      "type": "single",
      "prompt": "A2A 的核心定位是什么？",
      "options": [
        {
          "id": "A",
          "text": "Agent 与 Agent 之间的协作协议"
        },
        {
          "id": "B",
          "text": "模型与显卡之间的协议"
        },
        {
          "id": "C",
          "text": "数据库备份协议"
        },
        {
          "id": "D",
          "text": "网页渲染协议"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：A2A 解决多个 Agent 如何协同推进任务。\n\n易错点：B/C/D不是 A2A 语义。\n\n拓展：A2A 面向持续任务，不只是一次函数调用。",
      "section": "第5章 A2A"
    },
    {
      "id": "q62",
      "type": "single",
      "prompt": "A2A 和 MCP 的一句话区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "MCP 接能力，A2A 协工作"
        },
        {
          "id": "B",
          "text": "MCP 只能训练模型，A2A 只能写 CSS"
        },
        {
          "id": "C",
          "text": "二者完全相同"
        },
        {
          "id": "D",
          "text": "A2A 只能用于数据库"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：MCP 面向 Agent-to-Tool/Resource，A2A 面向 Agent-to-Agent。\n\n易错点：B/C/D错误。\n\n拓展：面试中这句话非常好用。",
      "section": "第5章 A2A"
    },
    {
      "id": "q63",
      "type": "single",
      "prompt": "A2A 和 Tool Calling 的核心差异是什么？",
      "options": [
        {
          "id": "A",
          "text": "A2A 面向持续任务协作，Tool Calling 面向单次动作"
        },
        {
          "id": "B",
          "text": "Tool Calling 必须异步，A2A 必须同步"
        },
        {
          "id": "C",
          "text": "二者都只能返回字符串"
        },
        {
          "id": "D",
          "text": "A2A 不能有状态"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：A2A 需要任务状态、产物、多轮交互和异步更新。\n\n易错点：B/C/D都不准确。\n\n拓展：复杂协作不应该强行压成一个函数返回值。",
      "section": "第5章 A2A"
    },
    {
      "id": "q64",
      "type": "single",
      "prompt": "A2A 中 Task 表示什么？",
      "options": [
        {
          "id": "A",
          "text": "一件持续存在的工作，有状态、进度和产物"
        },
        {
          "id": "B",
          "text": "一次普通聊天消息"
        },
        {
          "id": "C",
          "text": "一个 GPU kernel"
        },
        {
          "id": "D",
          "text": "一个 CSS 类"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Task 是跨 Agent 协作的核心对象。\n\n易错点：B更接近 Message；C/D无关。\n\n拓展：Task 可以跨越多轮、多小时甚至多天。",
      "section": "第5章 A2A"
    },
    {
      "id": "q65",
      "type": "single",
      "prompt": "A2A 中 Message 表示什么？",
      "options": [
        {
          "id": "A",
          "text": "一次通信消息"
        },
        {
          "id": "B",
          "text": "完整持久任务"
        },
        {
          "id": "C",
          "text": "产物版本库"
        },
        {
          "id": "D",
          "text": "工具 Schema"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Message 是交互载体，不等于整个任务。\n\n易错点：B是 Task；C是 Artifact 管理；D是工具契约。\n\n拓展：理解 Task vs Message 是理解 A2A 的关键。",
      "section": "第5章 A2A"
    },
    {
      "id": "q66",
      "type": "single",
      "prompt": "Agent Card 的作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "描述 Agent 身份、能力范围、交互模式和输入输出规范"
        },
        {
          "id": "B",
          "text": "保存模型权重"
        },
        {
          "id": "C",
          "text": "替代所有任务状态"
        },
        {
          "id": "D",
          "text": "记录用户银行卡"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：调用方根据 Agent Card 发现和选择合适 Agent。\n\n易错点：B/C/D不是 Agent Card。\n\n拓展：Agent Card 类似服务名片，但语义更面向智能体协作。",
      "section": "第5章 A2A"
    },
    {
      "id": "q67",
      "type": "single",
      "prompt": "A2A 中 Artifact 是什么？",
      "options": [
        {
          "id": "A",
          "text": "协作产生的工作产物"
        },
        {
          "id": "B",
          "text": "只能是聊天文本"
        },
        {
          "id": "C",
          "text": "数据库密码"
        },
        {
          "id": "D",
          "text": "临时错误码"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：报告、代码、表格、文档等都可以是 Artifact。\n\n易错点：B过窄；C/D错误。\n\n拓展：Artifact 作为一等公民，便于版本和后续协作。",
      "section": "第5章 A2A"
    },
    {
      "id": "q68",
      "type": "single",
      "prompt": "为什么 A2A 强调 Artifact？",
      "options": [
        {
          "id": "A",
          "text": "因为协作结果常常是报告、代码、表格等非单句文本"
        },
        {
          "id": "B",
          "text": "因为所有 Agent 都不能聊天"
        },
        {
          "id": "C",
          "text": "因为 Artifact 可以替代权限"
        },
        {
          "id": "D",
          "text": "因为 Artifact 不需要存储"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：复杂工作需要产物沉淀和持续更新。\n\n易错点：B/C/D错误。\n\n拓展：Artifact 管理通常要有版本、权限和生命周期。",
      "section": "第5章 A2A"
    },
    {
      "id": "q69",
      "type": "single",
      "prompt": "A2A 中 streaming 的作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "持续推送阶段性结果"
        },
        {
          "id": "B",
          "text": "删除任务"
        },
        {
          "id": "C",
          "text": "禁止异步"
        },
        {
          "id": "D",
          "text": "替代身份认证"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Streaming 让调用方实时看到进度和中间产物。\n\n易错点：B/C/D错误。\n\n拓展：长任务中，流式反馈能改善用户体验。",
      "section": "第5章 A2A"
    },
    {
      "id": "q70",
      "type": "single",
      "prompt": "A2A 中 polling 的含义是什么？",
      "options": [
        {
          "id": "A",
          "text": "调用方定期查询任务状态"
        },
        {
          "id": "B",
          "text": "服务端主动推送所有事件"
        },
        {
          "id": "C",
          "text": "永久阻塞请求"
        },
        {
          "id": "D",
          "text": "删除 Artifact"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Polling 是一种简单的异步进度获取方式。\n\n易错点：B更像 webhook/streaming；C/D错误。\n\n拓展：Polling 适合不方便建立长连接的系统。",
      "section": "第5章 A2A"
    },
    {
      "id": "q71",
      "type": "single",
      "prompt": "A2A 中 webhook 的含义是什么？",
      "options": [
        {
          "id": "A",
          "text": "任务状态变化后回调通知调用方"
        },
        {
          "id": "B",
          "text": "调用方不停刷新"
        },
        {
          "id": "C",
          "text": "强制同步返回"
        },
        {
          "id": "D",
          "text": "只读文件格式"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Webhook 适合异步任务完成或状态变化通知。\n\n易错点：B是 polling；C错误；D无关。\n\n拓展：Webhook 需要鉴权和幂等处理，避免重复通知造成问题。",
      "section": "第5章 A2A"
    },
    {
      "id": "q72",
      "type": "single",
      "prompt": "下面哪个场景更适合 A2A？",
      "options": [
        {
          "id": "A",
          "text": "法务 Agent、财务 Agent、项目 Agent 协作审合同"
        },
        {
          "id": "B",
          "text": "查询今天温度"
        },
        {
          "id": "C",
          "text": "把数字相加"
        },
        {
          "id": "D",
          "text": "读取一个配置项"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：多个专长 Agent 协作推进同一任务，适合 A2A。\n\n易错点：B/C/D更适合普通工具或简单回答。\n\n拓展：A2A 不应滥用于简单单步任务。",
      "section": "第5章 A2A"
    },
    {
      "id": "q73",
      "type": "single",
      "prompt": "跨 Agent 协作的核心是推进什么？",
      "options": [
        {
          "id": "A",
          "text": "Task 状态"
        },
        {
          "id": "B",
          "text": "浏览器滚动条"
        },
        {
          "id": "C",
          "text": "CSS 动画"
        },
        {
          "id": "D",
          "text": "模型显存"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：A2A 的重点是任务状态、进度和产物，而非单条消息。\n\n易错点：B/C/D无关。\n\n拓展：这也是 A2A 与聊天消息协议的重要区别。",
      "section": "第5章 A2A"
    },
    {
      "id": "q74",
      "type": "single",
      "prompt": "为什么不能把所有远端 Agent 都包装成普通工具？",
      "options": [
        {
          "id": "A",
          "text": "复杂 Agent 任务有状态、耗时长、会产生产物并需要多轮交互"
        },
        {
          "id": "B",
          "text": "因为工具不能有名字"
        },
        {
          "id": "C",
          "text": "因为远端 Agent 不能联网"
        },
        {
          "id": "D",
          "text": "因为普通工具一定更贵"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：持续任务语义无法自然压缩为一次同步函数调用。\n\n易错点：B/C/D不是核心原因。\n\n拓展：协议设计要匹配任务语义，而不是强行统一成函数。",
      "section": "第5章 A2A"
    },
    {
      "id": "q75",
      "type": "single",
      "prompt": "A2A 协作中 Agent Card 最需要避免的问题是什么？",
      "options": [
        {
          "id": "A",
          "text": "能力描述过泛，导致调用方误派任务"
        },
        {
          "id": "B",
          "text": "说明过于清晰"
        },
        {
          "id": "C",
          "text": "包含输入输出规范"
        },
        {
          "id": "D",
          "text": "写明支持异步"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：能力边界不清会导致任务路由错误。\n\n易错点：B/C/D都是有益或正常信息。\n\n拓展：Agent Card 和 Tool Schema 一样，需要写清适用边界。",
      "section": "第5章 A2A"
    },
    {
      "id": "q76",
      "type": "single",
      "prompt": "Session 更偏向哪个层级？",
      "options": [
        {
          "id": "A",
          "text": "应用/SDK 层的运行时会话容器"
        },
        {
          "id": "B",
          "text": "长期知识图谱"
        },
        {
          "id": "C",
          "text": "数据库事务日志"
        },
        {
          "id": "D",
          "text": "GPU 线程块"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Session 通常承载一次交互的运行时上下文。\n\n易错点：B/C/D不是 Session 的主要语义。\n\n拓展：Session 不一定等于完整历史对话。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q77",
      "type": "single",
      "prompt": "Conversation 更偏向哪个层级？",
      "options": [
        {
          "id": "A",
          "text": "平台持久层的对话实体"
        },
        {
          "id": "B",
          "text": "一次工具调用"
        },
        {
          "id": "C",
          "text": "显卡执行流"
        },
        {
          "id": "D",
          "text": "网络路由表"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Conversation 保存历史消息和元数据，更偏持久记录。\n\n易错点：B/C/D无关。\n\n拓展：很多平台把 Conversation 作为用户可见的对话记录。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q78",
      "type": "single",
      "prompt": "Thread 在工作流中更接近什么？",
      "options": [
        {
          "id": "A",
          "text": "一条独立执行路径或任务脉络"
        },
        {
          "id": "B",
          "text": "浏览器标签页颜色"
        },
        {
          "id": "C",
          "text": "纯数据库字段"
        },
        {
          "id": "D",
          "text": "只读资源文件"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Thread 表示工作流/图执行中的脉络。\n\n易错点：B/C/D不准确。\n\n拓展：多分支工作流可能产生多个 Thread。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q79",
      "type": "single",
      "prompt": "持久状态和模型上下文为什么要分离？",
      "options": [
        {
          "id": "A",
          "text": "系统记住的信息不等于每轮都要喂给模型"
        },
        {
          "id": "B",
          "text": "因为模型不能读取文本"
        },
        {
          "id": "C",
          "text": "因为状态只能存在显卡里"
        },
        {
          "id": "D",
          "text": "因为上下文越多一定越好"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：分离能降低成本、噪声和泄漏风险。\n\n易错点：B/C错误；D恰好相反，过多上下文可能干扰模型。\n\n拓展：这是长任务 Agent 的核心设计原则。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q80",
      "type": "single",
      "prompt": "下面哪项属于持久状态？",
      "options": [
        {
          "id": "A",
          "text": "任务进度和已生成产物"
        },
        {
          "id": "B",
          "text": "当前屏幕亮度"
        },
        {
          "id": "C",
          "text": "随机背景音乐"
        },
        {
          "id": "D",
          "text": "模型参数梯度"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：任务进度、历史产物、权限等需要系统侧持久保存。\n\n易错点：B/C无关；D属于训练过程，不是普通 Agent 运行状态。\n\n拓展：持久状态应可恢复、可审计、可权限控制。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q81",
      "type": "single",
      "prompt": "模型上下文指什么？",
      "options": [
        {
          "id": "A",
          "text": "每轮推理时实际发送给模型的内容"
        },
        {
          "id": "B",
          "text": "系统保存过的全部数据"
        },
        {
          "id": "C",
          "text": "所有数据库表"
        },
        {
          "id": "D",
          "text": "用户硬盘全部文件"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：上下文是持久状态经过筛选和组装后的子集。\n\n易错点：B/C/D范围过大且危险。\n\n拓展：好的上下文组装决定模型能否读到关键状态。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q82",
      "type": "single",
      "prompt": "把所有历史都塞进模型上下文会导致什么？",
      "options": [
        {
          "id": "A",
          "text": "Token 成本上升、噪声增加、泄漏风险变大"
        },
        {
          "id": "B",
          "text": "权限天然更安全"
        },
        {
          "id": "C",
          "text": "模型永远不会出错"
        },
        {
          "id": "D",
          "text": "工具自动幂等"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：过长上下文会干扰推理并带来成本和安全问题。\n\n易错点：B/C/D错误。\n\n拓展：长上下文不是状态管理的替代品。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q83",
      "type": "single",
      "prompt": "Compaction 的主要作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "提炼长对话/长任务历史，只保留未来需要的信息"
        },
        {
          "id": "B",
          "text": "删除所有状态"
        },
        {
          "id": "C",
          "text": "把所有内容逐字复制"
        },
        {
          "id": "D",
          "text": "让工具不可用"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Compaction 关注有效信息保留，而不是简单清空。\n\n易错点：B/C/D都错误。\n\n拓展：Compaction 应保留目标、约束、进度、失败、产物和等待状态。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q84",
      "type": "single",
      "prompt": "Compaction 和普通摘要的区别更接近哪项？",
      "options": [
        {
          "id": "A",
          "text": "Compaction 面向后续执行需要，普通摘要更偏内容概括"
        },
        {
          "id": "B",
          "text": "Compaction 必须删除关键约束"
        },
        {
          "id": "C",
          "text": "普通摘要一定不能给人看"
        },
        {
          "id": "D",
          "text": "两者完全无关"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Compaction 的目标是让任务继续稳定推进。\n\n易错点：B错误；C过于绝对；D不准确。\n\n拓展：长任务中，压缩结果应服务下一步决策。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q85",
      "type": "single",
      "prompt": "长任务恢复时，最重要的状态信息不包括哪项？",
      "options": [
        {
          "id": "A",
          "text": "当前阶段"
        },
        {
          "id": "B",
          "text": "已完成步骤"
        },
        {
          "id": "C",
          "text": "等待输入状态"
        },
        {
          "id": "D",
          "text": "随机选择的壁纸"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：壁纸通常与任务恢复无关。\n\n易错点：A/B/C都是恢复执行所需的关键状态。\n\n拓展：恢复点设计越清楚，越不容易重复副作用。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q86",
      "type": "single",
      "prompt": "为什么敏感信息不应长期滞留在模型上下文？",
      "options": [
        {
          "id": "A",
          "text": "会增加泄漏和误用风险"
        },
        {
          "id": "B",
          "text": "模型无法处理任何敏感字"
        },
        {
          "id": "C",
          "text": "敏感信息会让 JSON 失效"
        },
        {
          "id": "D",
          "text": "敏感信息只能存在图片里"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：上下文会进入模型调用、日志或 Trace，需要最小化。\n\n易错点：B/C/D错误。\n\n拓展：敏感信息应在系统侧按需取用、脱敏和审计。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q87",
      "type": "single",
      "prompt": "任务状态机设计的价值是什么？",
      "options": [
        {
          "id": "A",
          "text": "让任务的阶段、转移和恢复边界清晰"
        },
        {
          "id": "B",
          "text": "让模型不需要工具"
        },
        {
          "id": "C",
          "text": "让所有异常自动消失"
        },
        {
          "id": "D",
          "text": "让用户不能取消任务"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：状态机有助于取消、恢复、审批和补偿。\n\n易错点：B/C/D错误。\n\n拓展：长生命周期 Agent 任务最好显式建模状态。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q88",
      "type": "single",
      "prompt": "Conversation 历史和长期记忆的关系是什么？",
      "options": [
        {
          "id": "A",
          "text": "Conversation 是对话记录，长期记忆是筛选后可跨会话复用的信息"
        },
        {
          "id": "B",
          "text": "二者永远完全相同"
        },
        {
          "id": "C",
          "text": "长期记忆不能持久化"
        },
        {
          "id": "D",
          "text": "Conversation 只能保存工具结果"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：不是所有对话内容都值得进入长期记忆。\n\n易错点：B/C/D错误。\n\n拓展：记忆写入也需要权限、安全和用户意愿治理。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q89",
      "type": "single",
      "prompt": "上下文组装时最应该遵循什么原则？",
      "options": [
        {
          "id": "A",
          "text": "只放当前推理真正需要的信息"
        },
        {
          "id": "B",
          "text": "越长越好"
        },
        {
          "id": "C",
          "text": "把所有租户数据混合"
        },
        {
          "id": "D",
          "text": "隐藏任务目标"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：上下文是为当前推理服务的精简输入。\n\n易错点：B/C/D都会降低质量或安全性。\n\n拓展：上下文组装是 Runtime 的核心能力之一。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q90",
      "type": "single",
      "prompt": "“系统记住”和“模型看到”的关系应如何处理？",
      "options": [
        {
          "id": "A",
          "text": "系统可以记住更多，但模型只看必要子集"
        },
        {
          "id": "B",
          "text": "模型必须看到全部系统状态"
        },
        {
          "id": "C",
          "text": "系统不能保存任何状态"
        },
        {
          "id": "D",
          "text": "模型看到越多越安全"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：持久状态与模型上下文分离能兼顾连续性和安全性。\n\n易错点：B/D危险；C无法支撑长任务。\n\n拓展：这是 Agent 状态治理的基础原则。",
      "section": "第6章 状态管理"
    },
    {
      "id": "q91",
      "type": "single",
      "prompt": "Workflow 和 Agent 的关系最准确的是？",
      "options": [
        {
          "id": "A",
          "text": "互补：Workflow 管流程正确性，Agent 管步骤内智能性"
        },
        {
          "id": "B",
          "text": "完全互斥"
        },
        {
          "id": "C",
          "text": "Agent 能替代所有 Workflow"
        },
        {
          "id": "D",
          "text": "Workflow 只能用于静态网页"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：生产系统常用 Workflow 包住 Agent。\n\n易错点：B/C/D不准确。\n\n拓展：确定性主干交给 Workflow，不确定性判断交给 Agent。",
      "section": "第7章 Workflow"
    },
    {
      "id": "q92",
      "type": "single",
      "prompt": "Workflow 更适合负责什么？",
      "options": [
        {
          "id": "A",
          "text": "步骤顺序、分支、审批、超时、状态转移"
        },
        {
          "id": "B",
          "text": "自由写诗"
        },
        {
          "id": "C",
          "text": "生成所有业务想法"
        },
        {
          "id": "D",
          "text": "替代数据库"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Workflow 负责流程控制和可靠推进。\n\n易错点：B/C更偏模型能力；D无关。\n\n拓展：把主流程固化能降低 Agent 失控风险。",
      "section": "第7章 Workflow"
    },
    {
      "id": "q93",
      "type": "single",
      "prompt": "Agent 更适合负责什么？",
      "options": [
        {
          "id": "A",
          "text": "意图理解、任务分解、工具选择、复杂判断"
        },
        {
          "id": "B",
          "text": "数据库事务日志压缩"
        },
        {
          "id": "C",
          "text": "网卡驱动"
        },
        {
          "id": "D",
          "text": "硬盘格式化"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这些任务依赖语义理解和不确定性推理。\n\n易错点：B/C/D不是 Agent 的主要职责。\n\n拓展：Agent 节点应嵌入到受控工作流中。",
      "section": "第7章 Workflow"
    },
    {
      "id": "q94",
      "type": "single",
      "prompt": "“Workflow 包住 Agent”是什么意思？",
      "options": [
        {
          "id": "A",
          "text": "主干流程由 Workflow 控制，推理节点调用 Agent"
        },
        {
          "id": "B",
          "text": "把 Workflow 写进模型权重"
        },
        {
          "id": "C",
          "text": "让 Agent 自由删除流程"
        },
        {
          "id": "D",
          "text": "只使用自然语言，不写任何状态"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这样既保留智能性，又保证流程边界可控。\n\n易错点：B/C/D错误。\n\n拓展：这是生产级 Agent 编排的常见模式。",
      "section": "第7章 Workflow"
    },
    {
      "id": "q95",
      "type": "single",
      "prompt": "Durable Execution 解决什么问题？",
      "options": [
        {
          "id": "A",
          "text": "流程崩溃、中断或等待后可从正确状态继续"
        },
        {
          "id": "B",
          "text": "让接口永不失败"
        },
        {
          "id": "C",
          "text": "让模型不需要上下文"
        },
        {
          "id": "D",
          "text": "让所有任务同步执行"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：持久执行关注流程级恢复语义。\n\n易错点：B过于绝对；C/D错误。\n\n拓展：Durable Execution 是长任务系统可靠性的核心能力。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q96",
      "type": "single",
      "prompt": "Durable Execution 和 Retry 的区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "Retry 是局部动作重试，Durable Execution 是流程级断点续跑"
        },
        {
          "id": "B",
          "text": "二者完全一样"
        },
        {
          "id": "C",
          "text": "Retry 只能用于人工审批"
        },
        {
          "id": "D",
          "text": "Durable Execution 只能用于 CSS"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Retry 解决单点故障，持久执行解决长流程恢复。\n\n易错点：B/C/D错误。\n\n拓展：面试时可用“点上容错 vs 面上可靠”概括。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q97",
      "type": "single",
      "prompt": "流程第 7 步崩溃后恢复，理想行为是什么？",
      "options": [
        {
          "id": "A",
          "text": "从最近安全恢复点继续"
        },
        {
          "id": "B",
          "text": "无条件从第 1 步重跑"
        },
        {
          "id": "C",
          "text": "删除所有产物"
        },
        {
          "id": "D",
          "text": "让用户重新输入全部信息"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：恢复点能避免重复副作用和浪费。\n\n易错点：B可能导致重复执行；C/D体验差且不可靠。\n\n拓展：恢复点要结合幂等和补偿设计。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q98",
      "type": "single",
      "prompt": "Durable Execution 必须持久化什么？",
      "options": [
        {
          "id": "A",
          "text": "执行进度、成功步骤、失败步骤、副作用状态和等待状态"
        },
        {
          "id": "B",
          "text": "只持久化模型名称"
        },
        {
          "id": "C",
          "text": "只持久化页面颜色"
        },
        {
          "id": "D",
          "text": "无需持久化任何内容"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这些信息决定恢复时从哪里继续以及哪些动作不能重复。\n\n易错点：B/C/D不足。\n\n拓展：持久状态是恢复语义的基础。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q99",
      "type": "single",
      "prompt": "人工审批节点为什么适合放在 Workflow 中？",
      "options": [
        {
          "id": "A",
          "text": "审批是明确状态转移和等待点"
        },
        {
          "id": "B",
          "text": "审批能提高模型参数"
        },
        {
          "id": "C",
          "text": "审批不需要记录"
        },
        {
          "id": "D",
          "text": "审批必须由模型自动通过"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Workflow 能清晰表达 waiting_for_approval 等状态。\n\n易错点：B/C/D错误。\n\n拓展：审批节点应记录审批人、时间、输入和结果。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q100",
      "type": "single",
      "prompt": "Workflow 中的分支判断应该如何设计？",
      "options": [
        {
          "id": "A",
          "text": "可观测、可回放、可解释"
        },
        {
          "id": "B",
          "text": "完全隐藏，不记录条件"
        },
        {
          "id": "C",
          "text": "只靠模型口头保证"
        },
        {
          "id": "D",
          "text": "每次随机选择"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：分支影响执行路径，必须能复盘。\n\n易错点：B/C/D都会导致排障困难。\n\n拓展：模型参与判断时，也应记录输入、输出和置信依据。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q101",
      "type": "single",
      "prompt": "长任务中等待外部系统返回时，正确做法是？",
      "options": [
        {
          "id": "A",
          "text": "保存等待状态并异步恢复"
        },
        {
          "id": "B",
          "text": "一直阻塞前端请求"
        },
        {
          "id": "C",
          "text": "丢弃 task_id"
        },
        {
          "id": "D",
          "text": "从头轮询所有历史"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：等待状态持久化后可异步继续。\n\n易错点：B容易超时；C无法恢复；D低效。\n\n拓展：等待外部事件是 Durable Execution 的典型场景。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q102",
      "type": "single",
      "prompt": "如果任务中存在副作用，恢复时最需要避免什么？",
      "options": [
        {
          "id": "A",
          "text": "重复执行已成功的副作用动作"
        },
        {
          "id": "B",
          "text": "读取状态"
        },
        {
          "id": "C",
          "text": "记录日志"
        },
        {
          "id": "D",
          "text": "检查幂等键"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：重复副作用可能造成真实业务损失。\n\n易错点：B/C/D都是必要操作。\n\n拓展：恢复逻辑应能识别哪些步骤已生效。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q103",
      "type": "single",
      "prompt": "Workflow 与状态存储的关系是什么？",
      "options": [
        {
          "id": "A",
          "text": "Workflow 的可靠执行依赖状态持久化"
        },
        {
          "id": "B",
          "text": "Workflow 不需要状态"
        },
        {
          "id": "C",
          "text": "状态只能存在模型上下文"
        },
        {
          "id": "D",
          "text": "状态存储只用于图片"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：没有状态持久化，崩溃后很难恢复。\n\n易错点：B/C/D错误。\n\n拓展：状态存储和 Workflow 引擎通常紧密配合。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q104",
      "type": "single",
      "prompt": "哪个任务最需要 Durable Execution？",
      "options": [
        {
          "id": "A",
          "text": "跨多系统、需审批、可能运行数小时的退款流程"
        },
        {
          "id": "B",
          "text": "1+1 计算"
        },
        {
          "id": "C",
          "text": "单句翻译"
        },
        {
          "id": "D",
          "text": "一次只读字典查询"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：长流程、多副作用、异步等待最需要持久执行。\n\n易错点：B/C/D通常不需要复杂恢复机制。\n\n拓展：Durable Execution 的收益随任务复杂度增加而增加。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q105",
      "type": "single",
      "prompt": "为什么不能只靠 Prompt 保证流程正确性？",
      "options": [
        {
          "id": "A",
          "text": "Prompt 无法提供持久状态、审批、幂等和恢复语义"
        },
        {
          "id": "B",
          "text": "Prompt 不能包含中文"
        },
        {
          "id": "C",
          "text": "Prompt 会关闭数据库"
        },
        {
          "id": "D",
          "text": "Prompt 一定比 Workflow 慢"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：流程可靠性需要工程机制，而不是只靠模型遵守指令。\n\n易错点：B/C/D错误。\n\n拓展：Prompt 约束和 Workflow 约束是不同层面的能力。",
      "section": "第7章 Durable Execution"
    },
    {
      "id": "q106",
      "type": "single",
      "prompt": "幂等的定义是什么？",
      "options": [
        {
          "id": "A",
          "text": "操作执行一次和多次，对最终状态影响相同"
        },
        {
          "id": "B",
          "text": "操作永远不会失败"
        },
        {
          "id": "C",
          "text": "操作不能有参数"
        },
        {
          "id": "D",
          "text": "操作必须异步"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：幂等关注重复执行的最终效果一致。\n\n易错点：B/C/D不是幂等定义。\n\n拓展：幂等是重试和恢复的前提。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q107",
      "type": "single",
      "prompt": "实现幂等的常见方式不包括哪项？",
      "options": [
        {
          "id": "A",
          "text": "幂等键"
        },
        {
          "id": "B",
          "text": "唯一约束"
        },
        {
          "id": "C",
          "text": "状态机校验"
        },
        {
          "id": "D",
          "text": "随机重复创建资源"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：随机重复创建资源正是幂等要避免的。\n\n易错点：A/B/C都是常见幂等设计。\n\n拓展：外部业务单号也常用于幂等去重。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q108",
      "type": "single",
      "prompt": "哪类错误适合自动重试？",
      "options": [
        {
          "id": "A",
          "text": "网络抖动、短时超时、临时 5xx"
        },
        {
          "id": "B",
          "text": "权限不足"
        },
        {
          "id": "C",
          "text": "参数非法"
        },
        {
          "id": "D",
          "text": "余额不足"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：瞬时故障有自愈可能，适合有限重试。\n\n易错点：B/C/D属于业务或权限错误，重试通常无效。\n\n拓展：重试策略应区分错误类型。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q109",
      "type": "single",
      "prompt": "哪类错误不适合自动重试？",
      "options": [
        {
          "id": "A",
          "text": "参数非法"
        },
        {
          "id": "B",
          "text": "短时网络抖动"
        },
        {
          "id": "C",
          "text": "临时限流"
        },
        {
          "id": "D",
          "text": "下游短暂 5xx"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：参数非法不会因为重试变合法。\n\n易错点：B/C/D在设置退避和上限后可重试。\n\n拓展：业务错误反复重试只会制造噪声和风险。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q110",
      "type": "single",
      "prompt": "回滚和补偿的主要区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "回滚直接恢复原状态，补偿执行语义上的反向动作"
        },
        {
          "id": "B",
          "text": "补偿只能用于只读查询"
        },
        {
          "id": "C",
          "text": "回滚就是重试"
        },
        {
          "id": "D",
          "text": "二者都不需要记录"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：外部副作用常不能严格回滚，只能补偿。\n\n易错点：B/C/D错误。\n\n拓展：Agent 调外部服务时，补偿比数据库事务回滚更现实。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q111",
      "type": "single",
      "prompt": "邮件发错后的补偿方式更可能是什么？",
      "options": [
        {
          "id": "A",
          "text": "发送更正通知"
        },
        {
          "id": "B",
          "text": "从对方邮箱物理删除邮件"
        },
        {
          "id": "C",
          "text": "假装没有发生"
        },
        {
          "id": "D",
          "text": "重复发送同一封错误邮件"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：邮件发出后通常无法真正撤回，只能语义补偿。\n\n易错点：B通常不可行；C/D错误。\n\n拓展：补偿关注把业务恢复到可接受状态。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q112",
      "type": "single",
      "prompt": "重复扣款后的常见补偿是什么？",
      "options": [
        {
          "id": "A",
          "text": "发起退款"
        },
        {
          "id": "B",
          "text": "再次扣款"
        },
        {
          "id": "C",
          "text": "删除审计日志"
        },
        {
          "id": "D",
          "text": "关闭所有工具"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：退款是对扣款副作用的语义反向动作。\n\n易错点：B加重错误；C违法合规；D不是补偿。\n\n拓展：补偿动作本身也需要幂等和审计。",
      "section": "第8章 可靠性"
    },
    {
      "id": "q113",
      "type": "single",
      "prompt": "Agent 长任务为什么适合异步执行？",
      "options": [
        {
          "id": "A",
          "text": "任务多步、耗时、可能等待外部系统或人工输入"
        },
        {
          "id": "B",
          "text": "因为异步一定更准确"
        },
        {
          "id": "C",
          "text": "因为同步不能返回文本"
        },
        {
          "id": "D",
          "text": "因为异步不需要状态"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：复杂 Agent 任务常超过一次请求响应的时间边界。\n\n易错点：B过于绝对；C/D错误。\n\n拓展：异步通常要配合状态存储和进度通知。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q114",
      "type": "single",
      "prompt": "异步和流式的区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "异步是执行方式，流式是反馈方式"
        },
        {
          "id": "B",
          "text": "异步是反馈方式，流式是数据库"
        },
        {
          "id": "C",
          "text": "二者完全相同"
        },
        {
          "id": "D",
          "text": "流式只能用于图片"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：异步让任务后台执行，流式让用户看到过程。\n\n易错点：B/C/D错误。\n\n拓展：二者组合能兼顾可靠性和体验。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q115",
      "type": "single",
      "prompt": "流式输出的主要价值是什么？",
      "options": [
        {
          "id": "A",
          "text": "实时反馈阶段性进度和中间结果"
        },
        {
          "id": "B",
          "text": "删除任务状态"
        },
        {
          "id": "C",
          "text": "禁止用户查看结果"
        },
        {
          "id": "D",
          "text": "替代所有审计"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：长任务中，流式反馈可以降低用户等待焦虑。\n\n易错点：B/C/D错误。\n\n拓展：流式内容也要注意不要泄漏敏感信息。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q116",
      "type": "single",
      "prompt": "Cancel 设计为什么不能简单杀进程？",
      "options": [
        {
          "id": "A",
          "text": "可能留下不一致状态或中断在副作用中间"
        },
        {
          "id": "B",
          "text": "因为进程不能停止"
        },
        {
          "id": "C",
          "text": "因为取消不需要状态"
        },
        {
          "id": "D",
          "text": "因为杀进程能自动补偿"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：取消需要停在安全边界并保存状态。\n\n易错点：B/C/D错误。\n\n拓展：取消通常是状态转移，而不是粗暴终止。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q117",
      "type": "single",
      "prompt": "Resume 设计为什么不能简单重发请求？",
      "options": [
        {
          "id": "A",
          "text": "可能重复执行已完成步骤或副作用"
        },
        {
          "id": "B",
          "text": "因为请求不能重复发送"
        },
        {
          "id": "C",
          "text": "因为恢复不需要 task_id"
        },
        {
          "id": "D",
          "text": "因为所有任务都无状态"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：恢复应从最近有效状态继续。\n\n易错点：B/C/D错误。\n\n拓展：Resume 依赖 task_id、步骤状态和幂等信息。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q118",
      "type": "single",
      "prompt": "任务取消时合理的状态变化是什么？",
      "options": [
        {
          "id": "A",
          "text": "标记为 cancelling/cancelled，并在安全点停止"
        },
        {
          "id": "B",
          "text": "立即删除所有审计"
        },
        {
          "id": "C",
          "text": "强制重跑所有步骤"
        },
        {
          "id": "D",
          "text": "把状态改成 success"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：状态化取消可保留上下文并避免不一致。\n\n易错点：B/C/D错误。\n\n拓展：取消也应记录操作者和时间。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q119",
      "type": "single",
      "prompt": "长任务中 task_id 的作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "关联状态、进度、产物和恢复操作"
        },
        {
          "id": "B",
          "text": "作为随机装饰"
        },
        {
          "id": "C",
          "text": "替代所有权限"
        },
        {
          "id": "D",
          "text": "只给前端显示"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：task_id 是异步任务跟踪和恢复的核心标识。\n\n易错点：B/C/D不完整或错误。\n\n拓展：task_id 通常还会出现在审计和 Artifact 关联中。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q120",
      "type": "single",
      "prompt": "异步任务的前端体验通常如何优化？",
      "options": [
        {
          "id": "A",
          "text": "用流式进度、中间产物和明确状态反馈"
        },
        {
          "id": "B",
          "text": "让用户一直空白等待"
        },
        {
          "id": "C",
          "text": "永远不显示失败"
        },
        {
          "id": "D",
          "text": "隐藏审批等待"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：用户需要知道任务在做什么、卡在哪里、是否需要自己操作。\n\n易错点：B/C/D体验和可解释性差。\n\n拓展：阶段性输出是复杂 Agent 产品的重要交互设计。",
      "section": "第9章 异步任务"
    },
    {
      "id": "q121",
      "type": "single",
      "prompt": "Agent Runtime 不只是工作流引擎，因为它还要处理什么？",
      "options": [
        {
          "id": "A",
          "text": "模型不确定性、工具循环、上下文、模型路由、权限治理"
        },
        {
          "id": "B",
          "text": "只处理网页颜色"
        },
        {
          "id": "C",
          "text": "只训练模型"
        },
        {
          "id": "D",
          "text": "只存图片"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Runtime 覆盖模型、能力、执行、状态和治理。\n\n易错点：B/C/D都过窄。\n\n拓展：工作流是 Runtime 的一部分或依赖，不等于全部 Runtime。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q122",
      "type": "single",
      "prompt": "编排核心主要负责什么？",
      "options": [
        {
          "id": "A",
          "text": "推进任务流程、管理工具循环、控制状态转移"
        },
        {
          "id": "B",
          "text": "保存大文件"
        },
        {
          "id": "C",
          "text": "训练 tokenizer"
        },
        {
          "id": "D",
          "text": "调整显示器"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：编排核心是运行时推进 Agent 执行的中心。\n\n易错点：B是产物存储；C/D无关。\n\n拓展：编排核心通常要和状态存储配合。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q123",
      "type": "single",
      "prompt": "状态存储主要保存什么？",
      "options": [
        {
          "id": "A",
          "text": "会话、任务、执行进度、等待状态和恢复点"
        },
        {
          "id": "B",
          "text": "工具文档封面图"
        },
        {
          "id": "C",
          "text": "显卡温度曲线"
        },
        {
          "id": "D",
          "text": "网页 CSS"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：状态存储支撑连续对话和 Durable Execution。\n\n易错点：B/C/D不属于核心状态。\n\n拓展：状态存储需要高可靠和明确租户隔离。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q124",
      "type": "single",
      "prompt": "能力注册中心主要管理什么？",
      "options": [
        {
          "id": "A",
          "text": "工具、资源、Skill、Agent 的注册、发现、授权和版本"
        },
        {
          "id": "B",
          "text": "用户鼠标"
        },
        {
          "id": "C",
          "text": "显卡驱动"
        },
        {
          "id": "D",
          "text": "浏览器历史"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：能力注册中心是工具和能力生态的元数据中枢。\n\n易错点：B/C/D无关。\n\n拓展：没有注册中心，大规模工具发现和权限很难治理。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q125",
      "type": "single",
      "prompt": "模型路由层的职责是什么？",
      "options": [
        {
          "id": "A",
          "text": "模型选择、限流、降级、负载均衡和成本控制"
        },
        {
          "id": "B",
          "text": "创建数据库表结构"
        },
        {
          "id": "C",
          "text": "替代所有工具"
        },
        {
          "id": "D",
          "text": "手动画图"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：模型路由决定用哪个模型、如何兜底和控制成本。\n\n易错点：B/C/D不属于模型路由。\n\n拓展：不同任务可以路由到不同能力和成本的模型。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q126",
      "type": "single",
      "prompt": "执行器/隔离层的职责是什么？",
      "options": [
        {
          "id": "A",
          "text": "调用外部系统并隔离模型与内部高权限能力"
        },
        {
          "id": "B",
          "text": "让模型保存所有密钥"
        },
        {
          "id": "C",
          "text": "隐藏所有日志"
        },
        {
          "id": "D",
          "text": "关闭权限"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：执行器是实际工具调用和安全边界。\n\n易错点：B/C/D危险。\n\n拓展：执行器通常和网关、沙箱、代理等机制结合。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q127",
      "type": "single",
      "prompt": "调度与恢复层主要负责什么？",
      "options": [
        {
          "id": "A",
          "text": "异步任务、重试、持久执行、断点续跑、超时处理"
        },
        {
          "id": "B",
          "text": "网页排版"
        },
        {
          "id": "C",
          "text": "替换用户头像"
        },
        {
          "id": "D",
          "text": "训练数据清洗"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这层保障任务能可靠完成或可恢复。\n\n易错点：B/C/D不属于调度恢复。\n\n拓展：调度层需要识别可重试与不可重试错误。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q128",
      "type": "single",
      "prompt": "产物管理层主要管理什么？",
      "options": [
        {
          "id": "A",
          "text": "报告、代码、文件、表格等 Artifact 的存储、版本和权限"
        },
        {
          "id": "B",
          "text": "临时屏幕亮度"
        },
        {
          "id": "C",
          "text": "模型梯度"
        },
        {
          "id": "D",
          "text": "键盘布局"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Artifact 是复杂任务的重要输出，需要独立治理。\n\n易错点：B/C/D不相关。\n\n拓展：产物权限不应弱于原始数据权限。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q129",
      "type": "single",
      "prompt": "控制面主要负责什么？",
      "options": [
        {
          "id": "A",
          "text": "策略、权限、审批、路由、版本、灰度"
        },
        {
          "id": "B",
          "text": "实际工具执行"
        },
        {
          "id": "C",
          "text": "文件二进制存储"
        },
        {
          "id": "D",
          "text": "模型矩阵乘法"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：控制面管理规则和决策。\n\n易错点：B更偏数据面；C是存储；D是推理底层。\n\n拓展：控制面变化不应要求重写所有执行逻辑。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q130",
      "type": "single",
      "prompt": "数据面主要负责什么？",
      "options": [
        {
          "id": "A",
          "text": "上下文装配、模型调用、工具执行、产物读写"
        },
        {
          "id": "B",
          "text": "审批策略制定"
        },
        {
          "id": "C",
          "text": "权限规则定义"
        },
        {
          "id": "D",
          "text": "灰度配置"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：数据面负责真实运行路径。\n\n易错点：B/C/D更偏控制面。\n\n拓展：控制面和数据面分离有助于扩展和审计。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q131",
      "type": "single",
      "prompt": "为什么能力注册、状态存储、产物存储要分开？",
      "options": [
        {
          "id": "A",
          "text": "三者数据形态、读写模式和治理目标不同"
        },
        {
          "id": "B",
          "text": "为了让系统更难维护"
        },
        {
          "id": "C",
          "text": "因为数据库不能存文本"
        },
        {
          "id": "D",
          "text": "因为产物不能加权限"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：混在一起短期简单，长期治理困难。\n\n易错点：B/C/D错误。\n\n拓展：分离存储有助于性能优化、权限隔离和生命周期管理。",
      "section": "第10章 Agent Runtime"
    },
    {
      "id": "q132",
      "type": "single",
      "prompt": "多租户 Runtime 最危险的问题是什么？",
      "options": [
        {
          "id": "A",
          "text": "串租户状态、权限、缓存或凭据"
        },
        {
          "id": "B",
          "text": "模型输出太短"
        },
        {
          "id": "C",
          "text": "工具名太清晰"
        },
        {
          "id": "D",
          "text": "日志过于完整"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：跨租户泄漏是企业级 Agent 的高危事故。\n\n易错点：B/C/D不是核心风险。\n\n拓展：所有对象都应 tenant-aware。",
      "section": "第12章 统一治理"
    },
    {
      "id": "q133",
      "type": "single",
      "prompt": "哪些对象应该 tenant-aware？",
      "options": [
        {
          "id": "A",
          "text": "会话、任务、记忆、工具、凭据、缓存、Artifact、审计日志"
        },
        {
          "id": "B",
          "text": "只有最终答案"
        },
        {
          "id": "C",
          "text": "只有前端按钮"
        },
        {
          "id": "D",
          "text": "只有模型名称"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：多租户隔离要覆盖运行链路所有对象。\n\n易错点：B/C/D范围过窄。\n\n拓展：缓存和凭据尤其容易被忽略。",
      "section": "第12章 统一治理"
    },
    {
      "id": "q134",
      "type": "single",
      "prompt": "审计 Trace 中为什么要记录模型为什么选择工具？",
      "options": [
        {
          "id": "A",
          "text": "便于排查误调用、路由错误和安全事故"
        },
        {
          "id": "B",
          "text": "为了让日志更花哨"
        },
        {
          "id": "C",
          "text": "为了替代权限"
        },
        {
          "id": "D",
          "text": "为了隐藏工具结果"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：选择原因是理解 Agent 决策链的重要信息。\n\n易错点：B/C/D错误。\n\n拓展：Trace 不只记录结果，也要记录决策过程和中间状态。",
      "section": "第12章 统一治理"
    },
    {
      "id": "q135",
      "type": "single",
      "prompt": "限流和配额在 Agent Runtime 中的作用是什么？",
      "options": [
        {
          "id": "A",
          "text": "控制成本、防止滥用、保护下游服务"
        },
        {
          "id": "B",
          "text": "让所有请求失败"
        },
        {
          "id": "C",
          "text": "替代 Schema"
        },
        {
          "id": "D",
          "text": "删除工具"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Agent 可能自动发起多轮调用，限流配额非常重要。\n\n易错点：B/C/D错误。\n\n拓展：限流应按用户、租户、工具和模型等维度设计。",
      "section": "第12章 统一治理"
    },
    {
      "id": "q136",
      "type": "single",
      "prompt": "Tool 和 Skill 的核心区别是什么？",
      "options": [
        {
          "id": "A",
          "text": "Tool 是原子动作，Skill 是任务方法封装"
        },
        {
          "id": "B",
          "text": "Tool 只能写文档，Skill 只能查天气"
        },
        {
          "id": "C",
          "text": "二者完全一样"
        },
        {
          "id": "D",
          "text": "Skill 不能版本化"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Tool 解决能做什么，Skill 解决该怎么做。\n\n易错点：B/C/D错误。\n\n拓展：Skill 通常包含说明、示例、约束、脚本和评测。",
      "section": "第11章 Skills"
    },
    {
      "id": "q137",
      "type": "single",
      "prompt": "为什么 Agent 系统需要 Skill？",
      "options": [
        {
          "id": "A",
          "text": "把稳定任务经验资产化、复用化、可评测化"
        },
        {
          "id": "B",
          "text": "为了替代所有工具"
        },
        {
          "id": "C",
          "text": "为了取消权限"
        },
        {
          "id": "D",
          "text": "为了让 Prompt 永远更长"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Skill 把方法论沉淀为平台能力资产。\n\n易错点：B/C/D错误。\n\n拓展：好的 Skill 能提升一致性并降低重复设计成本。",
      "section": "第11章 Skills"
    },
    {
      "id": "q138",
      "type": "single",
      "prompt": "下面哪个更像 Skill？",
      "options": [
        {
          "id": "A",
          "text": "论文格式检查的一整套流程、提示、示例和标准"
        },
        {
          "id": "B",
          "text": "一个读取文件 API"
        },
        {
          "id": "C",
          "text": "一个加法函数"
        },
        {
          "id": "D",
          "text": "一次 HTTP ping"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：它封装的是任务方法而非单个动作。\n\n易错点：B/C/D更像 Tool 或基础接口。\n\n拓展：复杂任务通常需要 Skill + Tool 组合。",
      "section": "第11章 Skills"
    },
    {
      "id": "q139",
      "type": "single",
      "prompt": "Skill 与 MCP、A2A 的关系是什么？",
      "options": [
        {
          "id": "A",
          "text": "MCP/A2A 是协议层，Skill 是能力使用方法包"
        },
        {
          "id": "B",
          "text": "Skill 是显卡协议"
        },
        {
          "id": "C",
          "text": "MCP 是 Skill 的同义词"
        },
        {
          "id": "D",
          "text": "A2A 只能调用 Skill 不能调用 Agent"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Skill 构建在工具、资源、Agent 和 Prompt 之上。\n\n易错点：B/C/D错误。\n\n拓展：Skill 不是协议，而是能力资产形态。",
      "section": "第11章 Skills"
    },
    {
      "id": "q140",
      "type": "single",
      "prompt": "Progressive Disclosure 在 Skill 中指什么？",
      "options": [
        {
          "id": "A",
          "text": "先加载元数据，相关时再加载完整 Skill 内容"
        },
        {
          "id": "B",
          "text": "每次加载所有 Skill 全文"
        },
        {
          "id": "C",
          "text": "永远不加载 Skill"
        },
        {
          "id": "D",
          "text": "随机删除 Skill"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：渐进式暴露减少上下文污染和成本。\n\n易错点：B正是要避免的；C/D错误。\n\n拓展：工具和 Skill 都可以采用这种按需加载思想。",
      "section": "第11章 Skills"
    },
    {
      "id": "q141",
      "type": "single",
      "prompt": "Skill 数量多时，全量塞入上下文会带来什么问题？",
      "options": [
        {
          "id": "A",
          "text": "Token 成本上升、注意力污染、选择质量下降"
        },
        {
          "id": "B",
          "text": "权限天然增强"
        },
        {
          "id": "C",
          "text": "模型永远更准"
        },
        {
          "id": "D",
          "text": "系统不需要评测"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：过多 Skill 会增加噪声和成本。\n\n易错点：B/C/D错误。\n\n拓展：Skill 路由和检索是规模化后的必要能力。",
      "section": "第11章 Skills"
    },
    {
      "id": "q142",
      "type": "single",
      "prompt": "Skill 为什么需要版本管理？",
      "options": [
        {
          "id": "A",
          "text": "便于评测、回滚、灰度和变更追踪"
        },
        {
          "id": "B",
          "text": "为了每天随机变化"
        },
        {
          "id": "C",
          "text": "为了禁止复用"
        },
        {
          "id": "D",
          "text": "为了取消安全审查"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Skill 影响任务行为，变更必须可控。\n\n易错点：B/C/D错误。\n\n拓展：Skill 的版本变更也应该进入回归测试。",
      "section": "第11章 Skills"
    },
    {
      "id": "q143",
      "type": "single",
      "prompt": "Skill 评测主要回答什么问题？",
      "options": [
        {
          "id": "A",
          "text": "它是否提升成功率、降低成本、提高一致性或降低风险"
        },
        {
          "id": "B",
          "text": "它是否名字最长"
        },
        {
          "id": "C",
          "text": "它是否包含最多废话"
        },
        {
          "id": "D",
          "text": "它是否完全不需要工具"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：Skill 是能力资产，必须用效果衡量。\n\n易错点：B/C/D不是评测目标。\n\n拓展：不合格 Skill 应回滚、下线或重写。",
      "section": "第11章 Skills"
    },
    {
      "id": "q144",
      "type": "single",
      "prompt": "Skill 的安全风险不包括哪项？",
      "options": [
        {
          "id": "A",
          "text": "隐式权限放大"
        },
        {
          "id": "B",
          "text": "知识过时"
        },
        {
          "id": "C",
          "text": "注入和供应链风险"
        },
        {
          "id": "D",
          "text": "必然提升所有任务准确率"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：Skill 不一定提升效果，且可能引入风险。\n\n易错点：A/B/C都是真实风险。\n\n拓展：Skill 也要遵循最小依赖和安全审查。",
      "section": "第11章 Skills"
    },
    {
      "id": "q145",
      "type": "single",
      "prompt": "一个好的 Skill 最不应该是什么？",
      "options": [
        {
          "id": "A",
          "text": "不可评测、不可版本化、散落在一次性 Prompt 里的经验"
        },
        {
          "id": "B",
          "text": "有适用边界"
        },
        {
          "id": "C",
          "text": "有示例"
        },
        {
          "id": "D",
          "text": "有回滚机制"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：这种 Skill 无法平台化治理。\n\n易错点：B/C/D都是好的 Skill 设计要素。\n\n拓展：Skill 的目标是资产化，而不是把 Prompt 写得更长。",
      "section": "第11章 Skills"
    },
    {
      "id": "q146",
      "type": "single",
      "prompt": "退款处理 Agent 中，查询客户和扣款记录属于什么工具类型？",
      "options": [
        {
          "id": "A",
          "text": "只读工具"
        },
        {
          "id": "B",
          "text": "高风险副作用工具"
        },
        {
          "id": "C",
          "text": "补偿动作"
        },
        {
          "id": "D",
          "text": "人工审批"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：查询不改变外部业务状态，可以作为只读工具处理。\n\n易错点：B/C/D不符合查询动作语义。\n\n拓展：只读查询通常可以并行，但仍要遵循权限。",
      "section": "第13章 综合案例"
    },
    {
      "id": "q147",
      "type": "single",
      "prompt": "退款处理 Agent 中，创建退款工单属于什么？",
      "options": [
        {
          "id": "A",
          "text": "副作用型工具调用"
        },
        {
          "id": "B",
          "text": "只读资源读取"
        },
        {
          "id": "C",
          "text": "普通文本摘要"
        },
        {
          "id": "D",
          "text": "模型训练"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：创建工单会改变外部系统状态，必须治理。\n\n易错点：B/C/D不符合。\n\n拓展：副作用动作应做 Schema、权限、幂等和审计校验。",
      "section": "第13章 综合案例"
    },
    {
      "id": "q148",
      "type": "single",
      "prompt": "退款工单创建接口超时时，为什么不能盲目重试？",
      "options": [
        {
          "id": "A",
          "text": "可能重复创建工单，需要幂等键去重"
        },
        {
          "id": "B",
          "text": "因为超时一定表示成功"
        },
        {
          "id": "C",
          "text": "因为重试不需要状态"
        },
        {
          "id": "D",
          "text": "因为工具不能返回错误"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：超时状态不明确，重复调用可能产生重复副作用。\n\n易错点：B过于绝对；C/D错误。\n\n拓展：幂等键可用 customer_id + payment_id + reason 等组合生成。",
      "section": "第13章 综合案例"
    },
    {
      "id": "q149",
      "type": "single",
      "prompt": "退款金额较大时，模型最合理的行为是什么？",
      "options": [
        {
          "id": "A",
          "text": "生成审批材料和草稿，等待人工确认"
        },
        {
          "id": "B",
          "text": "直接退款并删除日志"
        },
        {
          "id": "C",
          "text": "反复调用扣款接口"
        },
        {
          "id": "D",
          "text": "忽略权限继续执行"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：高风险金额应进入审批流，模型负责准备材料。\n\n易错点：B/C/D危险。\n\n拓展：审批节点是 Workflow 和 Runtime 治理的结合点。",
      "section": "第13章 综合案例"
    },
    {
      "id": "q150",
      "type": "single",
      "prompt": "退款流程等待审批时系统重启，正确恢复依赖什么？",
      "options": [
        {
          "id": "A",
          "text": "Durable Execution 保存 task_id、阶段、证据、草稿和等待状态"
        },
        {
          "id": "B",
          "text": "让用户重新讲一遍所有内容"
        },
        {
          "id": "C",
          "text": "删除工单草稿"
        },
        {
          "id": "D",
          "text": "从头重复所有副作用"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：持久执行可以从 waiting_for_approval 继续。\n\n易错点：B体验差；C丢失进度；D可能重复副作用。\n\n拓展：这个案例串联了 Function Calling、Workflow、幂等、审批、状态和审计。",
      "section": "第13章 综合案例"
    }
  ]
});
