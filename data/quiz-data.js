window.QUIZ_DATA = {
  version: 1,
  topics: [
    {
      id: "rag-basics",
      title: "RAG 基础链路",
      source: "rag-learning/rag-basics.md",
      summary: [
        "RAG 的主链路通常包括数据解析、切分、向量化、召回、重排、上下文组装和生成。",
        "检索质量不只取决于 embedding，chunk 粒度、元数据和重排策略都会影响最终答案。",
        "生成阶段需要忠实使用证据，缺少证据时应该拒答或说明不确定。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "企业级 RAG 中，哪一步最直接决定模型能看到哪些证据？",
          options: [
            { id: "A", text: "检索召回与上下文组装" },
            { id: "B", text: "前端按钮颜色" },
            { id: "C", text: "代码仓库名称" },
            { id: "D", text: "提交信息格式" }
          ],
          answer: "A",
          explanation: "召回和上下文组装决定候选证据是否进入模型输入，是 RAG 答案质量的关键环节。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "当检索不到可靠证据时，更稳妥的 RAG 行为是什么？",
          options: [
            { id: "A", text: "编造一个看起来合理的答案" },
            { id: "B", text: "说明证据不足，并给出可继续检索的方向" },
            { id: "C", text: "随机选择历史答案" },
            { id: "D", text: "只输出关键词" }
          ],
          answer: "B",
          explanation: "RAG 的可信度来自证据约束，证据不足时应该降低断言强度或拒答。"
        }
      ]
    },
    {
      id: "hybrid-retrieval",
      title: "融合检索、查询改写与记忆",
      source: "rag-learning/hybrid-retrieval-query-rewriting-memory-system.md",
      summary: [
        "融合检索会组合关键词检索、向量检索和结构化过滤，以减少单一路线的漏召回。",
        "查询改写用于补全上下文、消歧和拆解复杂问题，但需要避免改写偏离用户原意。",
        "记忆系统要区分短期会话状态、长期用户偏好和可审计的事实知识。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "融合检索相比单纯向量检索的主要收益是什么？",
          options: [
            { id: "A", text: "完全不需要索引" },
            { id: "B", text: "能结合关键词、语义和过滤条件提升召回稳定性" },
            { id: "C", text: "可以跳过权限控制" },
            { id: "D", text: "能保证生成内容永远正确" }
          ],
          answer: "B",
          explanation: "不同检索路线互补，可以缓解关键词精确匹配和语义泛化各自的短板。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "查询改写最需要防范的问题是什么？",
          options: [
            { id: "A", text: "改写后偏离用户真实意图" },
            { id: "B", text: "答案字体变小" },
            { id: "C", text: "题库文件变多" },
            { id: "D", text: "浏览器缓存增加" }
          ],
          answer: "A",
          explanation: "改写是为了提高检索质量，但如果引入错误假设，会把系统带向错误证据。"
        }
      ]
    },
    {
      id: "advanced-rag-engineering",
      title: "RAG 进阶工程体系",
      source: "rag-learning/advanced-rag-engineering-systems.md",
      summary: [
        "企业级 RAG 的基础能力包括权限隔离、检索质量、重排、上下文组装、忠实生成、审计追踪和失败排障。",
        "权限治理必须贯穿数据接入、索引构建、检索执行、重排、上下文组装、输出和审计日志。",
        "Agentic RAG 和 GraphRAG 属于进阶扩展，应该建立在基础 RAG 稳定可控之后。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "企业级 RAG 上线的安全底线更接近哪一项？",
          options: [
            { id: "A", text: "每个问题都必须百分百答对" },
            { id: "B", text: "绝不能泄露用户无权访问的信息" },
            { id: "C", text: "必须使用最大的模型" },
            { id: "D", text: "必须优先做 GraphRAG" }
          ],
          answer: "B",
          explanation: "幻觉主要是质量问题，越权泄露则是安全和合规问题，通常更影响能否上线。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "为什么不建议在基础链路不稳时直接引入 Agentic RAG？",
          options: [
            { id: "A", text: "会让系统更复杂，排障更困难" },
            { id: "B", text: "会让 Markdown 无法显示" },
            { id: "C", text: "会自动删除索引" },
            { id: "D", text: "会禁止重排模型工作" }
          ],
          answer: "A",
          explanation: "进阶能力依赖稳定的解析、检索、权限和追踪基础，否则复杂性会放大问题。"
        }
      ]
    },
    {
      id: "ppo-notes",
      title: "PPO 与 RL 算法扩展",
      source: "agent-learning-docs/reinforcement-learning-algorithms/ppo_rl_algorithms_notes.md",
      summary: [
        "PPO 通常先用旧策略 rollout，再用新旧策略概率比和 advantage 做受约束更新。",
        "clip 机制不是全局停止更新，而是限制样本继续朝过大风险方向变化。",
        "DPO、GRPO、DAPO、OPD 等方法需要从是否在线采样、是否训练 critic、监督信号来源等角度区分。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "PPO 中 ratio 的核心含义是什么？",
          options: [
            { id: "A", text: "新策略与旧策略在同一动作上的概率比" },
            { id: "B", text: "训练集和验证集的样本比" },
            { id: "C", text: "prompt 长度和 response 长度的比例" },
            { id: "D", text: "reward model 参数量和 actor 参数量的比例" }
          ],
          answer: "A",
          explanation: "PPO 通过新旧策略概率比衡量当前更新相对 rollout 策略的偏移。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "关于 PPO clip，哪种理解更准确？",
          options: [
            { id: "A", text: "clip 后所有梯度都会消失" },
            { id: "B", text: "clip 用于限制危险方向上的过大策略更新" },
            { id: "C", text: "clip 只用于 value model，不影响 actor" },
            { id: "D", text: "clip 等价于 KL 全分布精确计算" }
          ],
          answer: "B",
          explanation: "clip 的目标是稳定策略更新，而不是简单地让所有越界样本停止学习。"
        }
      ]
    },
    {
      id: "credit-assignment",
      title: "Credit Assignment",
      source: "agent-learning-docs/reinforcement-learning-algorithms/Credit_Assignment.md",
      summary: [
        "Credit assignment 关注如何把最终结果的好坏分配到中间动作、步骤或 token。",
        "稀疏奖励会让学习信号难以定位，过程奖励和价值估计可以缓解这一问题。",
        "在长链路任务中，错误定位能力直接影响策略改进效率。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "Credit assignment 要解决的核心问题是什么？",
          options: [
            { id: "A", text: "如何把结果反馈归因到具体步骤或动作" },
            { id: "B", text: "如何压缩图片大小" },
            { id: "C", text: "如何选择 Git 分支名" },
            { id: "D", text: "如何禁用所有 reward" }
          ],
          answer: "A",
          explanation: "长序列决策中，最终 reward 需要被合理分配到产生影响的中间行为。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "稀疏奖励最容易带来的困难是什么？",
          options: [
            { id: "A", text: "模型很难知道哪些中间动作导致了成败" },
            { id: "B", text: "文件名必须变成英文" },
            { id: "C", text: "无法保存 Markdown" },
            { id: "D", text: "所有样本都会变成正例" }
          ],
          answer: "A",
          explanation: "只有最终反馈时，学习算法难以判断中间哪些选择值得强化或修正。"
        }
      ]
    },
    {
      id: "verl-design",
      title: "veRL 设计思路",
      source: "agent-learning-docs/veRL/verl_author_design_thinking_part1.md",
      summary: [
        "veRL 相关笔记关注大模型强化学习训练系统的设计取舍。",
        "工程系统需要在 rollout、训练、调度、资源利用和可扩展性之间做平衡。",
        "理解作者设计思路有助于把算法概念落到可运行的训练框架中。"
      ],
      questions: [
        {
          id: "q1",
          type: "single",
          prompt: "训练系统设计中，rollout 与训练之间通常需要重点平衡什么？",
          options: [
            { id: "A", text: "吞吐、资源利用和数据新鲜度" },
            { id: "B", text: "网页背景色和按钮圆角" },
            { id: "C", text: "仓库 star 数和 fork 数" },
            { id: "D", text: "文件扩展名和图标样式" }
          ],
          answer: "A",
          explanation: "RL 训练系统要协调采样、训练和资源调度，否则容易出现瓶颈或数据滞后。"
        },
        {
          id: "q2",
          type: "single",
          prompt: "阅读 veRL 设计笔记的主要价值是什么？",
          options: [
            { id: "A", text: "理解算法如何落到工程框架和资源调度中" },
            { id: "B", text: "让所有模型无需训练" },
            { id: "C", text: "替代所有评测指标" },
            { id: "D", text: "自动生成 GitHub token" }
          ],
          answer: "A",
          explanation: "系统设计笔记帮助把 PPO、GRPO 等训练逻辑和真实工程约束连接起来。"
        }
      ]
    }
  ]
};
