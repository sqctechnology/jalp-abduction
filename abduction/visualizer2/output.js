var data="{\"type\":\"A1RuleNode\",\"currentGoal\":\"has_colour(node1,red)\",\"nextGoals\":[ \"ic(M,N,C) :- colour(C), edge(N,M), has_colour(N,C), has_colour(M,C).\"],\"assignments\":{},\"abducibles\":[],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"D2RuleNode\",\"currentGoal\":\"colour(C)\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M,N,C) :- edge(N,M), has_colour(N,C), has_colour(M,C).\"],\"assignments\":{},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"C3==red\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M2,N3,C3) :- edge(N3,M2), has_colour(N3,C3), has_colour(M2,C3).\"],\"assignments\":{},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M2,N3,C3) :- edge(N3,M2), has_colour(N3,red), has_colour(M2,red).\"],\"assignments\":{ \"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"D2RuleNode\",\"currentGoal\":\"edge(N3,M2)\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M2,N3,C3) :- has_colour(N3,red), has_colour(M2,red).\"],\"assignments\":{ \"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"M4==node2\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M4,N5,C5) :- N5==node1, has_colour(N5,red), has_colour(M4,red).\"],\"assignments\":{ \"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M4,N5,C5) :- N5==node1, has_colour(N5,red), has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"N5==node1\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M4,N5,C5) :- has_colour(N5,red), has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"A2RuleNode\",\"currentGoal\":\"has_colour(node1,red)\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M4,N5,C5) :- has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"node1==node1\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C7) :- red==red, has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C7) :- red==red, has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"red==red\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C7) :- has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C7) :- has_colour(node2,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"A2RuleNode\",\"currentGoal\":\"has_colour(node2,red)\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C7) :- .\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"node2==node1\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C8) :- red==red.\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeFalseRuleNode\",\"currentGoal\":\"FALSE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C8) :- red==red.\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"PositiveTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M5,N6,C6) :- M5==node1, N6==node2, has_colour(N6,red), has_colour(M5,red).\",\"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"M5==node1\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M5,N6,C6) :- N6==node2, has_colour(N6,red), has_colour(M5,red).\"],\"assignments\":{ \"M4\":\"node2\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M5,N6,C6) :- N6==node2, has_colour(N6,red), has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"N6==node2\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M5,N6,C6) :- has_colour(N6,red), has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"A2RuleNode\",\"currentGoal\":\"has_colour(node2,red)\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(M5,N6,C6) :- has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"node2==node1\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C9) :- red==red, has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeFalseRuleNode\",\"currentGoal\":\"FALSE\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"nestedDenials\":[ \"ic(C9) :- red==red, has_colour(node1,red).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"PositiveTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M3,N4,C4) :- C4==blue, edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"C4==blue\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M3,N4,C4) :- edge(N4,M3), has_colour(N4,C4), has_colour(M3,C4).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M3,N4,C4) :- edge(N4,M3), has_colour(N4,blue), has_colour(M3,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"D2RuleNode\",\"currentGoal\":\"edge(N4,M3)\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M3,N4,C4) :- has_colour(N4,blue), has_colour(M3,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"M6==node2\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(M6,N7,C10) :- N7==node1, has_colour(N7,blue), has_colour(M6,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(M6,N7,C10) :- N7==node1, has_colour(N7,blue), has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"N7==node1\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(M6,N7,C10) :- has_colour(N7,blue), has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"A2RuleNode\",\"currentGoal\":\"has_colour(node1,blue)\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(M6,N7,C10) :- has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"node1==node1\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(C12) :- blue==red, has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(C12) :- blue==red, has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"blue==red\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(C12) :- has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeFalseRuleNode\",\"currentGoal\":\"FALSE\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"nestedDenials\":[ \"ic(C12) :- has_colour(node2,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"PositiveTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[ \"ic(M7,N8,C11) :- M7==node1, N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"M7==node1\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M7,N8,C11) :- N8==node2, has_colour(N8,blue), has_colour(M7,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M7,N8,C11) :- N8==node2, has_colour(N8,blue), has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"N8==node2\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M7,N8,C11) :- has_colour(N8,blue), has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M7,N8,C11) :- has_colour(node2,blue), has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"A2RuleNode\",\"currentGoal\":\"has_colour(node2,blue)\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(M7,N8,C11) :- has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"E2RuleNode\",\"currentGoal\":\"node2==node1\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(C13) :- blue==red, has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\",\"ic(M7,N8,C11) :- has_colour(node2,blue), has_colour(node1,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"NegativeFalseRuleNode\",\"currentGoal\":\"FALSE\",\"nextGoals\":[],\"nestedDenials\":[ \"ic(C13) :- blue==red, has_colour(node1,blue).\"],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\",\"ic(M7,N8,C11) :- has_colour(node2,blue), has_colour(node1,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"PositiveTrueRuleNode\",\"currentGoal\":\"TRUE\",\"nextGoals\":[],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\",\"ic(M7,N8,C11) :- has_colour(node2,blue), has_colour(node1,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"EXPANDED\",\"children\":[ {\"type\":\"LeafRuleNode\",\"currentGoal\":\"null\",\"nextGoals\":[],\"assignments\":{ \"M4\":\"node2\",\"M5\":\"node1\",\"M6\":\"node2\",\"M7\":\"node1\",\"N5\":\"node1\",\"N6\":\"node2\",\"N7\":\"node1\",\"N8\":\"node2\",\"C3\":\"red\",\"C4\":\"blue\"},\"abducibles\":[ \"has_colour(node1,red)\"],\"denials\":[ \"ic(M4,N5,C5) :- has_colour(node1,red), has_colour(node2,red).\",\"ic(C7) :- has_colour(node2,red).\",\"ic(M5,N6,C6) :- has_colour(node2,red), has_colour(node1,red).\",\"ic(M6,N7,C10) :- has_colour(node1,blue), has_colour(node2,blue).\",\"ic(M7,N8,C11) :- has_colour(node2,blue), has_colour(node1,blue).\"],\"equalities\":[],\"constraints\":[],\"mark\":\"SUCCEEDED\",\"children\":[]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}]}"