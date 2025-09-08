@echo off
echo ========================================
echo    Git 자동 설정 및 GitHub 업로드
echo ========================================
echo.

echo 1. Git 저장소 초기화 중...
"C:\Program Files\Git\bin\git.exe" init

echo.
echo 2. 모든 파일 추가 중...
"C:\Program Files\Git\bin\git.exe" add .

echo.
echo 3. 첫 커밋 생성 중...
"C:\Program Files\Git\bin\git.exe" commit -m "Initial portfolio commit"

echo.
echo 4. 메인 브랜치 설정 중...
"C:\Program Files\Git\bin\git.exe" branch -M main

echo.
echo 5. GitHub 저장소 연결 중...
"C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/yk070201e/yk070201e-portfolio.git

echo.
echo 6. GitHub에 업로드 중...
"C:\Program Files\Git\bin\git.exe" push -f origin main

echo.
echo ========================================
echo 완료! 🎉
echo https://github.com/yk070201e/yk070201e-portfolio
echo ========================================
pause
