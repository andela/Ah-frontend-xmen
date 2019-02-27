import os
from decouple import config
import dj_database_url

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.11/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', cast=bool, default=False)

ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    'ah-backend-xmen.herokuapp.com',
    'ah-backend-xmen-staging.herokuapp.com'
]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'corsheaders',
    'django_extensions',
    'rest_framework',
    'drf_yasg',

    'authors.apps.authentication',
    'authors.apps.core',
    'authors.apps.profiles',

    'oauth2_provider',
    'social_django',
    'rest_framework_social_oauth2',
]

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'authors.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',

                # context processors
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'authors.wsgi.application'

# Database

DATABASES = {
    'default': dj_database_url.config(default=config("DATABASE_URL"))
}

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/



        # visitor = None
        # request = self.context.get("request")
        # if not request:
        #     return obj.read_stats
        # if not isinstance(request.user, User):
        #     return obj.read_stats
        # visitor = request.user
        # if visitor.username == obj.author.user.username :
        #     return obj.read_stats

        # # if 
        
        # obj.read_stats = obj.read_stats + 1
        # article = Article.objects.get(pk=obj.pk)
        # article.read_stats = obj.read_stats
        # article.save()
        # return obj.read_stats

STATIC_URL = '/static/'


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static', 'production')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Cross Origin Resource Sharing
CORS_ORIGIN_WHITELIST = (
    '0.0.0.0:4000',
    'localhost:4000',
)

# Tell Django about the custom `User` model we created. The string
# `authentication.User` tells Django we are referring to the `User` model in
# the `authentication` module. This module is registered above in a setting
# called `INSTALLED_APPS`.
AUTH_USER_MODEL = 'authentication.User'

REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'authors.apps.core.exceptions.core_exception_handler',
    'NON_FIELD_ERRORS_KEY': 'error',

    'DEFAULT_AUTHENTICATION_CLASSES': (
        'authors.apps.authentication.backends.JWTAuthentication',
    ),
}

AUTHENTICATION_BACKENDS = {
    # this one is for the Django framework
    'django.contrib.auth.backends.ModelBackend',

    # This is for the django-rest-framework-social-oauth2
    'rest_framework_social_oauth2.backends.DjangoOAuth2',

    # This is for the google
    'social_core.backend.google.GoogleOAuth2'

    # Facebook auth
    'social_core.backend.facebook.FacebookOAuth2'
    'social_core.backends.facebook.FacebookAppOAuth2'

    # Twitter auth
    'social_core.backend.twitter.TwitterOAuth2'
}

# return new_social_user

            # twitter_user = {
            #     'username': facebook_profile.get('name')+str(uuid.uuid1().int)[:3],
            #     'email': facebook_profile.get('email'),
            #     'social_id': facebook_profile.get('id')
            # }
            # new_social_user = User.objects.create(**twitter_user)

# Google API application configurations
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '697152083390-mgr6vnknqpoim05nj2m9fd8a8srn4113.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'QFBCECdN2pM9HKHJVQYpqVBm'

# Facebook API application configurations
SOCIAL_AUTH_FACEBOOK_OAUTH2_KEY = '367351517400934'
SOCIAL_AUTH_FACEBOOK_OAUTH2_SECRET = '92f37eabfb7777856e6001ab2ab1a5bb'
# This is for extra permissions for example facebook does not
# return the email to access it then you have to include this
SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'id, username, email, password'
}

# Twitter API application configurations
SOCIAL_AUTH_TWITTER_OAUTH2_KEY (access token) = '1084435767609491456-lPEu7XH3lpQpJkNUsnBAfE2RxvzFcq'
SOCIAL_AUTH_FACEBOOK_OAUTH2_SECRET (access token secret) = '4G8RXBlCHlXJTgyd2fPkMdtE48cCAyuWlX9EMPOf9LRNM'

consumer_API_key = 'm3zDQN5pkFlS129EA7sAr3XbN'
consumer_API_secret_key = 'shthUYGMZ2fOi9asg1dnryqdhvqx4wv0zwZEHAoIgbXooiKuub'

# from django.template.defaultfilters import slugify

# tags = models.ManyToManyField('articles.Tag', related_name='article_tag')

# class Tag(models.Model):
#     """
#     The Tag model is to help us hold the tag data we get from
#     the users and store hence helping to create a field
#     """
#     tagName = models.CharField(max_length=70)
#     slug = models.SlugField(db_index=True, unique=True)

# tags = TagRelatedField(many=True, required=False, source='tags')
# all_tags = []

from rest_framework import serializers
from .models import Tag


class TagRelatedField(serializers.RelatedField):
    
    def get_queryset(self):
        return Tag.objects.all()
        
    def to_internal_value(self, data):
        tag, created = Tag.objects.get_or_create(tag = data, slug = data.lower())
        return tag

    def to_representation(self, obj):
        return obj.tag



        # serializer_data=self.get_queryset()
        # serializer=self.serializer_class(serializer_data,many=True)
        # return Response({'tags': serializer.data},status = status.HTTP_200_OK)

# def validate_facebook_auth_token(self, auth_token):

    #     user_profile = FacebookSocialAuth.verify_facebook_token(auth_token)
    #     try:
    #         social_id = user_profile['id']
    #         print(social_id)
    #     except:
    #         raise serializers.ValidationError(
    #             'Token is either invalid or expired'
    #         )

    #     email = user_profile.get('email')
    #     username = user_profile.get('name')
    #     social_user = User.objects.get(social_id=user_profile.get('id'))
    #     return Response({
    #         'email':new_social_user.email,
    #         'token':new_social_user.get_token, 
    #         'username':new_social_user.username,
    #         'new_user':True
    #         }, status=status.HTTP_200_OK)

        # if user_profile is None:
        #     error_msg = 'Token provided is either invalid or expired.'
        #     return error_msg
        # if user_profile['id'] is None:
        #     error_msg = 'Token provided is e ither invalid or expired.'
        #     return error_msg
        # # social_user = user_profile['id']
        # try:
        #     social_user = User.objects.get(social_id=user_profile.get('id'))
        # except User.DoesNotExist:
        #     social_user = None
        # # return create_social_user
        # if social_user is None:
        #     social_id = user_profile.get('id')
        #     # print(social_id)
        #     username = user_profile.get('name')+str(uuid.uuid1().int)[:5]
        #     email = user_profile.get('email')
        #     new_social_user = User.objects.create(username=username,email=email,social_id=social_id)
        #     # print(new_social_user)


        #     user_profile = SocialAuth.verify_google_token(auth_token)

    #     try:
    #         social_user = User.objects.get(social_id=user_profile.get('id'))
    #     except User.DoesNotExist as e:
    #         username = user_profile.get('name') + str(uuid.uuid1().int)[:3]
    #         email = user_profile.get('email')
    #         social_id = user_profile.get('id')
    #         new_social_user = User.objects.create(username=username,email=email,social_id=social_id)
    #         serializer=UserSerializer(new_social_user)
    #         return Response(serializer.data)

    #     serializer=UserSerializer(social_user)
    #     return Response(serializer.data, status=status.HTTP_200_OK)

# try:
        #     social_user = User.objects.get(social_id=facebook_profile.get('id'))
        # except User.DoesNotExist as e:
        #     twitter_user = {
        #         'username': twitter_profile.get('name') + str(uuid.uuid1().int)[:3],
        #         'email': twitter_profile.get('email'),
        #         'social_id': twitter_profile.get('id')
        #     }
        #     new_social_user = User.objects.create(**facebook_user)
        #     return new_social_user
        # return social_user


            # serializer=UserSerializer(new_social_user)
            # return Response(serializer.data)
            # return Response({
            #     'username':new_social_user.username,
            #     'email':new_social_user.email,
            #     'token':new_social_user.get_token
            #     }, status=status.HTTP_200_OK)


            # facebook_profile = SocialAuth.verify_facebook_token(auth_token)

        # try:
        #     social_user = User.objects.get(social_id=facebook_profile.get('id'))
        # except User.DoesNotExist as e:
        #     username = facebook_profile.get('name') + str(uuid.uuid1().int)[:3]
        #     email = facebook_profile.get('email')
        #     social_id = facebook_profile.get('id')
        #     new_social_user = User.objects.create(username=username,email=email,social_id=social_id)
        
        #     return Response(serializer.data)

        # serializer=UserSerializer(social_user)
        # res = {'jwt_token': serializer.data['auth_token']}

        #     return Response({
        #         'email':new_social_user.email,
        #         'token':new_social_user.get_token, 
        #         'username':new_social_user.username,
        #         'first_name':user.get('first_name'),
        #         'last_name':user.get('last_name'),
        #         'new_user':True
        #         }, status=status.HTTP_200_OK)
        # return Response({
        #     'email':saved_social_user.email,
        #     'token':'replace with jwt token', 
        #     'username':saved_social_user.username,
        #     'first_name':user.get('first_name'),
        #     'last_name':user.get('last_name'),
        #     'new_user':False
        #     }, status=status.HTTP_200_OK)



        chuck darg
        EAAFOGrCzz2YBANTjZByrqr8jsqCj24l1KvbKhOpbwqFuFtLtkUvAoniUgeB8AOWwNI8rPpsHczsQlT0jR9cZCPOMiHdpfu9xF3AFcJvcitWtPfZAxDuKB0i1lXCZCGRxBbkOAQSdZChbY6X7oQkzbuc3KcuQ4YhfIIQfZBsBRjiGFZCsvQBZCoI0ig5KcYfYWNl34tQZBrLcu52YhaEFtPgtxurpQZAtnD6GiRJtGzHqlCUaDcmsBbtzeF

        mariah
        EAAFOGrCzz2YBANJlC1vmlX4ZAY0sXFKlU3sEg4jtjpZC4Yh9G5c04B89p9IcvJ6n8Jh8i5On7jmKquCB9dTbzGiyZCscijt0pdlJ7ZBeLOCLoJlB7zIHluKSfJ1PTMBsiwwdLv0iCi17H1TJdADBW5fMe10nvcRuZCRnqJqmKkNpQqPAs5ozzXQqOnDV2cPfjMCM6qelsUENfCJSrh9Huy8zjmyQdSgBwOJ06jHYzMlWDFME3dLuD

# return Response(serializer.data)

                # return Response({
                #     'email':new_social_user.email,
                #     'token':'replace with jwt token', 
                #     'username':new_social_user.username,
                #     'first_name':user.get('first_name'),
                #     'last_name':user.get('last_name'),
                #     'new_user':True
                #     }, status=status.HTTP_200_OK)
                # print(social_user)

        # email = user_profile.get('email')
        # username = user_profile.get('name')
        # social_user = User.objects.get(social_id=user_profile.get('id'))
        #     return Response({
        #         'email':social_user.email,
        #         'token':social_user.generate_jwt_token(), 
        #         'username':social_user.username,
        #         'new_user':True
        #     }, status=status.HTTP_200_OK)
        # except:
        #     return Response({"error":'Token is either invalid or expired'}, status=status.HTTP_400_BAD_REQUEST)

        # print(auth_token)
        # serializer = self.serializer_class(data={'auth_token': auth_token})
        # print(serializer)

        

        # return Response(serializer.data, status=status.HTTP_200_OK)



# class FacebookLoginAPIview(APIView):
#     # Permit user to access this endpoint.
#     permission_classes = (AllowAny,)
#     renderer_classes = (UserJSONRenderer,)
#     serializer_class = UserSerializer

#     # Retrieving the facebook data of the user
#     def get(self, request):
#         app_id = '367351517400934'
#         app_secret = '92f37eabfb7777856e6001ab2ab1a5bb'
#         redirect_url = 'http://localhost:8000/api/users/facebook-login/'
#         perms = ['email', 'public_profile']

#         graph = facebook.GraphAPI(access_token='57d69d28cc0592adbe4c0a03d7d4f9dd', version='2.12')
#         code = request.GET.get('code')
#         if code is None:
#             facebook_url = graph.get_auth_url(app_id, redirect_url, perms)
#             return redirect(facebook_url)

#         access_token = graph.get_access_token_from_code(code, redirect_url, app_id, app_secret=app_secret)
#         graph2 = facebook.GraphAPI(access_token=access_token.get('access_token'), version='2.12')
#         user = graph2.get_object('me', fields='id, first_name, last_name, email')
#         try:
#             saved_social_user = User.objects.get(social_id=user.get('id'))
#         except User.DoesNotExist:
#             saved_social_user = None

        

#         return Response({
#                 'email':saved_social_user.email,
#                 'token':'replace with jwt token', 
#                 'username':saved_social_user.username,
#                 'first_name':user.get('first_name'),
#                 'last_name':user.get('last_name'),
#                 'new_user':False
#                 }, status=status.HTTP_200_OK)


# class GoogleLoginAPIview(APIView):
#     # The Permissions for the user to access this endpoint.
#     permission_classes = (AllowAny,)
#     renderer_classes = (UserJSONRenderer,)
#     serializer_class = GoogleSocialAuthSerializer

#     pass

#     def get(self, request):
#         app_id = '697152083390-mgr6vnknqpoim05nj2m9fd8a8srn4113.apps.googleusercontent.com'
#         app_secret = 'QFBCECdN2pM9HKHJVQYpqVBm'
#         redirect_url = 'http://localhost:8000/api/users/google-login/'
#         perms = ['email', 'public_profile']

#         """
#         - this method gets the google token and decodes it
#         - it then logs in the user and adds the google credentials to the database
#         """

