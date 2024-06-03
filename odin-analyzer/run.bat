wt new-tab -p "Command Prompt" -d "%cd%" cmd /k python .\backend\server.py
wait 3
wt new-tab -p "Command Prompt" -d "%cd%" cmd /k npm --prefix .\frontend\ run start