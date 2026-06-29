window.QUIZ_DATA = window.QUIZ_DATA || { topics: [] };
window.QUIZ_DATA.topics.unshift({
  "id": "ppo-rl-algorithms-150",
  "title": "PPO 与强化学习算法（150题）",
  "source": "question-banks/ppo-rl-algorithms-quiz-150.json",
  "summary": [
    "高质量结构化 JSON 题库，共 150 道单选题。",
    "覆盖章节：第1章 总览与学习路径、第2章 PPO符号与Rollout、第3章 PPO KL、Reward与GAE、第4章 PPO Loss、Clip与稳定性、第5章 REINFORCE与RLOO、第6章 Actor-Critic、A2C与TRPO 等",
    "每题保留难度、答案、分选项解析和拓展说明，用来替换原先的 PPO 两题示例。"
  ],
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "prompt": "关于【推荐学习顺序】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "C",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "D",
          "text": "先学 REINFORCE/RLOO，再学 Actor-Critic/A2C、TRPO、PPO、DPO、GRPO、DAPO、OPD，更符合概念依赖关系。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这个顺序从最朴素 policy gradient 到 value、trust region、clip、偏好优化、无 critic 组内优化和蒸馏，逐步增加复杂度。\n\n其他选项：A: 不正确。这描述的是 DPO，不是当前概念。\nB: 不正确。这描述的是 TRPO，不是当前概念。\nC: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：先建立策略梯度直觉，再理解 PPO/DAPO 会更稳。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q2",
      "type": "single",
      "prompt": "关于【REINFORCE 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "B",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它是最朴素的 reward 乘 logprob 策略梯度方法。"
        },
        {
          "id": "D",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。REINFORCE 直接体现“reward 高就提高轨迹概率，reward 低就降低轨迹概率”的本质。\n\n其他选项：A: 不正确。这描述的是 OPD，不是当前概念。\nB: 不正确。这描述的是 DPO，不是当前概念。\nD: 不正确。这描述的是 TRPO，不是当前概念。\n\n拓展：REINFORCE 是理解 PPO、GRPO 等方法的底层入口。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q3",
      "type": "single",
      "prompt": "关于【RLOO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "B",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "C",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "D",
          "text": "它对同一个 prompt 多采样，并用其它回答的平均 reward 作为 leave-one-out baseline。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。RLOO 的优势在于同题内部比较，能降低不同 prompt 难度差异带来的方差。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是当前概念。\nB: 不正确。这描述的是 OPD，不是当前概念。\nC: 不正确。这描述的是 DPO，不是当前概念。\n\n拓展：RLOO 与 GRPO 都利用同题多答的相对好坏。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q4",
      "type": "single",
      "prompt": "关于【Actor-Critic 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "B",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "Actor 负责产生动作，Critic 负责估计 value，advantage 来自 value 误差或 GAE。"
        },
        {
          "id": "D",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。这是 PPO critic/value 体系的基础。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是当前概念。\nB: 不正确。这描述的是 DPO，不是当前概念。\nD: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：先理解 value baseline，PPO 的 advantage 才容易理解。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q5",
      "type": "single",
      "prompt": "关于【TRPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "B",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "D",
          "text": "它用显式 KL trust region 限制策略更新幅度，是 PPO 的前辈。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。TRPO 的核心是提高 reward 的同时防止新策略离旧策略太远。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是当前概念。\nB: 不正确。这描述的是 DPO，不是当前概念。\nC: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：TRPO 更理论，PPO 更工程。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q6",
      "type": "single",
      "prompt": "关于【PPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "B",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "C",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "D",
          "text": "它用旧策略 rollout、advantage 和 ratio clip 更新策略，是 RLHF 经典主线。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。PPO 的核心是 probability ratio clipping 近似 trust region。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是当前概念。\nB: 不正确。这描述的是 OPD，不是当前概念。\nC: 不正确。这描述的是 DPO，不是当前概念。\n\n拓展：PPO 常配合 RM、critic、ref model、KL penalty。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q7",
      "type": "single",
      "prompt": "关于【DPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化策略，通常不需要在线 rollout、reward model 和 critic。"
        },
        {
          "id": "D",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。DPO 是离线偏好优化路线，工程简单但在线探索弱。\n\n其他选项：A: 不正确。这描述的是 DPO，不是当前概念。\nB: 不正确。这描述的是 TRPO，不是当前概念。\nD: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：DPO 适合已有高质量偏好对的场景。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q8",
      "type": "single",
      "prompt": "关于【GRPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "B",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "C",
          "text": "它用同 prompt 多回答的组内相对 reward 构造 advantage，通常不需要 critic。"
        },
        {
          "id": "D",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。GRPO 是无 critic 的 PPO-style 变体。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是当前概念。\nB: 不正确。这描述的是 OPD，不是当前概念。\nD: 不正确。这描述的是 DPO，不是当前概念。\n\n拓展：可验证数学、代码、格式任务常用 GRPO。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q9",
      "type": "single",
      "prompt": "关于【DAPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是面向长 CoT RLVR 的稳定训练配方，而不是完全重做一个 RL 框架。"
        },
        {
          "id": "B",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "D",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。DAPO 修正 GRPO/PPO-style 长推理训练中的有效样本、长度、熵坍缩等问题。\n\n其他选项：B: 不正确。这描述的是 DPO，不是当前概念。\nC: 不正确。这描述的是 TRPO，不是当前概念。\nD: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：DAPO 的技巧适合长 CoT 训练不稳定时使用。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q10",
      "type": "single",
      "prompt": "关于【OPD 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "C",
          "text": "它把 on-policy rollout 和 teacher token-level distillation 结合起来。"
        },
        {
          "id": "D",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。OPD 的状态来自学生自己访问到的位置，teacher 在这些位置提供分布指导。\n\n其他选项：A: 不正确。这描述的是 DPO，不是当前概念。\nB: 不正确。这描述的是 OPD，不是当前概念。\nD: 不正确。这描述的是 TRPO，不是当前概念。\n\n拓展：OPD 与普通 SFT 的差别在于状态分布来自学生。",
      "section": "第1章 总览与学习路径",
      "difficulty": "基础"
    },
    {
      "id": "q11",
      "type": "single",
      "prompt": "关于【GTPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "C",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "D",
          "text": "它用 policy entropy 给高不确定性的关键 token 分配更多 credit。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。GTPO 试图改善 response-level advantage 广播过粗的问题。\n\n其他选项：A: 不正确。这描述的是 DPO，不是当前概念。\nB: 不正确。这描述的是 TRPO，不是当前概念。\nC: 不正确。这描述的是 OPD，不是当前概念。\n\n拓展：高 entropy 常表示模型在此处有关键选择。",
      "section": "第1章 总览与学习路径",
      "difficulty": "中等"
    },
    {
      "id": "q12",
      "type": "single",
      "prompt": "关于【DGPO 的定位】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "B",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "D",
          "text": "它结合 reference 分布偏移和 entropy gate 来分配 token-level credit。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。DGPO 不只看 entropy，还看当前 policy 相对 reference 是否有显著分布偏移。\n\n其他选项：A: 不正确。这描述的是 OPD，不是当前概念。\nB: 不正确。这描述的是 DPO，不是当前概念。\nC: 不正确。这描述的是 TRPO，不是当前概念。\n\n拓展：DGPO 用 Hellinger distance 衡量分布偏移。",
      "section": "第1章 总览与学习路径",
      "difficulty": "中等"
    },
    {
      "id": "q13",
      "type": "single",
      "prompt": "关于【方法选型】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "B",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "C",
          "text": "只有偏好对时优先 DPO；可验证同题多采样时优先 GRPO；长 CoT GRPO 不稳时考虑 DAPO。"
        },
        {
          "id": "D",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。不同方法适配的数据来源和训练信号不同，不能一刀切。\n\n其他选项：A: 不正确。这描述的是 OPD，不是当前概念。\nB: 不正确。这描述的是 TRPO，不是当前概念。\nD: 不正确。这描述的是 DPO，不是当前概念。\n\n拓展：面试中讲清“什么时候不用某方法”很加分。",
      "section": "第1章 总览与学习路径",
      "difficulty": "中等"
    },
    {
      "id": "q14",
      "type": "single",
      "prompt": "关于【critic-based 方法的价值】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "C",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "D",
          "text": "长程 agentic RL 中，critic-based 方法仍然重要，因为长时延 credit assignment 更难。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。短程可验证任务可以用组内 reward，但长程任务往往需要 value 估计辅助。\n\n其他选项：A: 不正确。这描述的是 DPO，不是当前概念。\nB: 不正确。这描述的是 OPD，不是当前概念。\nC: 不正确。这描述的是 TRPO，不是当前概念。\n\n拓展：无 critic 不是所有场景的最优解。",
      "section": "第1章 总览与学习路径",
      "difficulty": "中等"
    },
    {
      "id": "q15",
      "type": "single",
      "prompt": "关于【整份笔记主线】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "算法演化围绕方差降低、策略更新约束、偏好数据利用、无 critic 组内优化和 token-level credit assignment 展开。"
        },
        {
          "id": "B",
          "text": "它是显式二阶 KL 约束优化，通常需要共轭梯度和线搜索。"
        },
        {
          "id": "C",
          "text": "它让学生模型先自己 rollout，再由 teacher 在学生实际状态上提供 token-level 指导。"
        },
        {
          "id": "D",
          "text": "它是离线偏好优化，只依赖 chosen/rejected 偏好对，通常不做在线 rollout。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。这些方法不是孤立公式，而是在解决不同训练瓶颈。\n\n其他选项：B: 不正确。这描述的是 TRPO，不是当前概念。\nC: 不正确。这描述的是 OPD，不是当前概念。\nD: 不正确。这描述的是 DPO，不是当前概念。\n\n拓展：理解问题意识比背公式更关键。",
      "section": "第1章 总览与学习路径",
      "difficulty": "中等"
    },
    {
      "id": "q16",
      "type": "single",
      "prompt": "关于【prompt x】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "B",
          "text": "它是给模型的输入问题或任务条件，response y 在它的条件下生成。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。PPO 符号中 x=prompt，y=(a_1,...,a_T)。\n\n其他选项：A: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\nD: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：prompt 是所有 logprob、reward 和 value 计算的条件。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q17",
      "type": "single",
      "prompt": "关于【response y】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是模型生成的 token 序列，通常写成 y=(a_1,a_2,...,a_T)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。LLM 中完整回答是一条 trajectory，token 是其中的 action。\n\n其他选项：A: 不正确。这描述的是 pi_ref，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：response-level reward 经常作用在整条 y 上。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q18",
      "type": "single",
      "prompt": "关于【状态 s_t】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它通常表示当前 prompt 加上已生成前缀，即 s_t=(x,a_<t)。"
        },
        {
          "id": "D",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。下一 token 的分布依赖 prompt 和此前 token。\n\n其他选项：A: 不正确。这描述的是 pi_ref，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nD: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：在 agent 任务中，状态还可能包含工具观察。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q19",
      "type": "single",
      "prompt": "关于【动作 a_t】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "B",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "C",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "D",
          "text": "在 LLM 场景中，它通常就是当前位置生成的 token。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。笔记明确把 token 类比为一步 action。\n\n其他选项：A: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nB: 不正确。这描述的是 critic，不是当前概念。\nC: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：在 agent 场景中，action 也可以是工具调用或代码执行。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q20",
      "type": "single",
      "prompt": "关于【pi_theta】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是正在更新的 actor policy。"
        },
        {
          "id": "B",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。PPO 更新的主体就是 pi_theta。\n\n其他选项：B: 不正确。这描述的是 pi_ref，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\nD: 不正确。这描述的是 RM 或 verifier，不是当前概念。\n\n拓展：pi_theta 与 pi_old 的概率比决定 actor 更新幅度。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q21",
      "type": "single",
      "prompt": "关于【pi_old】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 rollout 时冻结的旧策略，用于生成样本并计算新旧策略概率比。"
        },
        {
          "id": "B",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "C",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "D",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。old_logprob 来自 pi_old，是 rho=exp(new-old) 的基准。\n\n其他选项：B: 不正确。这描述的是 critic，不是当前概念。\nC: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nD: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：不要把 pi_old 和 pi_ref 混淆。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q22",
      "type": "single",
      "prompt": "关于【pi_ref】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于限制 actor 不要偏离 reference 太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。ref_logprob 用于 KL penalty 或参考约束。\n\n其他选项：B: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\nD: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：reference model 常来自 SFT 模型。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q23",
      "type": "single",
      "prompt": "关于【V_phi(s_t)】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是 critic 对状态价值的估计，表示从 s_t 继续生成的预期回报。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。value 用于计算 TD error、GAE 和 returns。\n\n其他选项：A: 不正确。这描述的是 pi_ref，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：critic 质量直接影响 advantage。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q24",
      "type": "single",
      "prompt": "关于【RM(x,y)】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它是 reward model 或规则奖励函数，对回答进行打分。"
        },
        {
          "id": "D",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。RLHF 可用偏好 reward model，RLVR 可用规则验证器。\n\n其他选项：A: 不正确。这描述的是 critic，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nD: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：数学正确性、代码单测、格式满足都可作为规则奖励。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q25",
      "type": "single",
      "prompt": "关于【gamma】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "B",
          "text": "它是折扣因子，控制未来回报在当前 advantage 中的权重。"
        },
        {
          "id": "C",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "D",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。gamma 出现在 TD error 和 GAE 中。\n\n其他选项：A: 不正确。这描述的是 critic，不是当前概念。\nC: 不正确。这描述的是 pi_ref，不是当前概念。\nD: 不正确。这描述的是 RM 或 verifier，不是当前概念。\n\n拓展：gamma 越小，未来 reward 影响越弱。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q26",
      "type": "single",
      "prompt": "关于【lambda】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它是 GAE 平滑参数，控制一步 TD 与多步/Monte Carlo 之间的折中。"
        },
        {
          "id": "D",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。lambda 越接近 1 越偏多步，越接近 0 越偏一步 TD。\n\n其他选项：A: 不正确。这描述的是 pi_ref，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nD: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：lambda 是 bias-variance tradeoff 的关键参数。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q27",
      "type": "single",
      "prompt": "关于【epsilon】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "B",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "C",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "D",
          "text": "它是 PPO ratio clip 范围的超参数。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。clip(rho,1-epsilon,1+epsilon) 用它限制新旧策略概率比。\n\n其他选项：A: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nB: 不正确。这描述的是 critic，不是当前概念。\nC: 不正确。这描述的是 pi_ref，不是当前概念。\n\n拓展：epsilon 太大更新激进，太小更新保守。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q28",
      "type": "single",
      "prompt": "关于【beta】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "B",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "C",
          "text": "它通常是 KL 惩罚系数，控制策略偏离 reference 的惩罚强度。"
        },
        {
          "id": "D",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。beta 越大，偏离 reference 的成本越高。\n\n其他选项：A: 不正确。这描述的是 pi_ref，不是当前概念。\nB: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nD: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：DPO 中 beta 也用于控制偏好差异尺度。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q29",
      "type": "single",
      "prompt": "关于【rollout】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        },
        {
          "id": "B",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "C",
          "text": "PPO 通常先用冻结旧策略对一批 prompt 生成 response，再在这些固定样本上更新。"
        },
        {
          "id": "D",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。这样可以稳定计算 old logprob、advantage 和 probability ratio。\n\n其他选项：A: 不正确。这描述的是 RM 或 verifier，不是当前概念。\nB: 不正确。这描述的是 pi_ref，不是当前概念。\nD: 不正确。这描述的是 critic，不是当前概念。\n\n拓展：PPO 不是一边生成一边立刻更新每个 token。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q30",
      "type": "single",
      "prompt": "关于【old_logprob 与 ref_logprob】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "old_logprob 用来计算 PPO 新旧概率比，ref_logprob 用来计算参考 KL 惩罚。"
        },
        {
          "id": "B",
          "text": "它是固定参考模型，用于计算 reference logprob 并约束 actor 不要偏离太远。"
        },
        {
          "id": "C",
          "text": "它是 critic/value 模型，用来估计状态价值 V_phi(s_t)。"
        },
        {
          "id": "D",
          "text": "它是 reward model 或规则验证器，用来给完整回答或步骤打分。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。二者来源不同，服务的约束也不同。\n\n其他选项：B: 不正确。这描述的是 pi_ref，不是当前概念。\nC: 不正确。这描述的是 critic，不是当前概念。\nD: 不正确。这描述的是 RM 或 verifier，不是当前概念。\n\n拓展：old 对应 pi_old，ref 对应 pi_ref。",
      "section": "第2章 PPO符号与Rollout",
      "difficulty": "基础"
    },
    {
      "id": "q31",
      "type": "single",
      "prompt": "关于【sampled-token KL】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "B",
          "text": "它通常用采样 token 的 logprob 差近似 KL 相关惩罚，例如 log pi_old(a_t|s_t)-log pi_ref(a_t|s_t)。"
        },
        {
          "id": "C",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "D",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它只看实际采样 token，不是严格全词表 KL。\n\n其他选项：A: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nC: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nD: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\n\n拓展：严格 KL 需要对整个词表概率分布求期望。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q32",
      "type": "single",
      "prompt": "关于【严格全分布 KL】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要对整个词表求和：sum_v pi_old(v|s_t)(log pi_old(v|s_t)-log pi_ref(v|s_t))。"
        },
        {
          "id": "B",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。严格 KL 衡量完整分布之间差异，成本更高。\n\n其他选项：B: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nD: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\n\n拓展：工程中常用 sampled-token 近似降低计算开销。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q33",
      "type": "single",
      "prompt": "关于【KL penalty reward】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "一种常见写法是 r_t_kl=-beta*kl_t_sample，用来惩罚偏离参考模型。"
        },
        {
          "id": "B",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "它的目的只是让输出符合 JSON 格式。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。KL penalty 会进入 token reward，从而影响 advantage。\n\n其他选项：B: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nD: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：beta 控制惩罚强度。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q34",
      "type": "single",
      "prompt": "关于【outcome reward 放置】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "C",
          "text": "常见实现是中间 token 只有 KL 惩罚，最终 token 叠加完整回答 reward。"
        },
        {
          "id": "D",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。即 r_t=r_t_kl, t<T；r_T=R_rm+r_T_kl。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nB: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nD: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：也可把 reward 放到 EOS 或用 step/token reward 分布到多个位置。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q35",
      "type": "single",
      "prompt": "关于【PRM/step reward】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "C",
          "text": "它可以把奖励分布到多个推理步骤，而不是只在最终 token 给 outcome reward。"
        },
        {
          "id": "D",
          "text": "它的目的只是让输出符合 JSON 格式。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。这有助于改善长推理中的 credit assignment。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nB: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nD: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：PRM 常用于过程监督或步骤级奖励。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q36",
      "type": "single",
      "prompt": "关于【TD error】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "C",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "D",
          "text": "公式是 delta_t=r_t+gamma*V_{t+1}-V_t。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。它表示实际一步结果相对当前 value 预期的偏差。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nB: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nC: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：delta 为正通常说明动作比预期好。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q37",
      "type": "single",
      "prompt": "关于【终止状态 value】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "如果 s_{T+1} 是终止状态，通常设 V_{T+1}=0。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "它的目的只是让输出符合 JSON 格式。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。终止后没有未来回报，因此 bootstrap value 为 0。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nD: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：被截断但未终止的情况可能需要特殊处理。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q38",
      "type": "single",
      "prompt": "关于【GAE 递推】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "GAE 可写作 A_t=delta_t+gamma*lambda*A_{t+1}。"
        },
        {
          "id": "B",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "C",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "D",
          "text": "它的目的只是让输出符合 JSON 格式。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它从后往前累积 TD error，平衡方差和偏差。\n\n其他选项：B: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nC: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nD: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：lambda=1 更接近多步回报，lambda=0 更接近一步 TD。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q39",
      "type": "single",
      "prompt": "关于【GAE 展开式】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "A_t=sum_l((gamma*lambda)^l*delta_{t+l})。"
        },
        {
          "id": "C",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "D",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。这说明后续 TD error 会按 gamma*lambda 衰减影响当前 advantage。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nD: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：展开式能帮助理解平滑来源。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q40",
      "type": "single",
      "prompt": "关于【Return_t】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "B",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "Return_t=A_t+V_t，通常用于训练 critic。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。advantage 加回 value 得到 critic 的回归目标。\n\n其他选项：A: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nB: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：critic loss 会让 V_new 接近 Return。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q41",
      "type": "single",
      "prompt": "关于【正 advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "B",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "C",
          "text": "A_t>0 表示当前 token 比 critic 原本预期更好，应提高概率。"
        },
        {
          "id": "D",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。正 advantage 是强化该动作的信号。\n\n其他选项：A: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nB: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nD: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：它不表示 reward 一定等于 1，只表示相对预期更好。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q42",
      "type": "single",
      "prompt": "关于【负 advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "B",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "C",
          "text": "A_t<0 表示当前 token 比预期更差，应降低概率。"
        },
        {
          "id": "D",
          "text": "它的目的只是让输出符合 JSON 格式。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。负 advantage 会压低对应 token 的概率。\n\n其他选项：A: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nB: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nD: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\n\n拓展：负优势样本也参与训练。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q43",
      "type": "single",
      "prompt": "关于【lambda=0】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "B",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "它让 GAE 更接近一步 TD advantage。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。只保留当前 delta_t，不累积后续 TD error。\n\n其他选项：A: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nB: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：方差较低但可能偏差较高。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q44",
      "type": "single",
      "prompt": "关于【lambda 接近 1】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "B",
          "text": "它让 GAE 更接近多步或 Monte Carlo 回报估计。"
        },
        {
          "id": "C",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        },
        {
          "id": "D",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。会更多考虑未来多步 TD error。\n\n其他选项：A: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nC: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\nD: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\n\n拓展：方差可能更高，但偏差更低。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q45",
      "type": "single",
      "prompt": "关于【reward shaping 的位置】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它等于 DPO 中 chosen 和 rejected 的 score 差。"
        },
        {
          "id": "B",
          "text": "token reward 的分布方式会影响 advantage 在时间维度上的传播。"
        },
        {
          "id": "C",
          "text": "它的目的只是让输出符合 JSON 格式。"
        },
        {
          "id": "D",
          "text": "它要求对整个词表严格求和，不能用采样 token 近似。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。最终 reward 放在最后位置，会通过 GAE 向前传播。\n\n其他选项：A: 不正确。这描述的是 DPO 偏好损失，不是当前 PPO 计算环节。\nC: 不正确。这是结构化输出问题，不是 PPO reward/advantage 计算。\nD: 不正确。工程中经常使用 sampled-token 近似；严格 KL 才需要全分布求和。\n\n拓展：这直接影响哪些 token 被强化。",
      "section": "第3章 PPO KL、Reward与GAE",
      "difficulty": "中等"
    },
    {
      "id": "q46",
      "type": "single",
      "prompt": "关于【new_logprob】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "B",
          "text": "它是在同一批 rollout token 上用新策略重新前向得到的 log probability。"
        },
        {
          "id": "C",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "D",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。PPO 更新时比较 new_logprob 与 old_logprob。\n\n其他选项：A: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nC: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nD: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：同一 token 在新旧策略下的概率变化决定 ratio。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q47",
      "type": "single",
      "prompt": "关于【probability ratio】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "B",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "rho_t=exp(new_logprob_t-old_logprob_t)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。rho 衡量新策略相对旧策略对该采样 token 的概率变化。\n\n其他选项：A: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nB: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\n\n拓展：rho>1 表示提高概率，rho<1 表示降低概率。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q48",
      "type": "single",
      "prompt": "关于【PPO clipped surrogate】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "C",
          "text": "actor loss 使用 min(rho*A, clip(rho,1-eps,1+eps)*A) 限制更新幅度。"
        },
        {
          "id": "D",
          "text": "它只作用于 reference model，不影响 actor。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。clip 近似 trust region，防止策略变化过大。\n\n其他选项：A: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nB: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nD: 不正确。当前概念通常直接影响 actor 或 critic 更新。\n\n拓展：这是 PPO 相比普通 Actor-Critic 的关键稳定机制。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q49",
      "type": "single",
      "prompt": "关于【A>0 时的 clip】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "B",
          "text": "A>0 时模型想提高 token 概率，但 rho 超过 1+epsilon 后继续上涨的收益会被限制。"
        },
        {
          "id": "C",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。这避免好 token 被一次性强化过猛。\n\n其他选项：A: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nD: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\n\n拓展：限制收益不等于完全删除样本。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q50",
      "type": "single",
      "prompt": "关于【A<0 时的 clip】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "C",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "D",
          "text": "A<0 时模型想降低 token 概率，但 rho 低于 1-epsilon 后继续降低的收益会被限制。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这避免坏 token 被一次性压得过猛。\n\n其他选项：A: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nB: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nC: 不正确。当前概念通常直接影响 actor 或 critic 更新。\n\n拓展：正负 advantage 都需要 clip 控制。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q51",
      "type": "single",
      "prompt": "关于【actor loss 负号】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "B",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "因为优化器最小化 loss，所以用负号把最大化 surrogate objective 转成最小化。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。强化学习常把最大化 reward/objective 写成最小化负目标。\n\n其他选项：A: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nB: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\n\n拓展：不要把负号理解为所有样本都降低概率。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q52",
      "type": "single",
      "prompt": "关于【critic loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "基本形式是 0.5*mean((V_new(s_t)-Return_t)^2)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。critic 是回归 value 到 return 的监督信号。\n\n其他选项：A: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nB: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\n\n拓展：0.5 只是求导整洁，不是本质要求。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q53",
      "type": "single",
      "prompt": "关于【0.5 系数】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "0.5*(V-R)^2 对 V 求导得到 V-R，形式更简洁。"
        },
        {
          "id": "B",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。去掉 0.5 只差常数因子。\n\n其他选项：B: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nD: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：学习率通常可以吸收这个常数。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q54",
      "type": "single",
      "prompt": "关于【value clipping】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它限制 V_new 相对 V_old 的变化，避免 value head 一次更新过猛。"
        },
        {
          "id": "B",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "C",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "D",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。类似 actor clip，value clip 是 critic 稳定训练技巧。\n\n其他选项：B: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nC: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nD: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：它裁剪的是 value 变化而不是 return 本身。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q55",
      "type": "single",
      "prompt": "关于【entropy】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "B",
          "text": "H=-sum_v p_t(v)log p_t(v)，衡量策略分布不确定性。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。熵越高，分布越不确定；熵越低，分布越尖锐。\n\n其他选项：A: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nD: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：LLM 中每个 token 位置都有词表分布熵。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q56",
      "type": "single",
      "prompt": "关于【entropy bonus】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "总 loss 常写作 L_actor+c_v*L_critic-c_e*Entropy，减熵项等价于鼓励保留探索性。"
        },
        {
          "id": "B",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "C",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。entropy 系数通常很小，防止策略过早坍缩。\n\n其他选项：B: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nD: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\n\n拓展：它不是鼓励模型胡乱生成。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q57",
      "type": "single",
      "prompt": "关于【policy KL early stop】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "如果新策略和旧策略差异过大，就提前停止当前 batch 的 PPO epoch。"
        },
        {
          "id": "B",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "它只作用于 reference model，不影响 actor。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。这防止在过期 advantage 上继续过度优化。\n\n其他选项：B: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nD: 不正确。当前概念通常直接影响 actor 或 critic 更新。\n\n拓展：常用于同一 rollout batch 多 epoch 更新。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q58",
      "type": "single",
      "prompt": "关于【policy_kl】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "C",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "D",
          "text": "可用 mean(log pi_old(a_t|s_t)-log pi_theta(a_t|s_t)) 等近似指标监控策略偏移。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。policy_kl 过大说明新策略离 rollout 时旧策略太远。\n\n其他选项：A: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\nB: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nC: 不正确。当前概念通常直接影响 actor 或 critic 更新。\n\n拓展：不同实现可能用不同 KL 近似。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q59",
      "type": "single",
      "prompt": "关于【clip 不是完全停更】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "B",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "C",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        },
        {
          "id": "D",
          "text": "clip 限制的是 surrogate objective 中过大方向的收益，不应简单说样本完全不参与更新。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。是否有梯度取决于当前分支和实现细节。\n\n其他选项：A: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nB: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：面试中这个表述需要准确。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q60",
      "type": "single",
      "prompt": "关于【PPO 小例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只作用于 reference model，不影响 actor。"
        },
        {
          "id": "B",
          "text": "若 epsilon=0.2，A=0.8，rho=1.5，则裁剪项为 1.2*0.8=0.96。"
        },
        {
          "id": "C",
          "text": "它用于完全删除被裁剪样本，使其永远没有梯度。"
        },
        {
          "id": "D",
          "text": "它是 DPO 的 pairwise sigmoid loss。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。rho 被裁剪到上界 1.2。\n\n其他选项：A: 不正确。当前概念通常直接影响 actor 或 critic 更新。\nC: 不正确。PPO clip 是限制危险方向收益，不等于简单删除样本。\nD: 不正确。这描述的是 DPO，不是 PPO actor/critic 组件。\n\n拓展：未裁剪项是 1.5*0.8=1.2，PPO 取较小值。",
      "section": "第4章 PPO Loss、Clip与稳定性",
      "difficulty": "中等"
    },
    {
      "id": "q61",
      "type": "single",
      "prompt": "关于【REINFORCE 核心】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "B",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "D",
          "text": "reward 高就提高 response 概率，reward 低就降低 response 概率。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这是最朴素的策略梯度直觉。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nB: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 OPD。\n\n拓展：公式上就是 advantage 乘 logprob。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q62",
      "type": "single",
      "prompt": "关于【REINFORCE loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "L=-A*sum_t log pi_theta(a_t|s_t)。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。A=R-b，正 A 提高轨迹概率，负 A 降低轨迹概率。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\n\n拓展：这是后续 PPO/GRPO actor loss 的基础直觉。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q63",
      "type": "single",
      "prompt": "关于【baseline 作用】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "baseline 降低方差，但不改变策略梯度期望。"
        },
        {
          "id": "D",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它把绝对 reward 转成相对 advantage。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：baseline 不应该依赖当前动作而引入偏差。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q64",
      "type": "single",
      "prompt": "关于【batch mean baseline 例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "两个回答 reward 为 1 和 0 时，baseline=0.5。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "D",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。均值 baseline 是最简单的方差降低方式。\n\n其他选项：B: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：第一个 advantage=0.5，第二个=-0.5。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q65",
      "type": "single",
      "prompt": "关于【REINFORCE 方差问题】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "最终 reward 乘到所有 token 上，很难判断每个 token 的具体贡献。"
        },
        {
          "id": "C",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。这会导致长回答 credit assignment 粗糙、梯度方差大。\n\n其他选项：A: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\n\n拓展：长 CoT 中这个问题尤其明显。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q66",
      "type": "single",
      "prompt": "关于【RLOO 定义】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "C",
          "text": "对同一 prompt 采样 K 个回答，每个回答的 baseline 用其它 K-1 个 reward 平均。"
        },
        {
          "id": "D",
          "text": "它通过 teacher token 分布做蒸馏。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。leave-one-out 的意思是不把自己计入自己的 baseline。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nD: 不正确。这描述的是 OPD。\n\n拓展：它让比较发生在同一题内部。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q67",
      "type": "single",
      "prompt": "关于【RLOO advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "B",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "A_i=r_i-b_i，其中 b_i 是其它回答 reward 的平均值。"
        },
        {
          "id": "D",
          "text": "它通过 teacher token 分布做蒸馏。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它衡量当前回答比同题其它回答好多少。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nB: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：A_i 正则强化，负则压低。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q68",
      "type": "single",
      "prompt": "关于【RLOO 例子 r1】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "C",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "reward=[1.0,0.0,0.5] 时，第 1 个回答 baseline=0.25，advantage=0.75。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。其它两个 reward 平均为 0.25。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nC: 不正确。这描述的是 DPO。\n\n拓展：第 1 个明显优于同题其它回答。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q69",
      "type": "single",
      "prompt": "关于【RLOO 例子 r2】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "reward=[1.0,0.0,0.5] 时，第 2 个回答 baseline=0.75，advantage=-0.75。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "D",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。第 2 个明显差于其它回答平均。\n\n其他选项：B: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nD: 不正确。这描述的是 DPO。\n\n拓展：训练会压低第 2 个回答概率。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q70",
      "type": "single",
      "prompt": "关于【RLOO 例子 r3】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "B",
          "text": "reward=[1.0,0.0,0.5] 时，第 3 个回答 baseline=0.5，advantage=0。"
        },
        {
          "id": "C",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它通过 teacher token 分布做蒸馏。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。第 3 个等于其它回答平均，几乎无更新信号。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：这体现了相对比较的意义。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q71",
      "type": "single",
      "prompt": "关于【RLOO 与 batch mean】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "D",
          "text": "RLOO 的同题内部比较能减少不同 prompt 难度差异带来的噪声。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。不同题难度差异大时，全 batch 均值 baseline 可能不公平。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nC: 不正确。这描述的是 OPD。\n\n拓展：数学/代码任务中同题比较很有用。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q72",
      "type": "single",
      "prompt": "关于【RLOO 与 GRPO 共同点】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "二者都利用同 prompt 多回答的相对好坏。"
        },
        {
          "id": "D",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它们都可以不依赖 critic。\n\n其他选项：A: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：GRPO 通常还结合 PPO-style clip 和 KL 等组件。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q73",
      "type": "single",
      "prompt": "关于【RLOO 与 GRPO 区别】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "RLOO 更接近朴素 REINFORCE baseline，GRPO 更像无 critic 的 PPO-style 组内策略优化。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。GRPO 通常有 ratio clip、token mask、reference KL 等工程组件。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\n\n拓展：不要把二者完全等同。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q74",
      "type": "single",
      "prompt": "关于【正 RLOO advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "表示该回答优于同题其它回答，训练会提高它的 token 概率。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。这是策略梯度强化好样本的直接体现。\n\n其他选项：A: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\n\n拓展：advantage 为 0 则几乎不更新。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q75",
      "type": "single",
      "prompt": "关于【负 RLOO advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "表示该回答差于同题其它回答，训练会降低它的 token 概率。"
        },
        {
          "id": "C",
          "text": "它使用显式 KL trust region 和共轭梯度求解。"
        },
        {
          "id": "D",
          "text": "它需要 chosen/rejected 偏好对，并用 reference-adjusted score 差做 sigmoid loss。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它不是坏样本被删除，而是作为负向学习信号。\n\n其他选项：A: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 TRPO，不是 REINFORCE/RLOO。\nD: 不正确。这描述的是 DPO。\n\n拓展：负样本也有训练价值。",
      "section": "第5章 REINFORCE与RLOO",
      "difficulty": "基础"
    },
    {
      "id": "q76",
      "type": "single",
      "prompt": "关于【Actor 职责】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "D",
          "text": "Actor 负责产生动作，也就是 pi_theta(a_t|s_t)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。在 LLM 中 actor 通常就是正在训练的生成模型。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\n\n拓展：Actor 决定哪些 token 概率被提高或降低。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q77",
      "type": "single",
      "prompt": "关于【Critic 职责】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "D",
          "text": "Critic 负责估计状态价值 V_phi(s_t)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。value 用作 baseline，帮助构造 advantage。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 GRPO。\n\n拓展：Critic 好坏会影响策略更新质量。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q78",
      "type": "single",
      "prompt": "关于【TD error 直觉】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "B",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "C",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "D",
          "text": "delta_t 表示实际走一步后，结果比 critic 原来预期好多少。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。公式为 r_t+gamma V(s_{t+1})-V(s_t)。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\n\n拓展：正值说明状态变好，负值说明变差。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q79",
      "type": "single",
      "prompt": "关于【TD error 正例】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "V(s_t)=0.4，V(s_{t+1})=0.7，r=0，gamma=1 时 delta=0.3。"
        },
        {
          "id": "B",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。下一状态价值高于当前预期，说明动作可能较好。\n\n其他选项：B: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：这会成为正向 advantage 信号。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q80",
      "type": "single",
      "prompt": "关于【TD error 负例】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "B",
          "text": "V(s_t)=0.4，V(s_{t+1})=0.2，r=0，gamma=1 时 delta=-0.2。"
        },
        {
          "id": "C",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。下一状态价值低于当前预期，动作可能较差。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：这会压低对应动作概率。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q81",
      "type": "single",
      "prompt": "关于【A_t≈delta_t】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "B",
          "text": "最简单情况下，可以用一步 TD error 近似 advantage。"
        },
        {
          "id": "C",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。更稳的方式是使用 GAE 累积多步 TD error。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：这是从 Actor-Critic 过渡到 PPO 的基础。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q82",
      "type": "single",
      "prompt": "关于【Actor-Critic actor loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "常见形式是 -mean_t(A_t log pi_theta(a_t|s_t))。"
        },
        {
          "id": "B",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它与 REINFORCE 一脉相承，只是 A_t 通常来自 critic。\n\n其他选项：B: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：正 A 强化，负 A 抑制。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q83",
      "type": "single",
      "prompt": "关于【Actor-Critic critic loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "常见形式是 0.5*mean_t((V_phi(s_t)-Return_t)^2)。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "D",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。critic 是一个 value 回归器。\n\n其他选项：B: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 GRPO。\n\n拓展：Return 是 value 的监督目标。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q84",
      "type": "single",
      "prompt": "关于【A2C 定义】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "A2C 是 Advantage Actor-Critic 的同步版本。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。可理解为多个环境或样本同步采样后一起更新。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：它是 PPO 前的重要基础框架。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q85",
      "type": "single",
      "prompt": "关于【PPO 与 Actor-Critic】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "B",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "C",
          "text": "PPO 可以看作在 Actor-Critic 基础上加入 ratio clip 限制策略变化。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。PPO 仍常用 actor、critic、advantage。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：ratio clip 是核心增量。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q86",
      "type": "single",
      "prompt": "关于【TRPO 目标】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "TRPO 希望最大化 mean(rho*A)，同时约束 mean KL(pi_old||pi_theta)<=delta。"
        },
        {
          "id": "D",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它显式使用 trust region 限制策略更新幅度。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 GRPO。\n\n拓展：TRPO 是 PPO 的理论前辈。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q87",
      "type": "single",
      "prompt": "关于【TRPO rho】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "B",
          "text": "rho_t(theta)=pi_theta(a_t|s_t)/pi_old(a_t|s_t)。"
        },
        {
          "id": "C",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它和 PPO 中的新旧策略概率比含义一致。\n\n其他选项：A: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：ratio 衡量策略变化。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q88",
      "type": "single",
      "prompt": "关于【TRPO 近似求解】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "C",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "D",
          "text": "TRPO 对目标做一阶近似，对 KL 约束做二阶近似。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。因此涉及 Fisher/Hessian、共轭梯度和线搜索。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 GRPO。\n\n拓展：这导致实现复杂。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q89",
      "type": "single",
      "prompt": "关于【TRPO 与 PPO 区别】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "B",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "C",
          "text": "TRPO 显式 KL 约束，PPO 用 ratio clip 间接限制。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。PPO 工程实现更简单，普通反向传播即可。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：这解释了 PPO 在 LLM RLHF 中更常用。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q90",
      "type": "single",
      "prompt": "关于【Trust Region 直觉】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过同 prompt 组内 reward 标准化省掉 critic。"
        },
        {
          "id": "B",
          "text": "每次策略只能在相对安全的小邻域内更新，防止性能崩坏。"
        },
        {
          "id": "C",
          "text": "它用 teacher 分布做 token-level 蒸馏。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对，不需要 rollout。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。策略更新过猛会让采样分布突变，advantage 失效。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 DPO。\n\n拓展：trust region 是 RL 稳定训练的重要思想。",
      "section": "第6章 Actor-Critic、A2C与TRPO",
      "difficulty": "中等"
    },
    {
      "id": "q91",
      "type": "single",
      "prompt": "关于【DPO 数据形式】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "B",
          "text": "DPO 使用 (x,y_w,y_l)，即 prompt、chosen response、rejected response。"
        },
        {
          "id": "C",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "D",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。chosen/rejected 偏好对是 DPO 的监督来源。\n\n其他选项：A: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 PPO/Actor-Critic 路线。\nD: 不正确。这描述的是 GRPO。\n\n拓展：偏好对质量直接影响 DPO 上限。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q92",
      "type": "single",
      "prompt": "关于【DPO 不需要 RM】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "B",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "C",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "D",
          "text": "DPO 通常不需要显式 reward model。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。它把偏好优化直接写成 policy loss。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 PPO/Actor-Critic 路线。\nC: 不正确。这描述的是 GRPO。\n\n拓展：这简化了 PPO 式 RLHF pipeline。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q93",
      "type": "single",
      "prompt": "关于【DPO 不需要 critic】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "B",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "C",
          "text": "DPO 通常不训练 critic/value head。"
        },
        {
          "id": "D",
          "text": "它需要训练 critic 并计算 GAE。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它不通过 GAE 估计 advantage。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：这降低了工程和显存成本。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q94",
      "type": "single",
      "prompt": "关于【DPO 不做在线 rollout】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "DPO 通常基于离线偏好对训练，不依赖当前策略采样。"
        },
        {
          "id": "B",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "D",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。这让它更稳定简单，但探索能力弱。\n\n其他选项：B: 不正确。这描述的是 PPO/Actor-Critic 路线。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 GRPO。\n\n拓展：如果任务需要在线探索，PPO/GRPO 可能更合适。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q95",
      "type": "single",
      "prompt": "关于【score_w】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "score_w=log pi_theta(y_w|x)-log pi_ref(y_w|x)。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "C",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "D",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它表示当前模型相对 reference 对 chosen 的偏好提升。\n\n其他选项：B: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 PPO/Actor-Critic 路线。\nD: 不正确。这描述的是 GRPO。\n\n拓展：DPO 比较的是相对 reference 的 logprob 提升。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q96",
      "type": "single",
      "prompt": "关于【score_l】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "B",
          "text": "score_l=log pi_theta(y_l|x)-log pi_ref(y_l|x)。"
        },
        {
          "id": "C",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "D",
          "text": "它通过 teacher token 分布训练学生。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它表示当前模型相对 reference 对 rejected 的偏好提升。\n\n其他选项：A: 不正确。这描述的是 PPO/Actor-Critic 路线。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：DPO 希望 rejected 的提升小于 chosen。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q97",
      "type": "single",
      "prompt": "关于【DPO 目标关系】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "C",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "D",
          "text": "DPO 希望 score_w > score_l。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这表示模型相对更偏向 chosen。\n\n其他选项：A: 不正确。这描述的是 PPO/Actor-Critic 路线。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 GRPO。\n\n拓展：如果反过来，loss 会变大。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q98",
      "type": "single",
      "prompt": "关于【DPO loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "C",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "D",
          "text": "L=-log sigmoid(beta*(score_w-score_l))。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这是 pairwise logistic preference objective。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：差值越大，loss 越小。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q99",
      "type": "single",
      "prompt": "关于【beta 作用】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "B",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "C",
          "text": "beta 控制 reference-adjusted 偏好差异的尺度或更新强度。"
        },
        {
          "id": "D",
          "text": "它需要训练 critic 并计算 GAE。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。beta 太大可能更新激进，太小可能过保守。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：它不是 PPO clip epsilon。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q100",
      "type": "single",
      "prompt": "关于【DPO 小例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "B",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "D",
          "text": "若 score_w=0.5，score_l=-0.2，则 score_w-score_l=0.7。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。正差值说明模型已经更偏 chosen。\n\n其他选项：A: 不正确。这描述的是 PPO/Actor-Critic 路线。\nB: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\n\n拓展：loss 会相对较小。",
      "section": "第7章 DPO",
      "difficulty": "基础"
    },
    {
      "id": "q101",
      "type": "single",
      "prompt": "关于【DPO 与 PPO 区别】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "B",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "C",
          "text": "PPO 用 reward+KL+advantage 在线策略优化，DPO 用离线偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "它需要训练 critic 并计算 GAE。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。二者训练信号和工程复杂度不同。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：DPO 简单，PPO 可在线探索。",
      "section": "第7章 DPO",
      "difficulty": "中等"
    },
    {
      "id": "q102",
      "type": "single",
      "prompt": "关于【DPO 优点】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "B",
          "text": "简单、稳定、省资源。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "D",
          "text": "它需要训练 critic 并计算 GAE。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。不需要 RM、critic 和复杂 rollout 管线。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：适合高质量偏好数据充足的场景。",
      "section": "第7章 DPO",
      "difficulty": "中等"
    },
    {
      "id": "q103",
      "type": "single",
      "prompt": "关于【DPO 限制】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "B",
          "text": "依赖偏好对质量，在线探索能力弱。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "D",
          "text": "它需要训练 critic 并计算 GAE。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。如果偏好数据覆盖不足，DPO 不容易发现新策略空间。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：可验证任务可能更适合 GRPO/RLVR。",
      "section": "第7章 DPO",
      "difficulty": "中等"
    },
    {
      "id": "q104",
      "type": "single",
      "prompt": "关于【DPO 与 SFT 区别】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "B",
          "text": "DPO 优化 chosen 相对 rejected 的偏好差异，SFT 通常最大化目标答案似然。"
        },
        {
          "id": "C",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "D",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。DPO 是 pairwise preference optimization。\n\n其他选项：A: 不正确。这描述的是 PPO/Actor-Critic 路线。\nC: 不正确。这描述的是 OPD。\nD: 不正确。这描述的是 GRPO。\n\n拓展：SFT 学“怎么写”，DPO 学“更偏向哪个”。",
      "section": "第7章 DPO",
      "difficulty": "中等"
    },
    {
      "id": "q105",
      "type": "single",
      "prompt": "关于【DPO 一句话总结】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它需要同 prompt 多采样并用组内标准差计算 advantage。"
        },
        {
          "id": "B",
          "text": "它通过 teacher token 分布训练学生。"
        },
        {
          "id": "C",
          "text": "它需要训练 critic 并计算 GAE。"
        },
        {
          "id": "D",
          "text": "用 chosen/rejected 偏好对直接优化，不做在线 rollout。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这是 DPO 与 PPO、GRPO、OPD 的关键区别。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 PPO/Actor-Critic 路线。\n\n拓展：DPO 经常被看作简化版偏好对齐路线。",
      "section": "第7章 DPO",
      "difficulty": "中等"
    },
    {
      "id": "q106",
      "type": "single",
      "prompt": "关于【GRPO 全称】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "GRPO 是 Group Relative Policy Optimization。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。名字中的 Group Relative 表示组内相对优化。\n\n其他选项：A: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：关键是同 prompt 多回答。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q107",
      "type": "single",
      "prompt": "关于【GRPO 采样】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "给定同一个 prompt，采样 G 个回答 y_1,...,y_G。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。组内比较需要多个回答。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 DPO。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：没有多采样就难以构造 group relative reward。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q108",
      "type": "single",
      "prompt": "关于【GRPO reward】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "B",
          "text": "每个回答得到 reward r_i=Reward(x,y_i)。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做蒸馏。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。reward 可来自规则验证器、答案正确性或其它打分器。\n\n其他选项：A: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 OPD。\n\n拓展：二值 reward 在数学/代码任务中很常见。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q109",
      "type": "single",
      "prompt": "关于【GRPO mean】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "D",
          "text": "mean_r 是同组回答 reward 的平均值。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。它是组内相对 baseline。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 DPO。\nC: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：二值 reward 下 mean_r 就是组内正确率。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q110",
      "type": "single",
      "prompt": "关于【GRPO std】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "std_r 是同组 reward 标准差，用于标准化 advantage。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。标准差反映组内差异程度。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：std 很小时需要 eps 防止除零。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q111",
      "type": "single",
      "prompt": "关于【GRPO advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "C",
          "text": "A_i=(r_i-mean_r)/(std_r+eps)。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。它衡量该回答相对同组平均水平的好坏。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这描述的是 DPO。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：正优势强化，负优势压低。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q112",
      "type": "single",
      "prompt": "关于【GRPO 去 critic】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "GRPO 用组内相对 reward 替代 critic/GAE，因此通常不需要 critic。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。这降低了训练复杂度和显存成本。\n\n其他选项：B: 不正确。这描述的是 OPD。\nC: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nD: 不正确。这描述的是 DPO。\n\n拓展：但依赖组内 reward 有差异。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q113",
      "type": "single",
      "prompt": "关于【GRPO loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "GRPO 常保留 PPO-style ratio clip。"
        },
        {
          "id": "C",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做蒸馏。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它仍需控制新旧策略概率比的变化。\n\n其他选项：A: 不正确。这描述的是 DPO。\nC: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nD: 不正确。这描述的是 OPD。\n\n拓展：可理解为无 critic advantage + PPO-style update。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q114",
      "type": "single",
      "prompt": "关于【response-level advantage】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "C",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "D",
          "text": "GRPO 中 A_i 常作为 response-level advantage 广播到该回答 token 上。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这种做法简单，但 token-level credit 粗糙。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nC: 不正确。这描述的是 OPD。\n\n拓展：GTPO/DGPO 就是进一步细化 token credit。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q115",
      "type": "single",
      "prompt": "关于【GRPO 正例】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "reward=[1,1,0,0] 时，mean=0.5，std=0.5，正确回答 advantage=1。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。正确回答高于组均值并被标准化。\n\n其他选项：A: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nB: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\n\n拓展：错误回答 advantage=-1。",
      "section": "第8章 GRPO",
      "difficulty": "基础"
    },
    {
      "id": "q116",
      "type": "single",
      "prompt": "关于【GRPO 全对组】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "C",
          "text": "reward=[1,1,1,1] 时组内无差异，advantage 近似为 0，训练信号很弱。"
        },
        {
          "id": "D",
          "text": "它用 teacher 分布做蒸馏。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。这不是样本有害，而是对组内相对优化无贡献。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nD: 不正确。这描述的是 OPD。\n\n拓展：DAPO 的 Dynamic Sampling 会处理这类组。",
      "section": "第8章 GRPO",
      "difficulty": "中等"
    },
    {
      "id": "q117",
      "type": "single",
      "prompt": "关于【GRPO 全错组】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "reward=[0,0,0,0] 时同样组内无差异，训练信号很弱。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。没有回答优于其它回答，无法形成相对偏好。\n\n其他选项：A: 不正确。这描述的是 OPD。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：这会降低有效 batch 比例。",
      "section": "第8章 GRPO",
      "difficulty": "中等"
    },
    {
      "id": "q118",
      "type": "single",
      "prompt": "关于【GRPO 适用任务】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "B",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "C",
          "text": "数学、代码、格式验证等可自动打分任务很适合 GRPO。"
        },
        {
          "id": "D",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。规则验证器可以给同题多回答打 reward。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 OPD。\nD: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\n\n拓展：这类任务不一定需要人工偏好模型。",
      "section": "第8章 GRPO",
      "difficulty": "中等"
    },
    {
      "id": "q119",
      "type": "single",
      "prompt": "关于【GRPO 与 RLOO 关系】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        },
        {
          "id": "D",
          "text": "二者都利用同 prompt 多回答相对好坏，但 GRPO 更常结合 PPO-style clip 和 KL。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。RLOO 更接近 REINFORCE baseline。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nC: 不正确。这描述的是 DPO。\n\n拓展：二者不要完全混为一个算法。",
      "section": "第8章 GRPO",
      "difficulty": "中等"
    },
    {
      "id": "q120",
      "type": "single",
      "prompt": "关于【GRPO 一句话总结】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它用 teacher 分布做蒸馏。"
        },
        {
          "id": "B",
          "text": "它必须训练 critic 并用 GAE 计算 advantage。"
        },
        {
          "id": "C",
          "text": "同 prompt 多采样，用组内相对 reward 当 advantage，去掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair 的 sigmoid loss。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。这抓住了 GRPO 最关键的工程价值。\n\n其他选项：A: 不正确。这描述的是 OPD。\nB: 不正确。这是 PPO/Actor-Critic 的典型方式，不是 GRPO 的特点。\nD: 不正确。这描述的是 DPO。\n\n拓展：无 critic 是优势也是约束。",
      "section": "第8章 GRPO",
      "difficulty": "中等"
    },
    {
      "id": "q121",
      "type": "single",
      "prompt": "关于【DAPO 全称】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "B",
          "text": "DAPO 是 Decoupled Clip and Dynamic sAmpling Policy Optimization。"
        },
        {
          "id": "C",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。名称中包含解耦 clip 和动态采样两个核心。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nC: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nD: 不正确。这描述的是 DPO。\n\n拓展：它是长 CoT RLVR 的训练 recipe。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q122",
      "type": "single",
      "prompt": "关于【DAPO 性质】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "DAPO 不是完全重做 RL 框架，而是在 GRPO/PPO-style 长 CoT 训练中做系统修正。"
        },
        {
          "id": "B",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "C",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它更像工程稳定性配方。\n\n其他选项：B: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：理解前需要先掌握 GRPO/PPO。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q123",
      "type": "single",
      "prompt": "关于【DAPO 解决问题】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它主要解决有效样本少、长回答 token 分布不均、熵坍缩、超长回答 reward noise。"
        },
        {
          "id": "C",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "D",
          "text": "它只训练 critic/value head。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。这些问题在长 CoT RLVR 中非常突出。\n\n其他选项：A: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：短任务未必需要 DAPO 的全部技巧。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q124",
      "type": "single",
      "prompt": "关于【Clip-Higher】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "B",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "C",
          "text": "DAPO 把普通对称 clip 解耦为 [1-eps_low,1+eps_high]。"
        },
        {
          "id": "D",
          "text": "它是显式 KL trust region 二阶优化。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。通常 eps_high>eps_low。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nD: 不正确。这描述的是 TRPO。\n\n拓展：这给正优势探索 token 更大上升空间。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q125",
      "type": "single",
      "prompt": "关于【Clip-Higher 例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "eps_low=0.2，eps_high=0.28 时，clip 范围是 [0.8,1.28]。"
        },
        {
          "id": "D",
          "text": "它只训练 critic/value head。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。相比普通 [0.8,1.2]，上界更高。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。这描述的是 DPO。\nD: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：这有助于缓解长 CoT 熵坍缩。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q126",
      "type": "single",
      "prompt": "关于【Dynamic Sampling】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "B",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "C",
          "text": "它保留 0<number_of_correct_answers<G 的组。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。全对或全错组缺少组内相对信号。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nD: 不正确。这描述的是 DPO。\n\n拓展：目标是提高 batch 中有效梯度比例。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q127",
      "type": "single",
      "prompt": "关于【全对过滤原因】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "B",
          "text": "全对组 reward 无差异，组内 advantage 近似为 0。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "D",
          "text": "它是显式 KL trust region 二阶优化。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它不是错误样本，只是对 GRPO-style 相对优化贡献弱。\n\n其他选项：A: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：动态采样关注有效比较信号。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q128",
      "type": "single",
      "prompt": "关于【全错过滤原因】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "B",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "C",
          "text": "全错组也缺少组内差异，无法知道哪个回答相对更好。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。全错组可能需要重新采样或更易题目，而不是直接提供有效梯度。\n\n其他选项：A: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nB: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：这解释了 DAPO 的动态采样动机。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q129",
      "type": "single",
      "prompt": "关于【Token-level loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "DAPO 更强调按所有有效 token 平均 policy gradient loss。"
        },
        {
          "id": "B",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "D",
          "text": "它只训练 critic/value head。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。这样每个 token 更直接参与优化。\n\n其他选项：B: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：长短回答差异大时尤其重要。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q130",
      "type": "single",
      "prompt": "关于【response-level 平均】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "B",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "D",
          "text": "response-level 平均会让每条回答权重近似相同。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。长短回答 token 数差异大时，这可能不合理。\n\n其他选项：A: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nB: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 DPO。\n\n拓展：它与 token-level 平均是不同归一化方式。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q131",
      "type": "single",
      "prompt": "关于【token-level 平均】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "token-level 平均按 sum_i T_i 汇总所有 token loss。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "D",
          "text": "它只训练 critic/value head。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。每个有效 token 成为更基本训练单位。\n\n其他选项：B: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：这有助于处理长 CoT token 分布不均。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q132",
      "type": "single",
      "prompt": "关于【Overlong Shaping】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "D",
          "text": "超过长度限制直接判 0 会引入 reward noise，DAPO 用平滑惩罚区分轻微超长与严重超长。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。这避免接近正确但稍超长的回答被当成完全胡写。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。这描述的是 DPO。\nC: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：reward shaping 让学习信号更连续。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q133",
      "type": "single",
      "prompt": "关于【Overlong 例子 penalty】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "L_max=1000，L_hard=1200，length=1100 时 penalty=-0.5。"
        },
        {
          "id": "B",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "C",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。超出 100，占 200 区间的一半。\n\n其他选项：B: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：若 r_task=1，则 r_final=0.5。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q134",
      "type": "single",
      "prompt": "关于【DAPO 与 GRPO】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它是显式 KL trust region 二阶优化。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "D",
          "text": "DAPO 可看成面向长 CoT 的 GRPO/PPO-style 稳定训练增强。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。它并不否定 GRPO，而是处理 GRPO 在长推理中的问题。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。这描述的是 DPO。\nC: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\n\n拓展：核心是让有效信号更稳定。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q135",
      "type": "single",
      "prompt": "关于【DAPO 一句话总结】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "DAPO 是面向长 CoT RLVR 的稳定训练 recipe。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected pair，不做在线 rollout。"
        },
        {
          "id": "C",
          "text": "它只训练 critic/value head。"
        },
        {
          "id": "D",
          "text": "它是显式 KL trust region 二阶优化。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它通过 clip、采样、loss 归一化和长度 shaping 改善训练。\n\n其他选项：B: 不正确。这描述的是 DPO。\nC: 不正确。DAPO 通常是无 critic 框架中的稳定训练配方。\nD: 不正确。这描述的是 TRPO。\n\n拓展：适合 GRPO 训练不稳时考虑。",
      "section": "第9章 DAPO",
      "difficulty": "中等"
    },
    {
      "id": "q136",
      "type": "single",
      "prompt": "关于【OPD 全称】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "B",
          "text": "OPD 是 On-Policy Distillation。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和线搜索。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它把 on-policy rollout 和知识蒸馏结合起来。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：关键词是学生自己走，老师逐 token 指导。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q137",
      "type": "single",
      "prompt": "关于【OPD 状态来源】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "B",
          "text": "OPD 的训练状态来自学生自己的 rollout。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和线搜索。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。学生走到 s_t=(x,y_<t)，teacher 在该状态上给分布。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：这区别于普通 SFT 的 teacher trajectory。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q138",
      "type": "single",
      "prompt": "关于【OPD teacher 信号】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "B",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "C",
          "text": "teacher 提供当前位置的 token-level 概率分布 q_T(.|s_t)。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。student 学习让 p_S 接近 q_T。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：这是 dense token-level 指导。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q139",
      "type": "single",
      "prompt": "关于【OPD loss】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "常见蒸馏目标是 cross entropy：-sum_v q_T(v|s_t)log p_S(v|s_t)。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。它等价于最小化 KL(q_T||p_S) 加常数。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nB: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 DPO。\n\n拓展：大词表下可用 top-k 近似降低成本。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q140",
      "type": "single",
      "prompt": "关于【OPD 与 SFT】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "B",
          "text": "SFT 学老师已经写好的完整答案，OPD 是学生先自己写，老师在学生实际位置上指导下一步。"
        },
        {
          "id": "C",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。区别在状态分布是否来自学生。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：OPD 更关注学生真实会访问到的状态。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q141",
      "type": "single",
      "prompt": "关于【OPD 小例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "teacher=[0.7,0.2,0.1]，student=[0.4,0.4,0.2] 时，会推动学生提高第一个 token 概率。"
        },
        {
          "id": "B",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。teacher 对第一个候选更自信。\n\n其他选项：B: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：蒸馏学习的是软分布，不只是 hard label。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q142",
      "type": "single",
      "prompt": "关于【OPD 资源近似】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "B",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "可只保留 teacher top-k token，或只计算学生采样 token 的 teacher logprob。"
        }
      ],
      "answer": "D",
      "explanation": "正确解析：正确。完整词表 teacher logits 成本很高。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nB: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\n\n拓展：这是工程折中。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q143",
      "type": "single",
      "prompt": "关于【GTPO 核心】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "GTPO 用 entropy 给高不确定性的关键 token 分配更多 credit。"
        },
        {
          "id": "B",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。它认为长 CoT 的关键岔路口往往 entropy 更高。\n\n其他选项：B: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：用于改善 response-level advantage 过粗。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q144",
      "type": "single",
      "prompt": "关于【GTPO 权重】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "w_t=T*H_t/(sum_j H_j+eps)。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "C",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。权重按 entropy 归一化，并保持总尺度约为 T。\n\n其他选项：B: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：高 entropy token 得到更高 advantage 权重。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q145",
      "type": "single",
      "prompt": "关于【GTPO 例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "B",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "C",
          "text": "H=[0.1,0.2,0.6,0.1]，T=4 时第三个 token 权重为 2.4。"
        },
        {
          "id": "D",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        }
      ],
      "answer": "C",
      "explanation": "正确解析：正确。第三个 token entropy 最大，因此 credit 最高。\n\n其他选项：A: 不正确。这描述的是 DPO。\nB: 不正确。这描述的是 TRPO。\nD: 不正确。这描述的是 GRPO。\n\n拓展：这是 token-level credit 分配示例。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q146",
      "type": "single",
      "prompt": "关于【DGPO 核心】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "B",
          "text": "DGPO 结合 policy-reference 分布偏移和 entropy gate 分配 token credit。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和线搜索。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。它认为只看 entropy 不够，还要看策略相对参考模型是否有意义偏移。\n\n其他选项：A: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：可降低 confident hallucination 的误分配。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q147",
      "type": "single",
      "prompt": "关于【Hellinger distance】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "B",
          "text": "DGPO 用 squared Hellinger distance 衡量当前 policy P 与 reference policy Q 的分布偏移。"
        },
        {
          "id": "C",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。公式形如 D=1-sum_a sqrt(P(a)Q(a))。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：它是概率分布距离。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q148",
      "type": "single",
      "prompt": "关于【entropy-gated score】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "它使用显式 KL trust region 和线搜索。"
        },
        {
          "id": "B",
          "text": "DGPO 的 g=D*(E^alpha)，再经过 softmax 得到 token 权重。"
        },
        {
          "id": "C",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        }
      ],
      "answer": "B",
      "explanation": "正确解析：正确。D 表示偏移，E 表示归一化 entropy。\n\n其他选项：A: 不正确。这描述的是 TRPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 DPO。\n\n拓展：tau 控制 softmax 权重尖锐程度。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q149",
      "type": "single",
      "prompt": "关于【DGPO 小例子】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "D=[0.05,0.30,0.50]，E=[0.20,0.80,0.10] 时，第二个 token 因偏移和 entropy 都较高获得更高 credit。"
        },
        {
          "id": "B",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "C",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和线搜索。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。第三个 token 虽 D 最大但 entropy 低，被 gate 压低。\n\n其他选项：B: 不正确。这描述的是 GRPO。\nC: 不正确。这描述的是 DPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：这体现了分布偏移与不确定性的结合。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    },
    {
      "id": "q150",
      "type": "single",
      "prompt": "关于【总选型总结】，下列说法正确的是？",
      "options": [
        {
          "id": "A",
          "text": "短程可验证任务中 GRPO 是高效折中；长程 agentic RL 中 critic-based 方法仍重要；DPO 适合离线偏好对；OPD 适合强 teacher dense 指导。"
        },
        {
          "id": "B",
          "text": "它使用 chosen/rejected 偏好对直接优化。"
        },
        {
          "id": "C",
          "text": "它使用同 prompt 组内 reward 标准化来省掉 critic。"
        },
        {
          "id": "D",
          "text": "它使用显式 KL trust region 和线搜索。"
        }
      ],
      "answer": "A",
      "explanation": "正确解析：正确。不同方法的训练信号、成本和适用任务不同。\n\n其他选项：B: 不正确。这描述的是 DPO。\nC: 不正确。这描述的是 GRPO。\nD: 不正确。这描述的是 TRPO。\n\n拓展：没有一种方法适合所有后训练场景。",
      "section": "第10章 OPD、GTPO、DGPO与方法选型",
      "difficulty": "中等"
    }
  ]
});
