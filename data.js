/* Lakshya data — built from "Prep Resources — 3 Formats" (Course checklist + Areas → Resource).
   Line format:  title | duration | areas | tier (M = Must, I = Important)
   "# CODE | Course name" starts a course. Each item has one id, so ticking it
   in the Areas view or the Courses view is the same tick. */
window.LAKSHYA_AREAS = [
  [1, "Classical ML", "CampusX 100 Days of ML", "StatQuest, CS229 notes"],
  [2, "Model evaluation & metrics", "CampusX 100 Days of ML (metrics videos)", "StatQuest ROC/AUC"],
  [3, "Deep learning fundamentals", "Mitesh Khapra CS7015", "TuteDude Modules 15–16"],
  [4, "Computer vision", "Mitesh Khapra CS7015 (Lecture 11)", "CampusX CNN course"],
  [5, "NLP & sequence models", "Mitesh Khapra CS7015 (Lectures 10, 14–16)", "TuteDude Module 24; Illustrated Transformer"],
  [6, "GenAI, LLMs & RAG", "TuteDude GenAI course (Modules 24–35)", "CampusX RAG playlist"],
  [7, "Probability & statistics", "CodeWithHarry Data Science course", "CampusX Statistics / Advance Statistics"],
  [8, "Linear algebra & optimization", "Mitesh Khapra CS7015 (Lecture 6)", "CampusX Maths for ML"],
  [9, "DSA & coding", "DSA with Python video", "NeetCode 150; CodeWithHarry NumPy/Pandas"],
  [10, "SQL, systems & CS basics", "CodeWithHarry Data Science course (SQL, Git)", "LeetCode SQL 50"],
  [11, "Case studies & ML design", "Interview Question Bank §11", "CampusX ML Case Study playlist"],
  [12, "Puzzles, aptitude & OA", "IndiaBix / PrepInsta", "CampusX Logical Reasoning"],
  [13, "HR & behavioural", "Interview Question Bank §13", "Senior write-ups"],
  [14, "Projects & resume", "Placement Syllabus §14 checklist", "Seniors' resumes"]
];

window.LAKSHYA_RAW = `
# cx | CampusX — 100 Days of Machine Learning
Machine Learning Development Life Cycle (Day 9)|25:13|11|M
How to Frame a Machine Learning Problem (Day 14)|22:22|11|M
Feature Scaling — Standardization (Day 24)|32:38|1|M
Feature Scaling — Normalization|23:31|1|M
Encoding Categorical Data — Ordinal / Label Encoding|19:53|1|M
One Hot Encoding (Day 27)|30:12|1|M
Column Transformer|15:41|1|M
Machine Learning Pipelines A–Z (Day 29)|45:39|1|M
Handling Missing Data Part 1 — Complete Case Analysis|24:54|1|M
Handling Missing Data Part 2 — Simple Imputer|31:21|1|M
KNN Imputer — Missing Data Part 5|24:27|1|I
Outlier Detection — Z-score Method|17:46|1|M
Outlier Detection — IQR Method|14:05|1|M
Curse of Dimensionality|15:25|1|I
PCA Part 1 — Geometric Intuition|33:54|1|I
PCA Part 2 — Problem Formulation & Step-by-Step Solution|56:17|1,8|M
PCA Part 3 — Code Example & Visualization|43:26|1|I
Simple Linear Regression — Code + Intuition|33:36|1|M
Simple Linear Regression — Mathematical Formulation, Coding from Scratch|53:31|1,9|M
Regression Metrics — MSE, MAE, RMSE, R², Adjusted R²|43:56|2|M
Multiple Linear Regression Part 1 — Geometric Intuition & Code|20:57|1|M
Multiple Linear Regression Part 2 — Mathematical Formulation|48:11|1,8|M
Multiple Linear Regression Part 3 — Code From Scratch|16:01|1|M
Main Assumptions of Linear Regression|17:38|1|M
Gradient Descent From Scratch (End to End)|1:57:56|1,8|M
Batch Gradient Descent with Code Demo|1:04:49|1|M
Stochastic Gradient Descent|49:35|1|M
Mini-Batch Gradient Descent|22:10|1|M
Polynomial Regression|26:46|1|I
Bias Variance Trade-off — Overfitting & Underfitting|8:05|1|M
Ridge Regression Part 1 — Geometric Intuition & Code|19:58|1|M
Ridge Regression Part 2 — Mathematical Formulation & Code|43:41|1|M
Ridge Regression Part 3 — Gradient Descent|18:43|1|M
Ridge Regression Part 4 — 5 Key Points|30:17|1|M
Lasso Regression — Intuition & Code|28:37|1|M
Why Lasso Regression Creates Sparsity|24:30|1|M
ElasticNet Regression|11:41|1|I
Logistic Regression Part 1 — Perceptron Trick|47:06|1|I
Logistic Regression Part 3 — Sigmoid Function|40:44|1|M
Logistic Regression Part 4 — Loss Function, MLE, Binary Cross Entropy|29:03|1,2,7|M
Derivative of Sigmoid Function|5:57|1|M
Logistic Regression Part 5 — Gradient Descent & Code From Scratch|36:42|1,9|M
Accuracy & Confusion Matrix — Type 1 & Type 2 Errors|34:08|2|M
Precision, Recall and F1 Score|42:42|2|M
ROC Curve & ROC-AUC Simplified|1:11:15|2|M
Softmax Regression — Multinomial Logistic Regression|38:21|1|M
Polynomial Features in Logistic Regression|9:11|1|I
Logistic Regression Hyperparameters|13:07|1|I
Naive Bayes Part 6 — Intuition|14:44|1|I
Naive Bayes Part 7 — Mathematics|19:09|1|I
Naive Bayes Part 8 — Simple Example Code|16:03|1|I
Naive Bayes Part 9 — Handling Numerical Data|8:47|1|I
What is K Nearest Neighbors? (KNN in 1 video)|52:01|1|I
Support Vector Machines — Geometric Intuition|11:46|1|I
Mathematics of SVM — Hard Margin|34:54|1,8|I
Mathematics of SVM — Soft Margin|14:38|1|I
Kernel Trick in SVM — Geometric Intuition|6:18|1|I
Kernel Trick in SVM — Code Example|14:04|1|I
Decision Trees — Entropy, Gini Impurity, Information Gain|58:29|1|M
Decision Trees — Hyperparameters, Overfitting & Underfitting|27:23|1|M
Regression Trees — Decision Trees Part 3|35:15|1|I
Introduction to Ensemble Learning|37:43|1|M
Bagging — Introduction (Part 1)|31:13|1|M
Introduction to Random Forest|33:55|1|M
How Random Forest Performs So Well — Bias Variance|12:52|1|M
Bagging vs Random Forest|12:02|1|M
Random Forest Hyper-parameters|15:17|1|I
Hyperparameter Tuning — GridSearchCV & RandomizedSearchCV|11:44|1|I
OOB Score — Out of Bag Evaluation|6:45|1|I
Feature Importance using Random Forest & Decision Trees|27:20|1|I
How AdaBoost Classifier Works — Geometric Intuition|17:14|1|I
AdaBoost — A Step by Step Explanation|19:23|1|I
Bagging vs Boosting|6:17|1|M
Gradient Boosting Explained|32:49|1|M
Gradient Boosting Regression Part 2 — Mathematics|56:42|1|I
Gradient Boosting for Classification|1:04:33|1|I
Introduction to XGBoost|1:19:37|1|M
XGBoost for Regression|47:17|1|I
XGBoost for Classification|39:08|1|I
Stacking and Blending Ensembles|35:20|1|I
K-Means Clustering — Geometric Intuition|23:58|1|I
K-Means Clustering in Python — Practical Example|10:13|1|I
K-Means Clustering From Scratch in Python|33:53|9|M
Imbalanced Data — Undersampling, Oversampling, SMOTE|57:17|1|M
Hyperparameter Tuning using Optuna (Bayesian Optimization)||1|I
# cxo | CampusX — Other playlists & courses
Machine Learning Interview Questions (22 videos)||12|M
Machine Learning Case Study (2 videos)||11|M
Data Science Interview Preparation (2 videos)||13|I
Logical Reasoning (9 videos)||12|M
Probability Basics — ML Roadmap (10 videos)||7|I
Statistics for Machine Learning (13 lessons)||7|M
Advance Statistics — ML Roadmap (7 videos)||7|M
Maths for Machine Learning (23 videos)||8|M
Linear Algebra for Machine Learning (8 videos)||8|I
Deep Learning Optimizers (7 lessons)||3|I
Convolutional Neural Networks (7 lessons)||4|M
Generative Adversarial Networks (1 video)||4|I
Practical Deep Learning using PyTorch (14 lessons)||3,9|M
RAG Playlist (10 videos)||6|I
LLM Evaluation (19 videos)||6|I
Databases (5 lessons)||10|I
Programming Questions for Placement Preparation (20 lessons)||9|I
# mk | Mitesh Khapra — CS7015 Deep Learning
Lecture 3 — Sigmoid Neurons, Gradient Descent, Feedforward Networks||3|M
Lecture 4 — Feedforward Neural Networks, Backpropagation (M1–M10)||3,8|M
Lecture 5 — GD, Momentum, Nesterov, SGD, AdaGrad, RMSProp, Adam||3|M
Lecture 6 — Eigenvalues, Eigendecomposition, PCA, SVD||8|M
Lecture 7 — Autoencoders & Relation to PCA||1,3|I
Lecture 8 — Bias–Variance, L2, Early Stopping, Augmentation, Dropout||1,3,4|M
Lecture 9 — Better Activations, Weight Initialization, Batch Normalization||3|M
Lecture 10 — Learning Vectorial Representations of Words (Word2Vec)||5|M
Lecture 11 — CNNs: LeNet, AlexNet, VGG, GoogLeNet, ResNet||3,4|M
Lecture 14 — RNNs, BPTT, Vanishing & Exploding Gradients||3,5|M
Lecture 15 — GRUs and LSTM Cells||5|M
Lecture 16 — Encoder–Decoder Models, Attention Mechanism||5|M
Lecture 21 — Variational Autoencoders (slides)||3|I
Assignment 1 — Derivatives + Probability [Theory]||7|I
Assignment 2 — Linear Algebra [Theory]||8|I
Assignment 3 — Backpropagation [Programming]||3,9|M
Assignment 4 — Word2Vec [Programming]||5|I
Assignment 5 — Convolutional Neural Networks [Programming]||4|I
Assignment 7 — Recurrent Neural Networks [Programming]||5|I
# td | TuteDude — GenAI course
M12 L22 — Train vs Validation vs Test Data & Cross Validation||1|M
A14 — Feature Engineering, Encoding, Scaling & Pipelines||1|M
A15 — Core Algorithms, Metrics & Model Behavior||1,2|M
A16 — SVM, Trees, Ensembles, Validation & Unsupervised Learning||1|I
M13 L6 — Recommendation System Project Overview||1|I
M13 L7 — Getting Started with Project||1|I
M13 L8 — Preprocessing in Recommendation System||1|I
M13 L9 — NLP Vectorization & Building the Recommendation System||1|I
M13 L10 — Launching Recommendation System as a Website||1|I
M13 L15 — Text Vectorization Overview||5|M
M13 L16 — One Hot Encoding & Bag of Words||5|M
M13 L17 — N-Grams & TF-IDF||5|M
M13 L18 — Word2Vec Vector Embedding Overview||5|M
M13 L19 — Types of Word2Vec Techniques||5|M
A18 — Text Vectorization Techniques||5|I
A19 — Word2Vec Text Embeddings||5|I
A20 — Building & Deploying a Recommendation System||1|I
M15 L2 — What is Loss Function & Training of GPT-like Networks||3|M
M15 L3 — Regression Loss & Binary Cross Entropy||3|M
M15 L4 — GPT Training Loss & Multi-class Loss||3|M
M15 L9 — What is the Vanishing Gradient Problem||3|M
M15 L10 — Vanishing Gradient: Reason, Identify & Handle||3|M
M18 L3 — Transfer Learning in Neural Networks||4|I
M18 L4 — How Transfer Learning is Performed in Industry||4|I
M21 L4 — GRU Introduction||5|I
M21 L5 — Working of GRU||5|I
M24 L2 — TikTokenizer & Tokenization in Transformers||5|I
M24 L4 — Positional Encoding & Self Attention||5|M
M24 L5 — Multi-Head Attention & Encoder Layers||5|M
M24 L6 — Decoder Working in Transformer||5|M
M24 L9 — Attention Mechanism||5|M
M24 L11 — Transfer Learning with Transformers||5|M
M24 L12 — Transfer Learning with Language Modelling Task||5|I
M24 L13 — LLMs from OpenAI and Google||5|I
M25 L3 — ChatGPT Training Initial Steps||6|I
M25 L4 — ChatGPT Training Final RLHF Step||6|I
M25 L5 — Evolution of Large Language Models||5|I
M25 L6 — All LLM Models Analysis||5|I
M28 L1 — LangChain Components: Models||6|I
M28 L2 — LangChain Components: Prompts||6|I
M28 L3 — LangChain Components: Chains & Indexes||6|I
M28 L4 — LangChain Components: Memory & Agents||6|I
M28 L9 — Text Splitters in LangChain||6|M
M28 L11 — Length-based Text Splitter||6|M
M28 L12 — Text Structure-based Text Splitter||6|M
M28 L13 — Document Structure & Semantic Text Splitting||6|M
M28 L14 — Introduction to Embedding Models||6|M
M28 L15 — OpenAI & HuggingFace Embedding Models||6|M
M28 L16 — Document Similarity Search with Embeddings||6|M
M28 L18 — Getting Started with Vector Stores||6|M
M28 L19 — Vector Stores vs Vector Databases, ChromaDB||6|M
M28 L20 — Working with ChromaDB||6|M
M28 L21 — FAISS Vector Store||6|M
A21 — LangChain Document Loaders & Text Splitters||6|I
A22 — Embedding Models, Vector Stores & Similarity Search||6|I
M29 L1 — Getting Started with Retrievers||6|M
M29 L2 — Wikipedia Retriever & Vector Store Retriever||6|M
M29 L3 — Maximal Marginal Relevance Retriever||6|M
M29 L4 — Multi-Query & Contextual Compression Retriever||6|M
M29 L5 — What is RAG (Shifting from Fine-Tuning to RAG)||6|M
M29 L6 — YouTube Content Chatbot (RAG Application)||6|M
A23 — OpenAI & Retrieval-Augmented Generation (RAG)||6|M
M30 L1 — What is Prompting & Prompt Templates||6|I
M30 L7 — Chains in LangChain||6|I
M30 L8 — Parallel & Conditional Chains||6|I
M30 L9 — What are Runnables & LCEL||6|I
M35 L1 — Tools in AI Agents & Built-in Tools||6|I
M35 L2 — Creating Custom Tools & Toolkit||6|I
M35 L3 — Tool Binding for Tool Calling||6|I
M35 L4 — Tool Calling & Tool Execution||6|I
M35 L5 — What is an AI Agent||6|I
M35 L6 — Creating an AI Agent||6|I
M35 L7 — Working of a ReAct AI Agent||6|I
A32 — AI Agents using LangChain||6|I
# cwh | CodeWithHarry — Data Science course
NumPy — Why use NumPy|23:18|9|M
NumPy — Creating NumPy Arrays|14:33|9|M
NumPy — Indexing and Slicing|11:44|9|M
NumPy — Multidimensional Indexing and Axis|12:54|9|M
NumPy — Data Types|11:23|9|M
NumPy — Broadcasting|8:56|9|M
NumPy — Built-in Mathematical Functions|5:02|9|M
Pandas — Getting Started|9:35|9|M
Pandas — Core Data Structures|8:27|9|M
Pandas — Creating DataFrames|18:27|9|M
Pandas — Data Selection & Filtering|24:07|9|M
Pandas — Data Cleaning & Preprocessing|23:18|9|M
Pandas — Data Transformation|12:35|9|M
Pandas — Melt and Pivot|6:04|9|M
Pandas — Aggregation & Grouping|8:16|9|M
Pandas — Merging & Joining Data|9:32|9|M
Pandas — Working with CSVs|6:49|9|M
SQL — Introduction to Databases|15:13|10|M
SQL — Selecting Data from a Table|14:53|10|M
SQL — Transactions in MySQL|14:54|10|I
SQL — Deep Dive into Constraints|7:29|10|M
SQL — Foreign Keys|16:02|10|M
SQL — Joins in MySQL|10:00|10|M
SQL — UNION in MySQL|7:51|10|M
SQL — Functions in MySQL|5:51|10|M
SQL — Views in MySQL|8:47|10|M
SQL — Indexes in MySQL|9:09|10|I
SQL — Subqueries in MySQL|6:08|10|M
SQL — GROUP BY in MySQL|5:21|10|M
Probability — Introduction to Probability|11:12|7|M
Probability — Types of Experiments|7:55|7|M
Probability — Practice Set 1|9:24|7|M
Probability — Basic Rules of Probability|20:12|7|M
Probability — Practice Questions|5:00|7|M
Probability — Conditional Probability|11:33|7|M
Probability — Bayes' Theorem|5:06|7|M
Distributions — Introduction to Probability Distributions|7:45|7|M
Distributions — Uniform Distribution|7:59|7|M
Distributions — Binomial Distribution|6:39|7|M
Distributions — Normal Distribution|9:24|7|M
Distributions — Central Limit Theorem|4:00|7|M
Practical ML — Creating a Test Set|12:09|1|M
Practical ML — Stratified Shuffle Split|16:29|1|M
Practical ML — Constructing Pipelines in sklearn|7:04|1|M
Web Dev — Creating an API in Flask|4:05|10|I
LLMs — How LLMs Work|9:15|6|I
LLMs — Retrieval Augmented Generation (RAG)|10:18|6|M
Git — Introduction to Git and GitHub|13:21|10|M
Git — Understanding the Git Workflow|8:01|10|M
Git — Practically Implementing Git Workflow|9:05|10|M
Git — Viewing All Commits|12:08|10|M
Git — Branches in Git|11:33|10|M
Git — Essential Git Branch Commands|5:07|10|M
Git — Merge Conflicts and How to Resolve Them|9:21|10|M
Git — Introduction to GitHub|8:39|10|M
Git — Essential Remote Repository Commands|7:48|10|M
Git — .gitignore in Git|8:06|10|M
Project 3 — RAG-based AI Teaching Assistant (20 lectures)|3:34:00|14|I
# cwp | CodeWithHarry — Python course
Chapter 4 — Lists and Tuples (+ practice set)|35:03|9|M
Chapter 5 — Dictionary & Sets (+ practice set)|43:45|9|M
Chapter 8 — Functions & Recursion (+ practice set)|44:02|9|M
Chapter 10 — Object Oriented Programming (+ practice set)|40:55|10|I
Chapter 11 — Inheritance & more on OOPs (+ practice set)|45:28|10|I
Chapter 12 — Advanced Python 1 (+ practice set)|42:13|9|M
Chapter 13 — Advanced Python 2 (+ practice set)|32:31|9|M
# dsa | DSA with Python (video)
Algorithmic Complexity, Order of Growth & Practice (0:05–1:32)|1:27:11|9|M
Arrays, Referential & Dynamic Arrays, Build Your Own List (1:32–2:49)|1:17:23|9|M
Linked Lists — Insert, Delete, Search, In-place Reversal (2:49–5:06)|2:16:35|9|M
Stacks — Implementation, Bracket & Celebrity Problems (5:06–6:20)|1:14:26|9|M
Queues — Implementation, Queue using 2 Stacks (6:20–6:46)|25:21|9|M
Hashing — Collisions, Linear Probing, Chaining, Load Factor (6:46–9:24)|2:37:50|9|M
Linear Search & Binary Search (9:24–9:41)|17:19|9|M
Sorting — Bubble, Selection, Merge Sort (9:41–end)||9|M
# ext | External (gap fills)
NeetCode 150 — Arrays & Hashing (incl. prefix sums)||9|M
NeetCode 150 — Two Pointers||9|M
NeetCode 150 — Sliding Window||9|M
NeetCode 150 — Stack||9|M
NeetCode 150 — Binary Search (incl. rotated array)||9|M
NeetCode 150 — Linked List||9|M
NeetCode 150 — Trees (traversals)||9|M
NeetCode 150 — Heap / Priority Queue||9|M
NeetCode 150 — Graphs (grid BFS/DFS)||9|M
NeetCode 150 — Intervals||9|M
NeetCode 150 — 1-D Dynamic Programming||9|I
NeetCode 150 — Greedy||9|I
Write from scratch: stable softmax, PMF sampling, Fisher–Yates shuffle||7,9|M
LeetCode SQL 50 — Select & Basic Joins||10|M
LeetCode SQL 50 — Aggregate Functions, Sorting & Grouping||10|M
LeetCode SQL 50 — Advanced Select, Joins & Subqueries||10|M
SQL window functions — ROW_NUMBER, RANK, LAG, running totals||10|M
Multicollinearity & VIF (StatQuest / statsmodels tutorial)||1|M
StatQuest — ROC and AUC, Clearly Explained (incl. PR curves)||2|M
Calibration, KL divergence, generative vs discriminative (CS229 notes)||2,3|I
BLEU & ROUGE explained (only if NLP is on your resume)||2|I
CS229 notes — MLE vs MAP, ridge as a Gaussian prior||1,7|M
CS229 notes — SVM hinge loss & dual formulation||1|I
GMM & EM basics (StatQuest / CS229)||1|I
Google — Recommendation Systems course (CF, MF, cold start)||1|I
Hyndman FPP Ch. 1–3 — trend, seasonality, lags, ARIMA, MAPE||1,2,11|I
Layer Norm vs Batch Norm explainer||3,5|M
U-Net architecture + Dice / IoU loss||4|I
ViT paper Sections 1–3 — patches, CLS token||4|I
Jay Alammar — The Illustrated Transformer||5|M
3Blue1Brown — Transformer / attention videos||5|I
LoRA / QLoRA & quantization basics (HF PEFT docs)||6|M
Hallucination causes & mitigation (survey blog)||6|M
KV cache + temperature, top-k, top-p explainer||6|I
Fine-tuning failure modes & catastrophic forgetting||6|I
A/B test design primer — sample size, power, guardrails||7|M
Penn State STAT 500 — Hypothesis testing lessons||7|I
GfG — OS MCQs: scheduling, deadlock, paging, threads vs processes||10|I
REST / HTTP vs HTTPS basics (GfG)||10|I
IndiaBix / PrepInsta — Quant: %, ratios, work/time, mixtures||12|M
IndiaBix — Data Interpretation sets||12|M
2 timed coding problems (25 min each)||12|M
GfG — Top puzzles list||12|I
Hacking the Case Interview (Taylor Warfield)||11|I
# iqb | Interview Question Bank
§1 Classical ML — answer all aloud (168 Qs)||1|M
§2 Model evaluation & metrics (33 Qs)||2|M
§3 Deep learning fundamentals (39 Qs)||3|M
§4 Computer vision (32 Qs)||4|M
§5 NLP & sequence models (46 Qs)||5|M
§6 GenAI, LLMs & RAG (45 Qs)||6|M
§7 Probability & statistics problems (53 Qs)||7|M
§8 Linear algebra, calculus, optimization (15 Qs)||8|M
§9 DSA & coding (85 Qs)||9|M
§10 SQL, OOP, OS, Git sections (skip C++/HPC)||10|I
§11 Case studies & system design (52 Qs)||11|M
§12 Puzzles & aptitude (10 Qs)||12|I
§13 HR & behavioural (102 Qs)||13|M
§14 Project & resume deep-dives (52 Qs)||14|M
# self | Self-prep & practice
Mock OA 1 — quant + DI + logical, CAT-style 23 Qs / 30 min||12|M
Mock OA 2 — review every wrong answer||12|M
Mock OA 3 — strict time||12|M
Case drill — Fraud detection system||11|M
Case drill — Churn prediction||11|M
Case drill — Demand / call-volume forecasting||11|M
Case drill — Investigating a 15% metric drop||11|M
Case drill — A/B test design||11|M
Case drill — Capital One profit / runway guesstimates||11|I
Case drill — Recommender & LLM/RAG product design||11|I
60-second intro, rehearsed aloud||13|M
"Why biology → data science" story||13|M
Clear commitment to industry (PhD question)||13|M
Strength & weakness||13|M
3 STAR stories — conflict, teamwork, leadership||13|M
Stress handling, 5-year plan, location flexibility||13|M
Questions to ask the interviewer||13|M
Failure / lowest point, rejection, family background||13|I
One-page note per target company||13|M
Mock interview 1 — technical||13|M
Mock interview 2 — HR||13|M
Mock interview 3 — mixed||13|M
Interview habits — clarify, pen & paper, ask feedback||13|I
7-point sheet for every project (problem → layperson version)||14|M
Defend every resume keyword on paper||14|M
Resume v1 — general DS, one page||14|M
Resume v2 — GenAI / health-AI||14|M
One strong bio + ML project (e.g. omics, biomedical NER)||14|M
Practise steering interviews to your strongest project||14|I
`;
