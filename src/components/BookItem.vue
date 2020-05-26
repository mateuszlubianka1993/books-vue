<template>
	<mdb-container>
		<mdb-row>
			<mdb-col>
				<mdb-card>
					<mdb-view hover>
							<mdb-card-image :src="book.volumeInfo.imageLinks.thumbnail" class="book-img" alt="Card image cap"></mdb-card-image>
							<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
					</mdb-view>
					<mdb-card-body>
						<mdb-card-title>{{ book.volumeInfo.title }}
                            <mdb-badge color="success">{{book.volumeInfo.averageRating}}</mdb-badge>
                        </mdb-card-title>
						<hr class="hr-light"/>
						<p :class="!isOpen ? 'closed' : 'opened'" class="font-small book-body mb-3">{{book.volumeInfo.description ? book.volumeInfo.description : 'Unfortunately, the description is not available.'}}</p>
						<a @click="isOpen = !isOpen" class="small d-flex justify-content-end"><h5>Read more <mdb-icon icon="angle-double-right" class="pl-1" /></h5></a>
					</mdb-card-body>
				</mdb-card>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbBadge,
  mdbCardBody,
  mdbCardTitle, 
  mdbView,
  mdbMask,
  mdbIcon,
} from "mdbvue";

export default {
  name: "BookItem",
  props: ["book"],
  data() {
      return {
          isOpen: false
      }
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbBadge,
    mdbCardBody,
    mdbCardTitle,
    mdbView,
    mdbMask,
    mdbIcon,
  },
};
</script>

<style>
.book-img img {
    width: 100% !important;
}
.book-body {
    overflow: hidden;
    text-overflow: ellipsis;
}
.closed {
    height: 50px;
}
.opened {
    height: auto;
}
</style>
