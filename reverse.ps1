# 僅測試網路連通性，不包含敏感的連線代碼
$dest = "0.tcp.ap.ngrok.io"
$port = 11848
Test-NetConnection -ComputerName $dest -Port $port | Out-File C:\connection_test.txt
