SELECT * 
FROM yellowgame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM yellowgame), 1)