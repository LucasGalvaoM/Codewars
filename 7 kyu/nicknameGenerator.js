nicknameGenerator=s=>s.length<4?'Error: Name too short':'aeiou'.includes(s[2])?s.slice(0,4):s.slice(0,3)