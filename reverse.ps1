"Hello World" | Out-File C:\test.txt
Test-NetConnection -ComputerName 0.tcp.ap.ngrok.io -Port 11848 | Out-File C:\network_test.txt -Append
