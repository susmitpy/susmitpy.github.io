from PIL import Image, ImageOps
import requests
from io import BytesIO
import os
import cairosvg

# List of image URLs and settings
image_urls = [
    {
        "name": "python",
        "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "includes_text": False
    },
    {
        "name": "dart",
        "url": "https://dart.dev/assets/img/logo/logo-white-text.svg",
        "includes_text": False
    },
    {
        "name": "ts",
        "url": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        "includes_text": False
    },
    {
        "name": "csharp",
        "url": "https://learn.microsoft.com/en-us/dotnet/media/logo_csharp.png",
        "includes_text": False
    },
    {
        "name": "sklearn",
        "url": "https://spark.apache.org/images/scikit-learn.png",
        "includes_text": False
    },
    {
        "name": "pandas",
        "url": "https://spark.apache.org/images/pandas.png",
        "includes_text": True
    },
    {
        "name": "cassandra",
        "url": "https://spark.apache.org/images/1280px-Cassandra_logo.png",
        "includes_text": True
    },
    {
        "name": "kafka",
        "url": "https://spark.apache.org/images/kafka.png",
        "includes_text": True
    },
    {
        "name": "mongodb",
        "url": "https://spark.apache.org/images/mongo.png",
        "includes_text": True
    },
    {
        "name": "flutter",
        "url": "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
        "includes_text": True
    },
    {
        "name": "nextjs",
        "url": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        "includes_text": True
    },
    {
        "name": "django",
        "url": "https://static.djangoproject.com/img/logos/django-logo-positive.png",
        "includes_text": True
    },
    {
        "name": "fastapi",
        "url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg",
        "includes_text": True
    },
    {
        "name": "flask",
        "url": "https://flask.palletsprojects.com/en/stable/_images/flask-horizontal.png",
        "includes_text": True
    },
    {
        "name": "nodejs",
        "url": "https://nodejs.org/static/logos/nodejsDark.svg",
        "includes_text": True
    },
    {
        "name": "postgresql",
        "url": "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg",
        "includes_text": False
    },
    {
        "name": "firebase",
        "url": "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-standard.svg",
        "includes_text": True
    },
    {
        "name": "neo4j",
        "url": "https://dist.neo4j.com/wp-content/uploads/20230926084108/Logo_FullColor_RGB_TransBG.svg",
        "includes_text": True
    },
    {
        "name": "aws",
        "url": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        "includes_text": True
    },
    
    {
        "name": "github",
        "url": "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        "includes_text": False
    },
    {
        "name": "serverless",
        "url": "https://cdn.prod.website-files.com/60acbb950c4d6606963e1fed/60acbb950c4d66854e3e2013_logo%20serverless%20dark.svg",
        "includes_text": False
    },    
    {
        "name": "spark",
        "url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg",
        "includes_text": True
    }
]

# Target settings
background_color = (255, 255, 255)  # White
output_format = "JPEG"

# Ensure output directory exists
os.makedirs("./output", exist_ok=True)

# Process and save images
processed_images = []
for image in image_urls:
    name = image["name"]
    url = image["url"]
    includes_text = image["includes_text"]
    
    # Set desired width based on includes_text and calculate height dynamically
    if includes_text:
        desired_width = 250  # Wider width for images with text
    else:
        desired_width = 150  # Standard width
    
    # Fetch the image from the URL
    response = requests.get(url)
    image_data = BytesIO(response.content)
    
    # Open the image
    try:
        if url.lower().endswith('.svg'):
            # Convert SVG to PNG
            png_data = cairosvg.svg2png(url=url)
            img = Image.open(BytesIO(png_data)).convert("RGBA")
        else:
            img = Image.open(image_data).convert("RGBA")
        
        # Add white background if image has transparency
        if img.mode == "RGBA":
            background = Image.new("RGBA", img.size, background_color + (255,))
            img = Image.alpha_composite(background, img)
        
        new_img = Image.new("RGB", img.size, background_color)
        new_img.paste(img, (0, 0), img)

        # Calculate the height to maintain aspect ratio
        # aspect_ratio = img.height / img.width
        # desired_height = int(desired_width * aspect_ratio)
        # current_output_size = (desired_width, desired_height)
        
        # Resize the image while maintaining aspect ratio
        # img.thumbnail(current_output_size, Image.LANCZOS)
        # Create a new image with white background
        # new_img = Image.new("RGB", current_output_size, background_color)
        # new_img.paste(img, ((desired_width - img.width) // 2, (desired_height - img.height) // 2))
        
        # Save the processed image
        output_path = f"./output/{name}.jpeg"
        new_img.save(output_path, output_format)
        processed_images.append(output_path)
    except Exception as e:
        processed_images.append(f"Error processing image {name}: {e}")