# FROM python:3.11-alpine
FROM python:3.11.5-slim-bullseye

# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1
ENV PIP_DISABLE_PIP_VERSION_CHECK 1 
ENV PYTHONDONTWRITEBYTECODE 1 
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Copy requirements.txt and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt
# RUN apk update && apk add --no-cache postgresql-dev python3-dev libpq-dev && pip install -r requirements.txt

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# RUN python manage.py makemigrations 
# RUN python manage.py migrate
# RUN python manage.py crawl

# Run the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

