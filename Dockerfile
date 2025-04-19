# Simple Flask-only portfolio image

FROM python:3.10-slim

WORKDIR /app

COPY server.py requirements.txt ./
COPY templates/ ./templates

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "server.py"]

