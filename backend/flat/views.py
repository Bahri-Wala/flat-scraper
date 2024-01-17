from rest_framework.response import Response
from rest_framework import views, status
from . import serializers, models


class DataAPIView(views.APIView):

    def get(self, request) -> Response:
        data = models.Flat.objects.all()
        serializer = serializers.DataSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)